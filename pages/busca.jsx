import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import SVG from 'react-inlinesvg';
import Api from 'services';
import Router, { useRouter } from 'next/router';
import GTM from 'helpers/gtm';

// store
import { setMain } from 'store/modules/main/actions';

// components
import Button from 'components/Button';
import Headerbar from 'components/Headerbar';
import BlockHighlighted from 'components/BlockHighlighted';
import BuildingList from 'components/Building/List';
import NewsletterFooter from 'components/NewsletterFooter';
import BuildingsPanel from 'components/BuildingsPanel';
import CustomSelect from 'components/CustomSelect';
import OptimizedBuildingImage from 'components/OptimizedImage';

// helpers
import { getParamsFromObject } from 'helpers/utils';

// assets
import ArrowIconSVG from 'assets/icons/arrow.svg';
import IOrderBlockOn from 'assets/icons/order-block-active.svg';
import IOrderRowOn from 'assets/icons/order-row-active.svg';
import IOrderBlockOff from 'assets/icons/order-block-off.svg';
import IOrderRowOff from 'assets/icons/order-row-off.svg';

// styles
import {
  Container,
  Header,
  HeaderOrder,
  HeaderOrderButton,
  HeaderOrderList,
  HeaderOrderListButton,
  Wrapper,
  ButtonBack,
  Buildings,
  BuildingsNotFound,
  SearchBanner,
  Infos,
  ImageContainer,
  BuildingsLoadMore,
  DisplayOrder,
} from 'pages/Search/styles';

