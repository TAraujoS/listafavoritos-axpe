import React from 'react';
import Tag from 'components/Tag';
import * as Caracteristics from 'pages/Building/Datasheet/caracteristics';
import SVG from 'react-inlinesvg';

// Importações inline para evitar delays
const ILocation = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InZ1ZXNheC9saW5lYXIvbG9jYXRpb24iPgo8ZyBpZD0ibG9jYXRpb24iPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNOS4wMDAxNiAxMC4wNzI1QzEwLjI5MjUgMTAuMDcyNSAxMS4zNDAyIDkuMDI0ODYgMTEuMzQwMiA3LjczMjUyQzExLjM0MDIgNi40NDAxNyAxMC4yOTI1IDUuMzkyNTIgOS4wMDAxNiA1LjM5MjUyQzcuNzA3ODEgNS4zOTI1MiA2LjY2MDE2IDYuNDQwMTcgNi42NjAxNiA3LjczMjUyQzYuNjYwMTYgOS4wMjQ4NiA3LjcwNzgxIDEwLjA3MjUgOS4wMDAxNiAxMC4wNzI1WiIgc3Ryb2tlPSIjM0Y1QTVFIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTIuNzE0NzggNi4zNjc1QzQuMTkyMjggLTAuMTI3NDk4IDEzLjgxNDggLTAuMTE5OTk4IDE1LjI4NDggNi4zNzVDMTYuMTQ3MyAxMC4xODUgMTMuNzc3MyAxMy40MSAxMS42OTk4IDE1LjQwNUMxMC4xOTIzIDE2Ljg2IDcuODA3MjggMTYuODYgNi4yOTIyOCAxNS40MDVDNC4yMjIyOCAxMy40MSAxLjg1MjI4IDEwLjE3NzUgMi43MTQ3OCA2LjM2NzVaIiBzdHJva2U9IiMzRjVBNUUiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=';
const ICheck = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgNC43NjQ3MUw1LjE1Mzg1IDlMMTMgMSIgc3Ryb2tlPSIjM0Y1QTVFIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';

import {
    DatasheetContent,
    BlockOne,
    Type,
    GroupInfo,
    Neighborhood,
    GroupTags,
    BlockTwo,
    BlockThree,
    Location,
    InfoContent,
    ButtonMoreInfo,
    MainContainer,
    PriceGroupDesktop,
    PriceGroupMobile,
    CharacteristicsGrid,
    CharacteristicItem,
    BuildingTitle,
    Ref
} from 'pages/Building/Datasheet/styles';
import { ButtonIcon } from '../Headerbar/styles';
import ShareIconSVG from 'assets/icons/share.svg';



// Componente otimizado para LCP - renderiza imediatamente
const LCPPlaceholder = () => {
  return (
    <MainContainer>
      <DatasheetContent>
        <BlockOne type="pronto">
          <Neighborhood>
            Alto de Pinheiros
            <Ref> Ref AX155499</Ref>
          </Neighborhood>
          
          <BuildingTitle>Casa ampla com jardim, piscina e espaços generosos para conviver bem no Alto de Pinheiros.</BuildingTitle>
          <hr />

          <GroupInfo>
            <InfoContent>
              <GroupTags>
                <Tag label={'Novidade'} icon="star" color="blueLight" />
              </GroupTags>
              <Type>Casa</Type>
            </InfoContent>
            <Location>
              <a href="https://www.google.com/maps/search/?api=1&query=Alto%20de%20Pinheiros%2C%20SP%2C%20Brasil" target="_blank" rel="noopener noreferrer">
                <img src={ILocation} alt="ícone de localização" />
                <p>Ver localização</p>
              </a>
              <ButtonIcon
                type="button"
                className="btn-share holos-search-header-button"
                data-showcase="Busca"
                data-label="Share"
                aria-label='Compartilhar'
              >
                <SVG src={ShareIconSVG} uniquifyIDs={true} aria-hidden="true"/>
              </ButtonIcon>
            </Location>
          </GroupInfo>
        </BlockOne>

        <PriceGroupMobile>
          <Caracteristics.Sell
            valueOnlyConsults={false}
            sell="3600000"
            iptu="2600"
            condo=""
            currency="BRL"
            type="pronto"
          />
          <Caracteristics.Expenses
            valueOnlyConsults={false}
            rent=""
            iptu="2600"
            condo=""
            currency="BRL"
          />
          <ButtonMoreInfo>Fale com um corretor</ButtonMoreInfo>
        </PriceGroupMobile>

        <BlockThree type="pronto">
          <Caracteristics.AreaUseFul areaUseful="410" />
          <Caracteristics.AreaTotal areaTotal="450" />
          <Caracteristics.AreaBuilding areaBuilding="410" />
          <Caracteristics.AreaGround areaGround="450" />
          <Caracteristics.Bedrooms bedrooms="4" />
          <Caracteristics.Suites suites="4" />
          <Caracteristics.Parking parking="5" />
        </BlockThree>

        <BlockTwo>
          <CharacteristicsGrid>
            <CharacteristicItem>
              <img src={ICheck} alt="ícone de Check" />
              <p>Churrasqueira</p>
            </CharacteristicItem>
            <CharacteristicItem>
              <img src={ICheck} alt="ícone de Check" />
              <p>Piscina Privativa</p>
            </CharacteristicItem>
            <CharacteristicItem>
              <img src={ICheck} alt="ícone de Check" />
              <p>Sauna</p>
            </CharacteristicItem>
            <CharacteristicItem>
              <img src={ICheck} alt="ícone de Check" />
              <p>Jardim Privativo</p>
            </CharacteristicItem>
          </CharacteristicsGrid>
        </BlockTwo>
      </DatasheetContent>

      <PriceGroupDesktop type="pronto">
        <Caracteristics.Sell
          valueOnlyConsults={false}
          sell="3600000"
          iptu="2600"
          condo=""
          currency="BRL"
          type="pronto"
        />
        <Caracteristics.Expenses
          valueOnlyConsults={false}
          rent=""
          iptu="2600"
          condo=""
          currency="BRL"
        />
        <ButtonMoreInfo>Fale com um corretor</ButtonMoreInfo>
      </PriceGroupDesktop>
    </MainContainer>
  );
};

export default LCPPlaceholder;
