import React from 'react';

// components
import BuildingsPanel from 'components/BuildingsPanel';
import BuildingList from 'components/Building/List';

// data
import DataJSON from './data';

// styles
import {
  Container,
  BuildingsContainer,
  BuildingsWrapper
} from 'pages/Guidelines/Buildings/styles';

function GuidelinesBuildings() {
  const data = {
    buildings: DataJSON
  };

  return (
    <Container>

      <BuildingsPanel
        title="Imóveis que você viu"
        buildingLayout="horizontal"
        data={data.buildings}
      />

      <BuildingsPanel
        title="Indicados para você"
        subtitle="Selecionamos alguns imóveis que acabaram de chegar"
        buildingLayout="vertical"
        data={data.buildings}
      />

      <BuildingsContainer>
        <BuildingsWrapper>
          <BuildingList
            item={data.buildings[0]}
          />
        </BuildingsWrapper>
      </BuildingsContainer>

    </Container>
  )
}

export default GuidelinesBuildings;