function Search({ total, totalPages, data, banner, locals }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    query,
    query: { source, finality, reference, order },
  } = router;

  const SESSION_STORAGE_KEY = 'scrollPositionBusca';

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }

    const handleRouteChangeStart = () => {
      sessionStorage.setItem(SESSION_STORAGE_KEY, window.scrollY.toString());
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [ router.events ]);

  const { searchFormActive } = useSelector((state) => state.main);
  const baseUrl = process.env.config?.siteUrl || 'https://www.axpe.com.br';

  const canonicalPath = (() => {
    const url = new URLSearchParams(query);
  
    const canonicalParams = new URLSearchParams();
    for (const [ key, value ] of url.entries()) {
      if (key !== 'page') canonicalParams.append(key, value);
    }
  
    return `${baseUrl}/busca${canonicalParams.toString() ? '?' + canonicalParams.toString() : ''}`;
  })();

  const keysToHumanNames = {
    source: 'Localização',
    finality: 'Para',
    use: 'Tipo',
    ready_release: '',
    furnished: 'Mobiliado',
    types: 'Tipo do imóvel',
    local: 'Bairros/Cidades',
    price_start: 'Preço inicial',
    price_end: 'Preço final',
    area_start: 'Area inicial',
    area_end: 'Area final',
    bedroom_start: 'Quartos inicial',
    bedroom_end: 'Quartos final',
    parking_start: 'Número de vagas no estacionamento inicial',
    parking_end: 'Número de vagas no estacionamento final',
    reference: 'Referência',
    order: 'Ordernar por',
  };

  const orderOptions = [
    { label: 'Mais Recentes', value: 'latest' },
    { label: 'Menor Área útil', value: 'lowest_area' },
    { label: 'Maior Área útil', value: 'biggest_area' },
    { label: 'Menor Preço', value: 'lowest_price' },
    { label: 'Maior Preço', value: 'biggest_price' },
  ];

  const finalityOptions = [
    { value: 'venda', label: 'Comprar' },
    { value: 'aluguel', label: 'Alugar' },
  ];

  const orderTiming = useRef(false);
  const [ loadNewPage, setLoadNewPage ] = useState(false);
  const [ orderByComboActive, setOrderByComboActive ] = useState(false);
  const [ orderBy, setOrderBy ] = useState('');
  const [ page, setPage ] = useState(+query.page || 1);
  const [ buildings, setBuildings ] = useState(null);
  const [ dataLoaded, setDataLoaded ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ suggestions, setSuggestions ] = useState(null);
  const [ isOrderListActive, setIsOrderListActive ] = useState(true);

  const setDataInitialGTM = useCallback(() => {
    GTM.dataLayerPush({
      event: 'view_search_page',
      searchFilters: Object.keys(query)
        .map((key) => {
          let value = query[key];

          if (key === 'ready_release') {
            if (query[key] === 'pronto') {
              return `Pronto para morar`;
            } else {
              return `Lançamento`;
            }
          } else if (key === 'source') {
            if (value === 'sao-paulo') {
              value = 'São Paulo';
            } else {
              value = value[0].toUpperCase() + value.slice(1);
            }
          } else if (key === 'order') {
            const results = orderOptions.filter((item) => item.value === value);
            if (results) {
              value = results[0].label;
            }
          }

          return `${keysToHumanNames[key]}: ${value}`;
        })
        .join(' | '),
    });
  }, [ query ]);

  const getOrderBySelected = useCallback(() => {
    return orderOptions.filter((orderItem) => orderItem.value == orderBy);
  }, [ orderBy ]);

  const getSourceText = useCallback(() => {
    if (source && source === 'sao-paulo') {
      return 'São Paulo';
    }
    return source;
  }, [ source ]);

  const getFinalityText = useCallback(() => {
    switch (finality) {
      case 'venda':
        return 'comprar';
      case 'aluguel':
        return 'alugar';
      default:
        return finality;
    }
  }, [ finality ]);

  const toggleSearch = useCallback(() => {
    dispatch(setMain({ searchFormActive: !searchFormActive }));
  }, [ searchFormActive ]);

  const handleOrderBy = useCallback(
    (newOrder) => {
      const params = getParamsFromObject({
        ...query,
        order: newOrder,
      });

      if (query.order !== newOrder) {
        setOrderBy(newOrder);
        Router.push(`/busca${params}`);
      }
    },
    [ query ]
  );

  const setNewData = useCallback(
    (newData, first) => {
      const newBuildings =
        buildings && buildings.length && !first
          ? [ ...buildings, ...newData ]
          : [ ...newData ];

      setBuildings(newBuildings);
      setIsLoading(false);
    },
    [ buildings ]
  );

  const loadMore = useCallback(() => {
    setIsLoading(true)
    const newPage = page + 1;
    const params = getParamsFromObject({ ...query, page: newPage });

    router.push(`/busca${params}`, undefined, { shallow: true });
    setPage(newPage);
    setLoadNewPage(true);
  }, [ page, router ]);

  const getBuildingsSuggestions = useCallback(async () => {
    const results = [];

    const getBuildingsSuggestion = async (title, newQuery) => {
      const params = getParamsFromObject({
        ...newQuery,
        page: 1,
      });
      const response = await Api.Search.getBuildings(params);

      if (response.data && response.data.length) {
        results.push({
          title: title.replace(
            '{{showTotal}}',
            getTotalFormated(response.total)
          ),
          items: response.data,
        });
      }
    };

    const getTotalFormated = (total) => {
      total = total > 10 ? 10 : total;

      const text = total > 1 ? `opções` : `opção`;
      let result = `${total} ${text}`;

      if (total < 10) {
        result = `0${total} ${text}`;
      }

      return result;
    };

    if (query.price_start && query.price_end && !reference) {
      const priceEnd = +query.price_end;
      const percent = (priceEnd * 20) / 100;
      const newPriceStart = priceEnd + 1;
      const newPriceEnd = priceEnd + percent;

      await getBuildingsSuggestion(
        `Encontramos mais <strong>{{showTotal}}</strong>, mas o valor passou um pouco. Pode ser?`,
        {
          ...query,
          price_start: newPriceStart,
          price_end: newPriceEnd,
        }
      );
    }

    if (query.source && query.local && locals && !reference) {
      const localsArr = query.local.split(',');

      let localsSelected = [];

      Object.keys(locals).forEach((local) => {
        locals[local].forEach((item) => {
          if (
            localsArr.indexOf(item.local) >= 0 &&
            item.related &&
            item.related.length
          ) {
            localsSelected = [ ...localsSelected, ...item.related ];
          }
        });
      });

      // Avoids duplicating the main query
      localsSelected.forEach((local, idx) => {
        if (localsArr.includes(local)) {
          delete localsSelected[idx];
        }
      });

      if (localsSelected.length) {
        const query2 = {
          ...query,
          local: localsSelected.join(','),
        };
        await getBuildingsSuggestion(
          `Encontramos mais <strong>{{showTotal}}</strong> do jeito que você quer, mas em localizações próximas, tudo bem?`,
          query2
        );
      }
    }

    if (
      query.source &&
      query.finality &&
      query.use &&
      query.ready_release &&
      query.source === 'sao-paulo' &&
      query.finality === 'venda' &&
      query.use === 'RESIDENCIAL' &&
      !reference
    ) {
      const finalText =
        query.ready_release === 'pronto'
          ? 'mas não estão prontos. Pode esperar?'
          : 'mas pronto para morar';
      const query2 =
        query.ready_release === 'pronto'
          ? {
              ...query,
              ready_release: 'lancamento',
            }
          : {
              ...query,
              ready_release: 'pronto',
            };
      await getBuildingsSuggestion(
        `Encontramos mais <strong>{{showTotal}}</strong> do jeito que você quer, ${finalText}`,
        query2
      );
    }

    setSuggestions(results);
  }, [ total, reference ]);

  const handleFinalityChange = (newFinality) => {
    const newQuery = { ...router.query, finality: newFinality };
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  useEffect(() => {
    setDataInitialGTM();
  }, [ query ]);

  useEffect(() => {
    if (query.finality) {
      sessionStorage.setItem('search_finality', query.finality);
    }

    dispatch(
      setMain({
        searchFunnel: {
          finality: query.finality,
        },
      })
    );
  }, [ query.finality ]);

  useEffect(() => {
    setNewData(data, true);
    setPage(+query.page || 1);
    getBuildingsSuggestions();

    if (!dataLoaded) {
      setDataLoaded(true);
    }
  }, [ total, order, reference ]);

  useEffect(() => {
    const getDataByPage = async () => {
      const params = getParamsFromObject({
        ...query,
        page,
      });
      const response = await Api.Search.getBuildings(params);

      setNewData(response.data);
      setLoadNewPage(false);
    };

    if (loadNewPage) {
      getDataByPage();
    }
  }, [ loadNewPage ]);

  // Load more on scroll disabled
  // useEffect(() => {
  //   if (total && page < totalPages && checkLoadMoreOnScroll && !isLoading) {
  //     setIsLoading(true);
  //     loadMore();
  //   }
  // }, [ checkLoadMoreOnScroll ]);

  return (
    <>
      <Head>
        <title>{`Busca ${source ? source : reference} - Os Melhores imoveis para você!`}</title>
        <meta name="description" content={`Confira os melhores imoveis ${source ? 'em' + source :''} e encontre o apartamento ideal!`}/>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={canonicalPath} />
      </Head>
      <Container id="filtro-container-busca">
        {dataLoaded ? (
          <>
            {total ? (
              <Headerbar
                type="search"
                title={source && !reference && getSourceText()}
                subtitle={
                  finality && !reference && `Imóveis para ${getFinalityText()}`
                }
              />
            ) : null}

            <Wrapper id="filtro-wrapper-busca">
              {total ? (
                <Header>
                  <h3>
                    Encontramos <strong>{total} imóveis</strong> para sua busca
                  </h3>
                  <p>Mostrando 1-{buildings.length} de {total}</p>
                  <HeaderOrder
                    onMouseEnter={() => clearTimeout(orderTiming.current)}
                    onMouseLeave={() => {
                      orderTiming.current = setTimeout(() => {
                        setOrderByComboActive(false);
                      }, 300);
                    }}
                  >
                    <DisplayOrder>
                      <button onClick={() => setIsOrderListActive(!isOrderListActive)}>
                        <img src={isOrderListActive ? IOrderBlockOff : IOrderBlockOn} alt="Botão de ordenar bloco" loading='lazy'/>
                      </button>
                      <button onClick={() => setIsOrderListActive(!isOrderListActive)}>
                        <img src={isOrderListActive ? IOrderRowOn : IOrderRowOff} alt="Botão de ordenar lista" loading='lazy'/>
                      </button>
                    </DisplayOrder>

                    <CustomSelect
                      id="finalitySelect"
                      options={finalityOptions}
                      value={finality}
                      onChange={(newValue) => {
                        handleFinalityChange(newValue);
                      }}
                    />

                    <CustomSelect
                      id="orderByMobile"
                      options={orderOptions}
                      value={orderBy}
                      searchFilter
                      onChange={(value) => {
                        handleOrderBy(value);

                        const results = orderOptions.filter((item) => item.value === value);

                        if (results.length) {
                          GTM.dataLayerPush({
                            event: 'Custom Field Change',
                            fieldLabel: 'Ordernar Por',
                            fieldForm: 'Busca',
                            fieldValMin: '',
                            fieldValMax: results[0].label,
                          });
                        }
                      }}
                    />

                    <HeaderOrderButton
                      type="button"
                      active={orderByComboActive}
                      onClick={() => setOrderByComboActive(!orderByComboActive)}
                    >
                      <strong>Ordenar por:</strong>
                      {getOrderBySelected().length ? (
                        <span>{getOrderBySelected()[0].label}</span>
                      ) : null}
                    </HeaderOrderButton>
                    <HeaderOrderList active={orderByComboActive}>
                      {orderOptions.map((orderItem, orderItemIndex) => (
                        <HeaderOrderListButton
                          type="button"
                          key={`orderby-listitem-${orderItemIndex}`}
                          onClick={() => {
                            setOrderBy(orderItem.value);
                            handleOrderBy(orderItem.value);

                            GTM.dataLayerPush({
                              event: 'Custom Field Change',
                              fieldLabel: 'Ordernar Por',
                              fieldForm: 'Busca',
                              fieldValMin: '',
                              fieldValMax: orderItem.label,
                            });
                          }}
                        >
                          {orderItem.label}
                        </HeaderOrderListButton>
                      ))}
                    </HeaderOrderList>
                  </HeaderOrder>
                </Header>
              ) : null}

              {total ? (
                <ButtonBack type="button" onClick={toggleSearch}>
                  <SVG src={ArrowIconSVG} uniquifyIDs={true} />
                </ButtonBack>
              ) : null}

              <Buildings>
                {total ? (
                  buildings.map((building, buildingIndex) => (
                    <React.Fragment key={`building-searchitem-${building.reference}-${buildingIndex}`}>
                      {isOrderListActive ? (
                        <BuildingList
                          item={building}
                          page="search"
                          positionIndex={buildingIndex + 1}
                          key={`building-searchitem-${building.reference}-${buildingIndex}`}
                        />
                      ) : (
                        <BuildingList
                          layout="horizontal"
                          item={building}
                          positionIndex={buildingIndex + 1}
                          key={`building-searchitem-${building.reference}-${buildingIndex}`}
                        />
                      )}
                      {banner && buildingIndex == 2 && total >= 5 && (
                        <SearchBanner key={`building-searchbanner-${building.reference}-${buildingIndex}`}>
                          {banner.title && (
                            <Infos>
                              <h4>{banner.title}</h4>
                              {banner.button_link && banner.button_label && (
                                <div>
                                  <a
                                    href={banner.button_link}
                                    target={banner.button_target}
                                  >
                                    {banner.button_label}
                                  </a>
                                </div>
                              )}
                            </Infos>
                          )}
                          {!banner.title && banner.button_link ? (
                            <a
                              href={banner.button_link}
                              target={banner.button_target}
                            >
                                                          <ImageContainer hideOverlay={true}>
                              {banner.imageDesktop && (
                                <OptimizedBuildingImage
                                  src={banner.imageDesktop}
                                  alt="Banner desktop"
                                  layout="fill"
                                  sizes="(max-width: 768px) 100vw, 100vw"
                                  className="banner-image desktop"
                                />
                              )}
                              {banner.imageMobile && (
                                <OptimizedBuildingImage
                                  src={banner.imageMobile}
                                  alt="Banner mobile"
                                  layout="fill"
                                  sizes="(max-width: 768px) 100vw, 100vw"
                                  className="banner-image mobile"
                                />
                              )}
                            </ImageContainer>
                            </a>
                          ) : (
                            <ImageContainer hideOverlay={!banner.title}>
                              {banner.imageDesktop && (
                                <OptimizedBuildingImage
                                  src={banner.imageDesktop}
                                  alt="Banner desktop"
                                  layout="fill"
                                  sizes="(max-width: 768px) 100vw, 100vw"
                                  className="banner-image desktop"
                                />
                              )}
                              {banner.imageMobile && (
                                <OptimizedBuildingImage
                                  src={banner.imageMobile}
                                  alt="Banner mobile"
                                  layout="fill"
                                  sizes="(max-width: 768px) 100vw, 100vw"
                                  className="banner-image mobile"
                                />
                              )}
                            </ImageContainer>
                          )}
                        </SearchBanner>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <BuildingsNotFound key="building-searchnotfound">
                    <h6>
                      Não encontramos o imóvel que você procura <span>:(</span>
                    </h6>
                    <p>
                      Tente fazer uma{' '}
                      <button type="button" onClick={toggleSearch}>
                        nova busca!
                      </button>
                    </p>
                  </BuildingsNotFound>
                )}

                {banner && total < 5 && (
                  <SearchBanner>
                    {banner.title && (
                      <Infos>
                        <h4>{banner.title}</h4>
                        {banner.button_link && banner.button_label && (
                          <div>
                            <a
                              href={banner.button_link}
                              target={banner.button_target}
                            >
                              {banner.button_label}
                            </a>
                          </div>
                        )}
                      </Infos>
                    )}
                    {!banner.title && banner.button_link ? (
                      <a
                        href={banner.button_link}
                        target={banner.button_target}
                      >
                        <ImageContainer hideOverlay={true}>
                          {banner.imageDesktop && (
                            <OptimizedBuildingImage
                              src={banner.imageDesktop}
                              alt="Banner desktop"
                              layout="fill"
                              sizes="(max-width: 768px) 100vw, 100vw"
                              className="banner-image desktop"
                            />
                          )}
                          {banner.imageMobile && (
                            <OptimizedBuildingImage
                              src={banner.imageMobile}
                              alt="Banner mobile"
                              layout="fill"
                              sizes="(max-width: 768px) 100vw, 100vw"
                              className="banner-image mobile"
                            />
                          )}
                        </ImageContainer>
                      </a>
                    ) : (
                      <ImageContainer hideOverlay={!banner.title}>
                        {banner.imageDesktop && (
                          <OptimizedBuildingImage
                            src={banner.imageDesktop}
                            alt="Banner desktop"
                            layout="fill"
                            sizes="(max-width: 768px) 100vw, 100vw"
                            className="banner-image desktop"
                          />
                        )}
                        {banner.imageMobile && (
                          <OptimizedBuildingImage
                            src={banner.imageMobile}
                            alt="Banner mobile"
                            layout="fill"
                            sizes="(max-width: 768px) 100vw, 100vw"
                            className="banner-image mobile"
                          />
                        )}
                      </ImageContainer>
                    )}
                  </SearchBanner>
                )}

                {total && page < totalPages ? (
                  <BuildingsLoadMore>
                    <Button
                      type="button"
                      disabled={isLoading}
                      className="holos-search-load-more load-more-button"
                      data-showcase="Busca"
                      onClick={loadMore}
                    >
                      {isLoading ? 'Carregando...' : 'Ver mais'}
                    </Button>
                  </BuildingsLoadMore>
                ) : null}
              </Buildings>
            </Wrapper>

            {suggestions &&
              suggestions.length > 0 &&
              suggestions.map((suggestion, index) => (
                <BuildingsPanel
                  key={`suggestion-${index}`}
                  page="search"
                  headerBig={true}
                  title={suggestion.title}
                  buildingLayout="vertical"
                  data={suggestion.items}
                />
              ))}

            <NewsletterFooter/>
            <BlockHighlighted type="contactHome" query={query} />
          </>
        ) : null}
      </Container>
    </>
  );
}

Search.getInitialProps = async ({ query }) => {
  const params = getParamsFromObject(
    {
      ...query,
      page: 1,
      limit: query.page ? +query.page * 10 : 10,
    },
    true
  );

  const locals = await Api.Search.getLocals();
  const response = await Api.Search.getBuildings(params);

  return {
    ...response,
    locals,
  };
};

export default Search;
