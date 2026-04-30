import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import * as Caracteristics from 'pages/Building/Datasheet/caracteristics';
import Inactive from 'components/Inactive';
import SliderNew from 'components/SliderNew';
import OptimizedBuildingImage from 'components/OptimizedImage';

// helpers
import Link from 'next/link';
import { formatCurrency, formatCurrencyToText } from 'helpers/utils';

// actions
import { setMain } from 'store/modules/main/actions';

import {
  Container,
  SliderContainer,
  SliderItem,
  LinkTag,
  Infos,
  Category,
  CategoryRelease,
  Local,
  Reference,
  CaracteristicsGroup,
  ValuesFavGroup,
  CatLocGroup,
  Price,
  Description,
  ScheduleButton,
  ImageWrapper,
} from './styles';

function BuildingList({
  item,
  className,
  useBtSchedule,
  useInactive,
  positionIndex = 1,
  page = '',
}) {
  const {
    values,
    gallery,
    address,
    infos = {},
    label,
    category,
    type,
    reference,
    source,
    status,
  } = item;
  const [ gtmObj, setGtmObj ] = useState(null);
  const dispatch = useDispatch();
  const { searchFunnel } = useSelector((state) => state.main);
  const gallerySettings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleBtSchedule = useCallback(() => {
    // dispatch(
    //   setMain({
    //     modalContact: true,
    //     modalContactMessage: `Olá, gostaria de saber mais sobre o imóvel ${reference} - ${
    //       address.local ? `${address.local}, ` : ''
    //     } ${infos.areaTotal ? `com ${infos.areaTotal} m²,` : ''} ${
    //       infos.bedrooms ? `${infos.bedrooms} quartos` : ''
    //     } ${infos.parking ? `e ${infos.parking} vagas` : ''}.`,
    //   })
    // );
    dispatch(
      setMain({
        currentBuilding: item,
        contactBarActive: true,
        contactBarForced: true,
      })
    );
  }, []);

  const getCaracteristics = useCallback(() => {
    let items = [];
    const categoryText = category ? category : '';

    if (label && Object.keys(label).length > 0) {
      items.push(
        <Caracteristics.BuildingLabels
          labels={label}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (infos.bedrooms || (infos.bedroomsStart && !infos.bedroomsEnd)) {
      items.push(
        <Caracteristics.Bedrooms
          type={type}
          bedrooms={infos.bedrooms}
          bedroomsStart={infos.bedroomsStart}
          suites={infos.suites}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (infos.bedroomsStart && infos.bedroomsEnd) {
      items.push(
        <Caracteristics.BedroomsBetween
          start={infos.bedroomsStart}
          end={infos.bedroomsEnd}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (infos.parking || (infos.parkingStart && !infos.parkingEnd)) {
      items.push(
        <Caracteristics.Parking
          type={type}
          parking={infos.parking}
          parkingStart={infos.parkingStart}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (infos.parkingStart && infos.parkingEnd) {
      items.push(
        <Caracteristics.ParkingBetween
          start={infos.parkingStart}
          end={infos.parkingEnd}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (
      infos.areaBuilding &&
      infos.use !== 'COMERCIAL' &&
      categoryText !== 'Cobertura' &&
      categoryText !== 'Apartamento' &&
      categoryText.search('Casa') < 0
    ) {
      items.push(
        <Caracteristics.AreaBuilding
          areaBuilding={infos.areaBuilding}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (infos.areaTotal) {
      items.push(
        <Caracteristics.AreaUseFul
          type={type}
          category={categoryText}
          areaUseful={infos.areaTotal}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (
      infos.areaGround &&
      infos.use !== 'COMERCIAL' &&
      categoryText !== 'Cobertura' &&
      categoryText !== 'Apartamento'
    ) {
      items.push(
        <Caracteristics.AreaGround
          areaGround={infos.areaGround}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (
      infos &&
      (infos.areaUsefulStart || infos.areaUsefulEnd) &&
      ((category && categoryText.search('Casa') < 0) ||
        infos.areaUseful !== '') &&
      infos.use !== 'COMERCIAL'
    ) {
      items.push(
        <Caracteristics.AreaUseFulBetween
          start={infos.areaUsefulStart}
          end={infos.areaUsefulEnd}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    if (
      infos &&
      infos.areaTotal &&
      infos.use !== 'COMERCIAL' &&
      source !== 'praia' &&
      source !== 'campo' &&
      categoryText !== 'Cobertura' &&
      categoryText !== 'Apartamento' &&
      categoryText.search('Casa') < 0
    ) {
      items.push(
        <Caracteristics.AreaTotal
          areaTotal={infos.areaTotal}
          key={`caracteristic-${reference}-${items.length}`}
        />
      );
    }

    items = items.slice(0, 4);

    return items;
  }, []);

  useEffect(() => {
    const obj = page
      ? {
          className: 'holos-search-product',
          showcase: '',
        }
      : null;

    if (page) {
      if (page === 'search') {
        obj.showcase = 'Busca';
      } else if (page === 'search-dream') {
        obj.showcase = 'Só Quero Sonhar';
      } else if (page === 'building') {
        obj.showcase = 'Imóvel Recomendado';
      } else if (page === 'favorites') {
        obj.className = 'holos-account-product';
        obj.showcase = 'Favoritos';
      }
    }

    setGtmObj(obj);
  }, [ page ]);

  return (
    <Container className={className} useBtSchedule={useBtSchedule} page={page}>
      {useInactive && status === 'inactive' && <Inactive />}
      <SliderContainer useBtSchedule={useBtSchedule} page={page}>
        <SliderNew
          type="gallery"
          arrowsColor="white"
          arrowsClassName={gtmObj ? `${gtmObj.className}-image-arrow` : ''}
          settings={gallerySettings}
        >
          {gallery &&
            gallery.length > 0 &&
            gallery.map((galleryItem, galleryItemIndex) => {
              return (
                galleryItem.tipo === 'imagem' && (
                  <SliderItem
                    key={`item-gallery-${reference}-${galleryItemIndex}`}
                  >
                    <Link href={`/${item.slug}`} passHref>
                      <LinkTag
                        className={gtmObj ? gtmObj.className : ''}
                        data-showcase={gtmObj ? gtmObj.showcase : ''}
                        data-product-id={item.reference}
                        data-position={positionIndex}
                      >
                        <ImageWrapper useBtSchedule={useBtSchedule} page={page}>
                          <OptimizedBuildingImage
                            src={galleryItem.src}
                            alt={`Axpe ${category} - ${reference}`}
                            layout="fill"
                            className="next-image"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            priority={galleryItemIndex === 0} // Prioridade para primeira imagem
                          />
                        </ImageWrapper>
                      </LinkTag>
                    </Link>
                  </SliderItem>
                )
              );
            })}
        </SliderNew>
      </SliderContainer>
      <Infos releaseDelivery={infos.releaseDelivery} page={page}>
        <Link href={`/${item.slug}`} passHref>
          <LinkTag
            className={gtmObj ? gtmObj.className : ''}
            data-showcase={gtmObj ? gtmObj.showcase : ''}
            data-product-id={item.reference}
            data-position={positionIndex}
          >
            <CatLocGroup page={page}>
              <Category page={page}>
                {type === 'lancamento'
                  ? infos.releaseStatus === 'Pronto'
                    ? 'Pronto para morar'
                    : infos.releaseStatus
                  : category || 'Pronto para morar'}
              </Category>
              <div>
                <div>
                  {address && address.local && <Local>{address.local}</Local>}
                  {type === 'lancamento' && (
                    <CategoryRelease>{category}</CategoryRelease>
                  )}
                </div>
                <Reference page={page}>Ref {item.reference}</Reference>
              </div>
            </CatLocGroup>
          </LinkTag>
        </Link>

        <ValuesFavGroup page={page}>
          <Link href={`/${item.slug}`} passHref>
            <LinkTag
              className={gtmObj ? gtmObj.className : ''}
              data-showcase={gtmObj ? gtmObj.showcase : ''}
              data-product-id={item.reference}
              data-position={positionIndex}
            >
              <div>
                {!values.sell && !values.rent && values.valueOnlyConsults ? (
                  <Price>Valores sob consulta</Price>
                ) : null}
                {(!!values.sell || !!values.release) &&
                !values.valueOnlyConsults &&
                (!searchFunnel ||
                  !searchFunnel.finality ||
                  searchFunnel.finality == 'venda') ? (
                  <Price page={page}>
                    {type === 'lancamento' ? 'A partir de: ' : 'Venda: '}
                    {!!values.sell &&
                      formatCurrency
                        .format(parseInt(values.sell))
                        .replace('R$', formatCurrencyToText(values.currency))}
                    {!!values.release &&
                      formatCurrency
                        .format(parseInt(values.release))
                        .replace('R$', formatCurrencyToText(values.currency))}
                        </Price>
                      ) : !!values.sell && values.valueOnlyConsults ? (
                        <Price page={page}>Valores sob consulta</Price>
                      ) : null}
                      {!!values.rent &&
                      !values.valueOnlyConsults &&
                      (!searchFunnel ||
                        !searchFunnel.finality ||
                        searchFunnel.finality == 'aluguel') ? (
                        <Price page={page}>
                          Locação:{' '}
                          {formatCurrency
                            .format(parseInt(values.rent))
                            .replace('R$', formatCurrencyToText(values.currency))}
                        </Price>
                      ) : !!values.rent && values.valueOnlyConsults ? (
                        <Price page={page}>Valores sob consulta</Price>
                      ) : <Price page={page}></Price>}
                    </div>
            </LinkTag>
          </Link>
        </ValuesFavGroup>
        <Link href={`/${item.slug}`} passHref>
          <LinkTag
            className={gtmObj ? gtmObj.className : ''}
            data-showcase={gtmObj ? gtmObj.showcase : ''}
            data-product-id={item.reference}
            data-position={positionIndex}
          >
            <div>
              <CaracteristicsGroup page={page}>
                {getCaracteristics().map((item, itemIndex) => item)}
              </CaracteristicsGroup>
              <Description page={page}>{infos.internalDescription}</Description>
            </div>
          </LinkTag>
        </Link>
        {useBtSchedule && (
          <ScheduleButton
            type="button"
            onClick={handleBtSchedule}
            className={gtmObj ? `${gtmObj.className}-schedule` : ''}
            data-showcase={gtmObj ? gtmObj.showcase : ''}
            data-product-id={item.reference}
            data-position={positionIndex}
            page={page}
          >
            Agende uma visita
          </ScheduleButton>
        )}
      </Infos>
      {/* {type === 'lancamento' && infos.releaseDelivery && (
            <ReleaseDelivery useBtSchedule={useBtSchedule}>
              {infos.releaseStatus === 'Pronto'
                ? 'Entregue em '
                : 'Previsão de entrega em '}
              <span>{infos.releaseDelivery}</span>
            </ReleaseDelivery>
          )} */}
    </Container>
  );
}

export default BuildingList;
