import React from 'react';
import {
  formatCurrency,
  formatCurrencyToText,
  checkPluralSingular,
} from 'helpers/utils';
import {
  Price,
  InfoValue,
  PriceRelease,
  BuildingLabel,
  GroupTagsSearchPage,
  PriceExpenses
} from './styles';
import Tag from 'components/Tag';

export const Release = ({ release, type, currency }) =>
  !!release && (
    <PriceRelease type={type}>
      <p>
        {type === 'pronto' ? 'Venda' : 'A partir de'}{' '}
        {currency
          ? formatCurrency
              .format(release)
              .replace('R$', formatCurrencyToText(currency))
          : formatCurrency.format(release)}
      </p>
    </PriceRelease>
  );

export const OnlyConsults = () => (
  <Price>
    <p>Valores sob consulta</p>
  </Price>
);

export const Rent = ({ valueOnlyConsults, rent, iptu, condo, currency }) =>
  rent && !valueOnlyConsults ? (
    <Price>
      <div>
        <p>Locação:</p>
        <p>{formatCurrency.format(rent)}</p>
      </div>
    </Price>
  ) : (
    <Price className="price-wfull">
      <p>Aluguel:</p>
      <p>Valores sob consulta</p>
    </Price>
  );

export const Sell = ({
  valueOnlyConsults,
  sell,
  iptu,
  condo,
  type,
  currency,
}) =>
  sell && !valueOnlyConsults ? (
    <Price>
      <div>
        <p>{type === 'pronto' ? 'Venda' : 'A partir de'} </p>
        <p>
          {currency
            ? formatCurrency
                .format(sell)
                .replace('R$', formatCurrencyToText(currency))
            : formatCurrency.format(parseInt(sell + iptu + condo))}
        </p>
      </div>
    </Price>
  ) : (
    <Price className="price-wfull">
      <p>Venda:</p>
      <p>Valores sob consulta</p>
    </Price>
  );

  export const Expenses = ({ iptu, condo, currency }) => {
    return (
      <PriceExpenses>
        <p>Despesas Mensais</p>
          {condo ? (
            <dl>
              <dt>Condominio</dt>
              <dd>
                {currency
                  ? formatCurrency
                      .format(parseInt(condo))
                      .replace('R$', formatCurrencyToText(currency))
                  : formatCurrency.format(parseInt(condo))}
              </dd>
            </dl>
          ) : null}
          {iptu ? (
            <dl>
              <dt>IPTU</dt>
              <dd>
                {currency
                  ? formatCurrency
                      .format(parseInt(iptu))
                      .replace('R$', formatCurrencyToText(currency))
                  : formatCurrency.format(parseInt(iptu))}
              </dd>
            </dl>
          ) : null}
      </PriceExpenses>
    )
  }
  


export const Bedrooms = ({ type, bedrooms, bedroomsStart }) => {
  const wordBedroom = checkPluralSingular(
    'Quarto',
    !!bedrooms ? bedrooms : bedroomsStart
  );
  return !!bedrooms || (!!bedroomsStart && type === 'lancamento') ? (
    <InfoValue>
      {!!bedrooms ? (
        <p>
         {!!bedrooms && wordBedroom}
        </p>
      ) : !!bedroomsStart && type === 'lancamento' ? (
        <p>
          {!!bedrooms && wordBedroom}
        </p>
      ) : null}
       <p>{bedrooms}</p>
    </InfoValue>
  ) : null;
};

export const Suites = ({ type, suites, bedroomsStart }) => {
  const wordBedroom = checkPluralSingular(
    'Suíte',
    !!suites ? suites : bedroomsStart
  );
  return !!suites ? (
    <InfoValue>
      {!!suites ? (
        <p>
         {!!suites && wordBedroom}
        </p>
      ) : !!bedroomsStart && type === 'lancamento' ? (
        <p>
          {!!suites && wordBedroom}
        </p>
      ) : null}
       <p>{suites}</p>
    </InfoValue>
  ) : null;
};

export const BedroomsBetween = ({ start, end }) =>
  !!start && !!end && end !== 9999 ? (
    <InfoValue>
      <p>
        {start} a {end}
      </p>
      <p>Quartos</p>
    </InfoValue>
  ) : (
    <Bedrooms bedrooms={start} />
  );

export const Parking = ({ type, parking, parkingStart }) =>
  !!parking || (!!parkingStart && type === 'lancamento') ? (
    <InfoValue>
      <p>{checkPluralSingular('Vaga', !!parking ? parking : parkingStart)}</p>
      {!!parking ? (
        <p>{parking}</p>
      ) : !!parkingStart && type === 'lancamento' ? (
        <p>{parkingStart}</p>
      ) : null}
     
    </InfoValue>
  ) : null;

export const ParkingBetween = ({ start, end }) =>
  !!start && !!end && end !== 9999 ? (
    <InfoValue>
      <p>Vagas</p>
      <p>
        {start} a {end}
      </p>
    </InfoValue>
  ) : (
    <Parking parking={start} />
  );

export const AreaBuilding = ({ areaBuilding }) =>
  !!areaBuilding && (
    <InfoValue>
      <p>Área construída</p>
      <p>{formatCurrency.format(parseInt(areaBuilding)).replace('R$', '')}m²</p>
    </InfoValue>
  );

export const AreaGround = ({ areaGround }) =>
  !!areaGround && (
    <InfoValue>
      <p>Área de terreno</p>
      <p>{formatCurrency.format(parseInt(areaGround)).replace('R$', '')}m²</p>
    </InfoValue>
  );

export const AreaTotal = ({ areaTotal }) =>
  !!areaTotal && (
    <InfoValue>
      <p>Terreno</p>
      <p>{formatCurrency.format(parseInt(areaTotal)).replace('R$', '')}m²</p>
    </InfoValue>
  );

export const AreaUseFul = ({ category, type, areaUseful, areaUsefulStart }) =>
  !!areaUseful || (!!areaUsefulStart && type === 'lancamento') ? (
    <InfoValue>
      <p>
        {category && category.search('Casa') >= 0
          ? `Área construída`
          : `Área Útil`}
      </p>
      {!!areaUseful ? (
        <p>{formatCurrency.format(parseInt(areaUseful)).replace('R$', '')}m²</p>
      ) : !!areaUsefulStart && type === 'lancamento' ? (
        <p>
          {formatCurrency.format(parseInt(areaUsefulStart)).replace('R$', '')}m²
        </p>
      ) : null}
    </InfoValue>
  ) : null;

export const AreaUseFulBetween = ({ start, end }) =>
  !!start && !!end && end !== 99999999 ? (
    <InfoValue>
      <p>Área</p>
      <p>
        {formatCurrency.format(parseInt(start)).replace('R$', '')} a{' '}
        {formatCurrency.format(parseInt(end)).replace('R$', '')} m²
      </p>
    </InfoValue>
  ) : (
    <AreaUseFul areaUseful={start} />
  );

export const BuildingLabels = ({ labels }) =>
  !!labels && (
    <BuildingLabel>
      <GroupTagsSearchPage>
        {labels && labels.isExclusive && (
          <Tag label={'Exclusividade'} icon="check" color="orange" />
        ) } {labels.isNew && (
          <Tag label={'Novidade'} icon="star" color="blueLight" />
        ) } {labels.isFurnished && (
          <Tag label={'Mobiliado'} icon="sofa" color="greenLight" />
        )}
      </GroupTagsSearchPage>
    </BuildingLabel>
  );
