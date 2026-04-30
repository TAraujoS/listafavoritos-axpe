import React from 'react';
import parse from 'html-react-parser';

// helpers
import { formatCurrency } from 'helpers/utils';

// components
import Button from 'components/Button';

// styles
import {
  Container,
  LinkContainer,
  Local,
  Infos,
  GroupInfo,
  Reference,
  Block1DestaqueTexto,
  Block2DestaqueTexto,
  Block1DestaqueTextoBullet,
  Block2DestaqueTextoBullet
} from './styles';

function sectionInfo(item) {
  return (
    <>
      <h4>{item.title}</h4>
      {item.title && <hr />}
      <Infos>{item.content || item.text}</Infos>
    </>
  );
}

function sectionDestaqueText(item) {
  return (
    <>
      <Block1DestaqueTexto>
        <h4>{item.title}</h4>
        {item.title && <hr />}
        <Infos>{item.text1}</Infos>
      </Block1DestaqueTexto>
      <Block2DestaqueTexto>
        <Infos>{item.text2}</Infos>
      </Block2DestaqueTexto>
    </>
  );
}

function sectionDestaqueTextBullets(item) {
  const { bullets, text, title } = item.texts;
  const newBullets = !bullets
    ? []
    : parse(
        bullets
          .replace(/\n/g, '')
          .replace(/\r/g, '')
          .replace(/\t/g, '')
      );

  return (
    <>
      <Block1DestaqueTextoBullet>
        <h4>{title}</h4>
        {title && <hr />}
        <Infos>{text}</Infos>
      </Block1DestaqueTextoBullet>
      <Block2DestaqueTextoBullet>{newBullets}</Block2DestaqueTextoBullet>
    </>
  );
}

function sectionMultiInfos(item, labelTitle, type, useButtom) {
  const buildingObj = item && item.building && Object.keys(item.building).length > 0 ? item.building : item;
  const { category, values, infos, reference, address } = buildingObj;

  const sell =
    values && Object.keys(values).length > 0 && values.sell
      ? parseInt(values.sell)
      : '';
  const release =
    values && Object.keys(values).length > 0 && values.release
      ? parseInt(values.release)
      : '';
  const rent =
    values && Object.keys(values).length > 0 && values.rent
      ? parseInt(values.rent)
      : '';

  return (
    <>
      <GroupInfo>
        {labelTitle && <h4>{item[labelTitle]}</h4>}
        {labelTitle && item[labelTitle] && <hr />}

        {address && address.local && <Local>{address.local}</Local>}
        <Infos>{category}</Infos>
        <Infos>
          {(item.type && item.type === 'lancamento') ||
          (item.building && item.building.type === 'lancamento')
            ? infos && infos.areaUsefulStart && infos.areaUsefulEnd !== 99999999
              ? `${infos.areaUsefulStart}m² a ${infos.areaUsefulEnd}m²`
              : null
            : `${infos && infos.areaTotal ? infos.areaTotal + ' m²' : null}`}
        </Infos>
        {sell || release || rent ? (
          <Infos>
            {sell || release ? (
              <>
                {(item.type && item.type === 'lancamento') ||
                (item.building && item.building.type === 'lancamento')
                  ? 'A partir de: '
                  : 'Venda: '}
                {sell
                  ? formatCurrency.format(sell)
                  : formatCurrency.format(release)}
              </>
            ) : null}
            {rent ? <span>Aluguel: {formatCurrency.format(rent)}</span> : null}
          </Infos>
        ) : (
          <span>Valores sob consulta</span>
        )}

        <Reference type={type}>Ref {reference}</Reference>
      </GroupInfo>

      {(useButtom || type === 'slickGrid' || type === 'slickLeft') && (
        <LinkContainer type={type}>
          <Button
            route={`/${buildingObj.slug}`}
            className="holos-home-product"
            data-showcase="Carrossel de Produtos"
            data-product-id={buildingObj.reference}
          >
            Saiba mais
          </Button>
        </LinkContainer>
      )}
    </>
  );
}

function renderSelection(type, item, useButtom) {
  switch (type) {
    case 'slick':
      return sectionInfo(item);
    case 'slickLeft':
      return sectionMultiInfos(item, 'title', type);
    case 'slickGrid':
      return sectionMultiInfos(item, 'titleWhite', type);
    case 'slickLarge':
    case 'slickSmall':
      return sectionMultiInfos(item, '', type, useButtom);
    case 'destaque-texto':
      return sectionDestaqueText(item);
    case 'destaque-texto-bullets':
      return sectionDestaqueTextBullets(item);
    default:
      return sectionInfo(item);
  }
}

export default function Slick({
  type,
  item,
  className,
  showHorizontalRule = true,
  useButtom = true
}) {
  return (
    <Container
      className={className}
      type={type}
      showHorizontalRule={showHorizontalRule}
    >
      {renderSelection(type, item, useButtom)}
    </Container>
  );
}
