import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Api from 'services';

// helpers
import SeoData from 'helpers/seo';

// styles
import {
  Container,
  Wrapper,
  Header,
  Body,
  Box,
  BoxHeader,
  BoxWrapper,
  ListItems,
  Letter,
  LetterTitle,
  LetterPlaces,
  LetterPlace,
  LetterPlaceTitle,
} from 'pages/SiteMap/styles';

function SiteMap({ buildings, landings }) {
  const [ buildingsData, setBuildingsData ] = useState(null);

  useEffect(() => {
    const items = {};

    Object.keys(buildings).forEach((letter) => {
      const places = letter !== 'all' ? buildings[letter] : null;
      if (places) {
        items[letter] = {};

        Object.keys(places).forEach((place) => {
          const types = places[place];

          items[letter][place] = [];

          if (types) {
            Object.keys(types).forEach((type) => {
              const finalities = types[type];
              if (finalities) {
                Object.keys(finalities).forEach((finality) => {
                  const categories = finalities[finality];
                  if (categories) {
                    Object.keys(categories).forEach((category) => {
                      const uses = categories[category];
                      if (uses) {
                        Object.keys(uses).forEach((use) => {
                          const total = uses[use];
                          const url = `/busca?source=sao-paulo&finality=${finality.toLowerCase()}&use=${use.toUpperCase()}&ready_release=${type}&types=${encodeURI(category)}&local=${encodeURI(place)}`;
                          if (use !== 'Misto') {
                            items[letter][place].push({
                              title: `${finality} de ${category} - ${use} - ${place} (${total})`,
                              url,
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });

    setBuildingsData(items);
  }, []);

  return (
    <>
      <Head>
        <title>{`Mapa do site - ${SeoData.title}`}</title>
        <meta name="description" content={SeoData.description} />
      </Head>
      <Container>
        <Header>
          <Wrapper>
            <h2>Mapa do Site Axpe</h2>
            <h3>
              Imóveis Especiais
              <br />
              em São Paulo - SP
            </h3>
          </Wrapper>
        </Header>
        <Body>
          <Wrapper>
            <Box>
              <BoxHeader>
                <h4>Busca por bairros</h4>
                <p>
                  Selecione a letra inicial do bairro que deseja buscar um
                  imóvel.
                </p>
              </BoxHeader>
              {buildingsData && (
                <BoxWrapper>
                  {Object.keys(buildingsData).map((letter, letterIndex) => {
                    const places = buildingsData[letter];
                    return (
                      <Letter key={`sitemap-letter-${letterIndex}`}>
                        <LetterTitle>{letter}</LetterTitle>
                        <LetterPlaces>
                          {Object.keys(places).map((place, placeIndex) => {
                            const placeItems = places[place];
                            return (
                              <LetterPlace
                                fullWidth={true}
                                key={`sitemap-placeItem-${placeIndex}`}
                              >
                                <LetterPlaceTitle>{place}</LetterPlaceTitle>
                                <ListItems fullWidth={true}>
                                  {placeItems.map((item, itemIndex) => (
                                    <li key={`sitemap-item-${itemIndex}`}>
                                      <Link href={item.url} passHref>
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ListItems>
                              </LetterPlace>
                            );
                          })}
                        </LetterPlaces>
                      </Letter>
                    );
                  })}
                </BoxWrapper>
              )}
            </Box>

            {landings && landings.length >= 1 && (
              <Box>
                <BoxHeader>
                  <h4>Buscas especiais</h4>
                  <p>
                    Selecione a letra inicial do bairro que deseja buscar um
                    imóvel.
                  </p>
                </BoxHeader>
                <BoxWrapper>
                  <ListItems>
                    {landings.map((item, itemIndex) => (
                      <li key={`landing-item-${itemIndex}`}>
                        <Link href={`/landing/${item.slug}`} passHref>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ListItems>
                </BoxWrapper>
              </Box>
            )}
          </Wrapper>
        </Body>
      </Container>
    </>
  );
}

SiteMap.getInitialProps = async () => {
  const { buildings, landings } = await Api.SiteMap.getPage();
  return { buildings, landings };
};

export default SiteMap;
