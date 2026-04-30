import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Slider from 'react-slick';
import { useRouter } from 'next/router'
import Api from 'services';
import GTM from 'helpers/gtm';

// data
import DataJSON from 'pages/Dream/data.json';

// helpers
import Link from 'next/link';
import SeoData from 'helpers/seo';

// components
import BuildingList from 'components/Building/List';
import BlockHighlighted from 'components/BlockHighlighted';

// styles
import { Container, Header, List, Footer } from 'pages/Dream/Detail/styles';
import {
  ListButton,
  ListText,
  ListImage
} from 'pages/Dream/styles';

// styles
import {
  Buildings,
  BuildingsNotFound,
} from 'pages/Search/styles'

function DreamDetail({ buildings }) {
  const router = useRouter();
  const { query: { slug } } = router;
  const [ allData, setAllData ] = useState(null);
  const [ data, setData ] = useState(null);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    draggable: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    function getData() {
      const results = DataJSON.data.filter(item => item.slug === slug);

      if(results.length) {
        setData(results[0]);
      }

      GTM.dataLayerPush({
        searchFilters: 'Só Quero Sonhar'
      });

      setAllData(DataJSON.data);
    }

    getData();
  }, [ ]);

  return data ? (
    <>
      <Head>
        <title>Imóveis {data.title} para se inspirar {SeoData.shortTitle}</title>
        <meta name="description" content={`Venha conhecer esta seleção dos melhores imóveis ${data.title} para você se inspirar na hora de comprar ou alugar seu imóvel. Confira!`} />
      </Head>
      <Container>
        <Header>
          <h1>Só quero Sonhar <span>{data.title}</span></h1>
          {data.subtitle && <p>{data.subtitle}</p>}
        </Header>

        <List>
          <h2>Confira nossa seleção com as casas mais <span>{data.title}</span></h2>
          <Buildings>
            {buildings && buildings.length > 0 ? buildings.map((building, buildingIndex) => (
                <BuildingList
                  item={building}
                  page="search-dream"
                  positionIndex={buildingIndex + 1}
                  key={`building-searchitem-${building.reference}-${buildingIndex}`}
                />
              )) : (
              <BuildingsNotFound>
                <h6>Não encontramos o imóveis na categoria que você procura <span>:(</span></h6>
                <p>Tente fazer uma <a href="/search">busca!</a></p>
              </BuildingsNotFound>
            )}
          </Buildings>
        </List>

        <Footer>
          <h2>Sonhe também com:</h2>
          <Slider {...sliderSettings}>
            {allData.map((item, itemIndex) => (
              <article key={`dreamsingle-list-item-${itemIndex}`}>
                <Link href={`/so-quero-sonhar/${item.slug}`} passHref>
                  <ListButton>
                    <ListText>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </ListText>
                    <ListImage src={`/static/dream/cover-${item.slug}.jpg`} alt={item.title} />
                  </ListButton>
                </Link>
              </article>
            ))}
          </Slider>
        </Footer>
        <BlockHighlighted type="contactHome" />
      </Container>
    </>
  ) : null;
}

DreamDetail.getInitialProps = async ({ query }) => {
  const response = await Api.Dream.getPage(query.slug);

  const pageDetails = DataJSON.data.filter(item => item.slug === query.slug)[0];

  const pageTitle = `Imóveis ${pageDetails.title} para se inspirar ${SeoData.shortTitle}`;
  const pageDesc = `Venha conhecer esta seleção dos melhores imóveis ${pageDetails.title} para você se inspirar na hora de comprar ou alugar seu imóvel. Confira!`;
  const pageBanner = (response.data[0].imageFeatured && response.data[0].imageFeatured.desktop) ? response.data[0].imageFeatured.desktop : null;

  return {
    total: response.total,
    buildings: response.data,
    meta: {
      title: pageTitle,
      description: pageDesc,
      image: pageBanner
    }
  };
}

export default DreamDetail;