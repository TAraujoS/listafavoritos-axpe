import React, { useEffect, useState } from 'react'; // helpers
import Head from 'next/head';
import Api from 'services';

// helpers
import SeoData from 'helpers/seo';
import CookieBuildingSeen from 'helpers/cookieBuildingSeen';

// components
import BlockHighlighted from 'components/BlockHighlighted';
import BuildingList from 'components/Building/List';

// styles
import { Buildings } from 'pages/Search/styles';
import {
  Container,
  Body,
  Empty,
} from 'pages/VisitedBuildings/styles';

function VisitedBuildings() {
  const [ loaded, setLoaded ] = useState(false);
  const [ buildingsSeen, setBuildingsSeen ] = useState([]);

  useEffect(() => {
    async function loadBuildinsSeen() {
      const buildings = CookieBuildingSeen.get();

      if (!buildings.length) {
        setLoaded(true);
      }

      const listBuildingsSeen = await Api.Search.getBuildings(
        `?reference=${buildings.join(',')}`
      );

      setBuildingsSeen(listBuildingsSeen.data);
      setLoaded(true);
    }

    loadBuildinsSeen();
  }, []);

  return (
    <>
      <Head>
        <title>{`Minha Conta - ${SeoData.title}`}</title>
        <meta name="description" content={SeoData.description} />
      </Head>
      <Container>
        <BlockHighlighted type="visitedBuildings" />
        <Body>
          {loaded && (
            <>
              {buildingsSeen.length >= 1 ? (
                <Buildings>
                 {buildingsSeen.map((building, buildingIndex) => (
                  <BuildingList
                    item={building}
                    layout="horizontal"
                    positionIndex={buildingIndex + 1}
                    key={`building-visited-${building.reference}-${buildingIndex}`}
                  />
                ))}
                </Buildings>
              ) : (
                <Empty>
                  <h4>Você ainda não visualizou nenhum imóvel</h4>
                  <p>
                    Navegue pelo site, visualize imóveis, e eles ficarão
                    disponíveis para visualizações futuras aqui.
                  </p>
                </Empty>
              )}
            </>
          )}
        </Body>
      </Container>
    </>
  );
}

export default VisitedBuildings;
