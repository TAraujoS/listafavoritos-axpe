import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import SVG from 'react-inlinesvg';
import SimpleBar from 'simplebar-react';
import Api from 'services';
import { formatCurrency, getParamsFromObject } from 'helpers/utils';
import GTM from 'helpers/gtm';

// actions
import { setMain } from 'store/modules/main/actions';

// components
import Button from 'components/Button';
import Input from 'components/Search/FormElements/Input';
import RangeSlider from 'components/Search/FormElements/RangeSlider';

// assets
import ArrowIconSVG from 'assets/icons/arrow.svg';
import SearchIconSVG from 'assets/icons/search.svg';

// styles
import {
  Container,
  Form,
  FormWrapper,
  FormWrapperBox,
  FormGroup,
  FormClose,
  FormHeader,
  FormHeaderTitle,
  FormButtonsFilter,
  FormButtonsFilterTitle,
  FormButtonsFilterRow,
  FormButtonsFilterItemRadio,
  FormButtonFilter,
  FormFooter,
  FormButtonSubmit,
  FormButtonClear,
  FormTab,
  FormTabWrapper,
  FormTabButtonBack,
  FormTabClose,
  FormTabTitle,
  FormTabContent,
  FormTabFooter,
  FormTabListItemButton,
  FormTabSlider,
  FormTabSliderTitle,
  FormTabListContainer,
  FormTabListItemContainer,
  FormTabListItemTitle,
} from './styles';

function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchFormActive } = useSelector((state) => state.main);
  const [ categoriesData, setCategoriesData ] = useState(null);
  const [ filtersData, setFiltersData ] = useState(null);
  const [ filtersListToggle, setFiltersListToggle ] = useState(null);
  const [ tabActive, setTabActive ] = useState(null);
  const [ seasons, setSeasons ] = useState([]);

  const readyReleases = [
    { label: 'Prontos', value: 'pronto' },
    { label: 'Lançamentos', value: 'lancamento' },
  ];

  const sources = [
    { label: 'São Paulo', value: 'sao-paulo' },
    { label: 'Praia', value: 'praia' },
    { label: 'Campo', value: 'campo' },
    { label: 'Exterior', value: 'internacional' },
    { label: 'Montanha', value: 'montanha' },
  ];

  const getFinalities = useCallback(
    () => [
      {
        label: 'Comprar',
        value: 'venda',
        sources: [ 'sao-paulo', 'praia', 'campo', 'internacional', 'montanha' ],
      },
      {
        label: 'Alugar',
        value: 'aluguel',
        sources: [ 'sao-paulo', 'praia', 'campo', 'montanha' ],
      },
      // {
        // label: 'Temporada',
        // value: 'temporada',
        // sources: [ 'praia', 'campo', 'internacional' ]
        // sources: seasons,
      // },
    ],
    [ seasons ]
  );

  const formik = useFormik({
    initialValues: {
      source: sources[0],
      finality: '',
      use: '',
      ready_release: '',
      furnished: '',
      types: [],
      local: [],
      price_start: '',
      price_end: '',
      area_start: '',
      area_end: '',
      bedroom_start: '',
      bedroom_end: '',
      suites_start: '',
      suites_end: '',
      parking_start: '',
      parking_end: '',
      reference: '',
    },

    onSubmit: (values, { setSubmitting }) => {
      const data = {};

      if (
        typeof values.reference !== 'undefined' &&
        values.reference &&
        values.reference.length > 0
      ) {
        data['reference'] = `AX${values.reference.replace(/^AX/i, '')}`;
      } else {
        Object.keys(values).forEach((key) => {
            if (key == 'source' && values[key].value) {
                data[key] = values[key].value;
            } else if (key === 'furnished' && values[key]) {
                data[key] = values[key] === 'Mobiliado' ? 'true' : 'false';
            } else if (
                (key === 'parking_start' || key === 'parking_end') &&
                typeof values[key] !== 'undefined'
            ) {
                data[key] = values[key].toString();
            } else if (Array.isArray(values[key]) && values[key].length) {
                data[key] = values[key].join(',');
            } else if (!Array.isArray(values[key]) && values[key]) {
                data[key] = values[key];
            }
        });
    }

      const params = getParamsFromObject(data);

      formik.setFieldValue('reference', '');
     
      (window).dataLayer = (window).dataLayer || [];
      (window).dataLayer.push({
        'event':'search-button-click',
        'search-params': params,
      });

      setTabActive(null);
      setSubmitting(false);

      window.scrollTo(0, 0);

      router.push(`/busca${params}`);
    },
  });

  function closeSearch() {
    dispatch(setMain({ searchFormActive: false }));
  }

  function handleFiltersListToggle(local) {
    setFiltersListToggle({
      ...filtersListToggle,
      [local]: !filtersListToggle[local],
    });
  }

  function resetForm() {
    setFiltersData(null);
    setFiltersListToggle(null);
    formik.resetForm();
  }

  function setArrayValue(name, value) {
    const arr = formik.values[name];
    const index = arr.indexOf(value);

    if (index < 0) {
      arr.push(value);
    } else {
      arr.splice(index, 1);
    }

    formik.setFieldValue(name, arr);
  }

  function getFiltersParams() {
    const params = [
      `source=${formik.values.source.value}`,
      `finality=${formik.values.finality}`,
    ];

    if (formik.values.use) {
      params.push(`use=${formik.values.use}`);
    }

    if (formik.values.ready_release) {
      params.push(`ready_release=${formik.values.ready_release}`);
    }

    if (formik.values.furnished) {
      params.push(
        `furnished=${
          formik.values.furnished.search('Com') >= 0 ? 'true' : 'false'
        }`
      );
    }

    if (formik.values.types.length) {
      params.push(`types=${formik.values.types.join(',')}`);
    }

    return `?${params.join('&')}`;
  }

  function resetValuesOnChange(avoidFields = []) {
    const fields = [
      { name: 'use', value: '' },
      { name: 'finality', value: '' },
      { name: 'ready_release', value: '' },
      { name: 'furnished', value: '' },
      { name: 'types', value: [] },
      { name: 'local', value: [] },
      { name: 'price_start', value: '' },
      { name: 'price_end', value: '' },
      { name: 'area_start', value: '' },
      { name: 'area_end', value: '' },
      { name: 'bedroom_start', value: '' },
      { name: 'bedroom_end', value: '' },
      { name: 'suites_start', value: '' },
      { name: 'suites_end', value: '' },
      { name: 'parking_start', value: '' },
      { name: 'parking_end', value: '' },
    ];

    fields.forEach((field) => {
      const results = avoidFields.filter((item) => item == field.name);
      if (!results.length) {
        formik.setFieldValue(field.name, field.value);
      }
    });
  }

  function setSource(source) {
    formik.setFieldValue('source', source);
    setFiltersData(null);
    setFiltersListToggle(null);
    resetValuesOnChange();
  }

  const formatLocals = useCallback(
    (locals) => {
      // remove locais do filtro de sao paulo
      if (Object.keys(locals).includes('São Paulo') && formik.values.source.value === 'sao-paulo') {
        const bairrosRaw = locals['São Paulo'];
        const bairros = Array.from(bairrosRaw);
        
        const locaisParaRemover = [
          'Baleia',
          'Camburi',
          'Riviera São Lourenço',
          'Praia São Pedro',
          'Terras São José',
        ];
      
        const bairrosFiltrados = bairros.filter((bairro) => !locaisParaRemover.includes(bairro));
      
        locals['São Paulo'] = bairrosFiltrados;
      }

      if (Object.keys(locals).includes('Bahia') && formik.values.source.value === 'sao-paulo') {
        const bairrosRaw = locals['Bahia'];
        const bairros = Array.from(bairrosRaw);
        
        const index = bairros.indexOf('Corumbau');
        if (index !== -1) {
          bairros.splice(index, 1);
        }
        
        locals['Bahia'] = bairros;
      }

      if (formik.values.source.value !== 'internacional') {
        return locals;
      }

      // order locals following this task
      // https://app.clickup.com/t/864dy4q4z
      // Portugal: Alentejo
      // Portugal: Reg. Lisboa
      // EUA: Miami
      // EUA Orlando

      // order alphabetically locals keys and show Portugal first
      const orderedPTLocals = [];
      const orderedLocals = Object.keys(locals)
        .sort()
        .map((key) => {
          if (key.toLowerCase().includes('portugal')) {
            orderedPTLocals.push(key);
          }

          return key;
        })
        .filter((key) => !key.toLowerCase().includes('portugal'))
        .reverse();

      return [ ...orderedPTLocals, ...orderedLocals ].reduce((acc, key) => {
        acc[key] = locals[key];
        return acc;
      }, {});
    },
    [ formik.values.source ]
  );

  useEffect(() => {
    if (!formik.values.finality && filtersData) {
      setFiltersData(null);
    }
  }, [ filtersData, formik.values.finality ]);

  useEffect(() => {
    setTabActive(null);
    setFiltersData(null);
    resetValuesOnChange([ 'use' ]);
  }, [ formik.values.use ]);

  useEffect(() => {
    resetValuesOnChange([ 'use', 'finality' ]);
    setTabActive(null);
  }, [ formik.values.finality ]);

  useEffect(() => {
    resetValuesOnChange([ 'use', 'finality', 'ready_release' ]);
    setTabActive(null);
  }, [ formik.values.ready_release ]);

  useEffect(() => {
    resetValuesOnChange([ 'use', 'finality', 'furnished' ]);
    setTabActive(null);
  }, [ formik.values.furnished ]);

  useEffect(() => {
    const getFilters = async () => {
      const params = getFiltersParams();
      const response = await Api.Search.getFilters(params);
      const filtersListToggle = {};
      const valuesStringToNumber = [ 'prices', 'area', 'bedrooms', 'parking' ];

      // make sure that all data are Number
      valuesStringToNumber.forEach((key) => {
        const obj = response[key];
        if (obj && obj.length) {
          response[key] = response[key].map((value) => parseInt(value));
        }
      });

      Object.keys(response.locals).forEach((local) => {
        filtersListToggle[local] = false;
      });

      // Avoids type list being shrunk when locations are updated
      if (filtersData && filtersData.types) {
        response.types = filtersData.types;
      }

      // set price start minimum to 10k
      // if (
      //   formik.values.finality === 'aluguel' &&
      //   response.prices &&
      //   response.prices.length
      // ) {
      //   response.prices[0] = 10000;
      // }

      // if (
      //   formik.values.finality === 'venda' &&
      //   response.prices &&
      //   response.prices.length
      // ) {
      //   response.prices[0] = 200000;
      // }

      // set area end maximum to 2k
      if (response.area && response.area.length) {
        response.area[1] = 2000;
      }

      setFiltersListToggle(filtersListToggle);
      setFiltersData({
        ...response,
        locals: formatLocals(response.locals),
      });
    };

    if (formik.values.finality) {
      if (
        formik.values.finality == 'venda' &&
        formik.values.source.value == 'sao-paulo'
      ) {
        if (formik.values.ready_release || formik.values.use == 'COMERCIAL') {
          getFilters();
        } else {
          setFiltersData(null);
        }
      } else {
        getFilters();
      }
    }
  }, [
    formik.values.source.value,
    formik.values.use,
    formik.values.finality,
    JSON.stringify(formik.values.types),
    formik.values.ready_release,
    formik.values.furnished,
  ]);

  // Reset locations on building type definition
  useEffect(() => {
    if (formik.values.types) {
      formik.values.local = [];
    }
  }, [ JSON.stringify(formik.values.types) ]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await Api.Search.getCategories();
      setCategoriesData(response);
      dispatch(setMain({ categories: response }));
    };

    const getLocals = async () => {
      const locals = await Api.Search.getLocals(true);
      const newSeasons = Object.keys(locals.hasSeason).filter(
        (season) => locals.hasSeason[season]
      );
      setSeasons(newSeasons);
    };

    getCategories();
    getLocals();
  }, []);

  return (
    <Container active={searchFormActive} id='search-container'>
      <Form onSubmit={formik.handleSubmit} onClick={closeSearch}>
        <FormWrapper
          active={searchFormActive}
          onClick={(event) => event.stopPropagation()}
        >
          <SimpleBar style={{ maxHeight: '100%' }}>
            <FormWrapperBox>
              <FormHeader>
                <FormHeaderTitle>Onde você procura um imóvel?</FormHeaderTitle>
                <FormClose type="button" onClick={closeSearch}>
                  Fechar
                </FormClose>
              </FormHeader>

              <FormGroup id='search-source-filter-container'>
                {/* <CustomSelect
                  options={sources}
                  value={formik.values.source?.value || ''}
                  onChange={(newValue) => {
                    const selectedSource = sources.find((s) => s.value === newValue);
                    setSource(selectedSource);
                  }}
                  ariaLabel="Selecione a fonte"
                  searchTab={true}
                  onClick={(event) => event.stopPropagation()}
                /> */}
                <FormTabListContainer isEmpty={formik.values.source}>
                  {sources.map((source, sourceIndex) => (
                    <FormTabListItemContainer
                      key={`local-${sourceIndex}`}
                      active={
                        formik.values.source &&
                        formik.values.source.value === source.value
                      }
                    >
                      <FormTabListItemButton
                        type="button"
                        format="icon"
                        active={
                          formik.values.source &&
                          formik.values.source.value === source.value
                        }
                        onClick={() => {
                          setSource(source);
                        }}
                        className="holos-search-menu-item location-button"
                        data-label={source.label}
                        data-type={'Alterar localização'}
                      >
                        <span className="icon">
                          <SVG
                            src={require(`assets/icons/sources-${source.value}.svg`)}
                            uniquifyIDs={true}
                          />
                        </span>
                        <span className="label">{source.label}</span>
                      </FormTabListItemButton>
                    </FormTabListItemContainer>
                  ))}
                </FormTabListContainer>
              </FormGroup>

              {formik.values.source.value ? (
                <FormButtonsFilter id='search-others-filters-container'>
                  <FormButtonsFilterTitle>Para:</FormButtonsFilterTitle>

                  {/* Residencial, Comercial */}
                  {formik.values.source.value == 'sao-paulo' && categoriesData && (
                    <FormButtonsFilterRow>
                      {Object.keys(categoriesData).map((use, useIndex) => (
                        <FormButtonsFilterItemRadio
                          twoColumns={true}
                          key={`radio-use-${useIndex}`}
                        >
                          <input
                            type="radio"
                            name="use"
                            value={use}
                            onChange={formik.handleChange}
                            checked={formik.values.use === use}
                            className="holos-search-menu-item"
                            data-label={use}
                          />
                          <span>
                            {use.toLowerCase() == 'residencial'
                              ? 'Morar'
                              : 'Trabalhar'}
                          </span>
                        </FormButtonsFilterItemRadio>
                      ))}
                    </FormButtonsFilterRow>
                  )}

                  {/* Comprar, Alugar */}
                  {(formik.values.source.value == 'sao-paulo' &&
                    formik.values.use) ||
                  formik.values.source.value != 'sao-paulo' ? (
                    <FormButtonsFilterRow>
                      {getFinalities().map((finality, finalityIndex) =>
                        finality.sources.includes(
                          formik.values.source.value
                        ) ? (
                          <FormButtonsFilterItemRadio
                            twoColumns={
                              formik.values.source.value == 'sao-paulo'
                                ? true
                                : false
                            }
                            key={`radio-finality-${finalityIndex}`}
                          >
                            <input
                              type="radio"
                              name="finality"
                              value={finality.value}
                              onChange={formik.handleChange}
                              checked={
                                formik.values.finality === finality.value
                              }
                              className="holos-search-menu-item"
                              data-label={finality.label}
                            />
                            <span>{finality.label}</span>
                          </FormButtonsFilterItemRadio>
                        ) : null
                      )}
                    </FormButtonsFilterRow>
                  ) : null}

                  {/* Prontos, Lançamentos */}
                  {formik.values.source.value == 'sao-paulo' &&
                    formik.values.use !== 'COMERCIAL' &&
                    formik.values.finality === 'venda' && (
                      <FormButtonsFilterRow>
                        {readyReleases.map((item, itemIndex) => (
                          <FormButtonsFilterItemRadio
                            twoColumns={true}
                            key={`radio-item-${itemIndex}`}
                          >
                            <input
                              type="radio"
                              name="ready_release"
                              value={item.value}
                              onChange={formik.handleChange}
                              checked={
                                formik.values.ready_release === item.value
                              }
                              className="holos-search-menu-item"
                              data-label={item.label}
                            />
                            <span>{item.label}</span>
                          </FormButtonsFilterItemRadio>
                        ))}
                      </FormButtonsFilterRow>
                    )}

                  {/* Sem mobilia, com mobilia */}
                  {formik.values.source.value == 'sao-paulo' &&
                    formik.values.use !== 'COMERCIAL' &&
                    formik.values.finality === 'aluguel' && (
                      <FormButtonsFilterRow>
                        <FormButtonsFilterItemRadio twoColumns={true}>
                          <input
                            type="radio"
                            name="furnished"
                            value="Sem mobília"
                            onChange={formik.handleChange}
                            checked={formik.values.furnished === 'Sem mobília'}
                            className="holos-search-menu-item"
                            data-label="Sem mobília"
                          />
                          <span>Sem mobília</span>
                        </FormButtonsFilterItemRadio>
                        <FormButtonsFilterItemRadio twoColumns={true}>
                          <input
                            type="radio"
                            name="furnished"
                            value="Mobiliado"
                            onChange={formik.handleChange}
                            checked={formik.values.furnished === 'Mobiliado'}
                            className="holos-search-menu-item"
                            data-label="Mobiliado"
                          />
                          <span>Mobiliado</span>
                        </FormButtonsFilterItemRadio>
                      </FormButtonsFilterRow>
                    )}
                </FormButtonsFilter>
              ) : null}

              {formik.values.source.value &&
              formik.values.finality &&
              filtersData &&
              ((formik.values.source.value == 'sao-paulo' &&
                formik.values.finality === 'venda' &&
                formik.values.ready_release) ||
                (formik.values.source.value == 'sao-paulo' &&
                  formik.values.finality === 'aluguel') ||
                (formik.values.source.value == 'sao-paulo' &&
                  formik.values.use === 'COMERCIAL' &&
                  formik.values.finality) ||
                formik.values.source.value != 'sao-paulo') ? (
                <>
                  {filtersData.types && filtersData.types.length ? (
                    <FormButtonFilter
                      type="button"
                      active={tabActive === 'types'}
                      filled={!!formik.values.types.length}
                      onClick={() => setTabActive('types')}
                      className="holos-search-menu-filter"
                      data-label="Tipo de imóvel"
                    >
                      <strong>Tipo de imóvel</strong>
                      {formik.values.types.length ? (
                        <span>{formik.values.types.join(', ')}</span>
                      ) : null}
                      <SVG src={ArrowIconSVG} uniquifyIDs={true} />
                    </FormButtonFilter>
                  ) : null}

                  {filtersData.locals &&
                  Object.keys(filtersData.locals).length ? (
                    <FormButtonFilter
                      type="button"
                      active={tabActive === 'locals'}
                      filled={!!formik.values.local.length}
                      onClick={() => setTabActive('locals')}
                      className="holos-search-menu-filter"
                      data-label="Selecione a localização"
                    >
                      <strong>Selecione a localização</strong>
                      {formik.values.local.length ? (
                        <span>{formik.values.local.join(', ')}</span>
                      ) : null}
                      <SVG src={ArrowIconSVG} uniquifyIDs={true} />
                    </FormButtonFilter>
                  ) : null}

                  {(filtersData.prices &&
                    filtersData.prices.length &&
                    filtersData.prices[0] != filtersData.prices[1]) ||
                  (filtersData.area &&
                    filtersData.area.length &&
                    filtersData.area[0] != filtersData.area[1]) ||
                  (filtersData.bedrooms &&
                    filtersData.bedrooms.length &&
                    filtersData.bedrooms[0] != filtersData.bedrooms[1]) ||
                  (filtersData.parking &&
                    filtersData.parking.length &&
                    filtersData.parking[0] != filtersData.parking[1]) ? (
                    <FormButtonFilter
                      type="button"
                      active={tabActive === 'filters'}
                      filled={
                        (formik.values.price_start &&
                          formik.values.price_end) ||
                        (formik.values.area_start && formik.values.area_end) ||
                        (formik.values.bedroom_start &&
                          formik.values.bedroom_end) ||
                        (typeof formik.values.parking_start !== 'undefined' &&
                          formik.values.parking_end)
                      }
                      onClick={() => setTabActive('filters')}
                      className="holos-search-menu-filter"
                      data-label="Mais filtros"
                    >
                      <strong>Mais filtros</strong>
                      {(formik.values.price_start && formik.values.price_end) ||
                      (formik.values.area_start && formik.values.area_end) ||
                      (formik.values.bedroom_start &&
                        formik.values.bedroom_end) ||
                      (typeof formik.values.parking_start !== 'undefined' &&
                        formik.values.parking_end) ? (
                        <span>
                          {formik.values.price_start && formik.values.price_end
                            ? `Valor ${formatCurrency.format(
                                formik.values.price_start
                              )} a ${formatCurrency.format(
                                formik.values.price_end
                              )}, `
                            : null}

                          {formik.values.area_start && formik.values.area_end
                            ? `Area de ${formik.values.area_start}m a ${formik.values.area_end}m, `
                            : null}

                          {formik.values.bedroom_start &&
                          formik.values.bedroom_end
                            ? `Quartos de ${formik.values.bedroom_start} a ${formik.values.bedroom_end}, `
                            : null}

                          {formik.values.suites_start &&
                          formik.values.suites_end
                            ? `Suítes de ${formik.values.suites_start} a ${formik.values.suites_end}, `
                            : null}

                          {typeof formik.values.parking_start !== 'undefined' &&
                          formik.values.parking_end
                            ? `Vagas de estacionamento de ${formik.values.parking_start} a ${formik.values.parking_end}`
                            : null}
                        </span>
                      ) : null}
                      <SVG src={ArrowIconSVG} uniquifyIDs={true} />
                    </FormButtonFilter>
                  ) : null}
                </>
              ) : null}

              <FormFooter>
                <FormGroup type="reference" id='search-input'>
                  <Input
                    type="text"
                    name="reference"
                    placeholder="Buscar por referência"
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleChange(e);
                      // handleInputReferenceFocusOut();
                    }}
                    // onFocus={handleInputReferenceFocusIn}
                    value={formik.values.reference}
                    className="holos-search-field"
                    data-label="Buscar por referência"
                  />
                  <SVG src={SearchIconSVG} uniquifyIDs={true} />
                </FormGroup>
                <FormButtonSubmit
                  type="submit"
                  disabled={
                    !formik.isSubmitting &&
                    !filtersData &&
                    (!formik.values.reference ||
                      formik.values.reference === 'AX')
                  }
                  className="holos-search-submit"
                  data-label={formik.values.reference}
                  id='search-button'
                >
                  Buscar
                </FormButtonSubmit>
                <FormButtonClear
                  type="button"
                  disabled={
                    !formik.isSubmitting &&
                    !filtersData &&
                    (!formik.values.reference ||
                      formik.values.reference === 'AX')
                  }
                  onClick={resetForm}
                  className="holos-clear-filter"
                >
                  Limpar filtros
                </FormButtonClear>
              </FormFooter>
            </FormWrapperBox>
          </SimpleBar>
        </FormWrapper>

        {filtersData && filtersData.types && filtersData.types.length ? (
          <FormTab
            active={tabActive === 'types'}
            onClick={(event) => event.stopPropagation()}
          >
            <FormTabButtonBack type="button" onClick={() => setTabActive(null)}>
              <SVG src={ArrowIconSVG} uniquifyIDs={true} />
            </FormTabButtonBack>
            <SimpleBar style={{ maxHeight: '100%' }}>
              <FormTabWrapper>
                <FormTabClose type="button" onClick={() => setTabActive(null)}>
                  Fechar
                </FormTabClose>
                <FormTabTitle>Tipo de imóvel</FormTabTitle>
                <FormTabContent>
                  <ul>
                    {filtersData.types.map((type, typeIndex) => (
                      <li key={`type-${type}-${typeIndex}`}>
                        <FormTabListItemButton
                          type="button"
                          active={formik.values.types.includes(type)}
                          onClick={() => setArrayValue('types', type)}
                          className="holos-search-menu-item"
                          data-label={type}
                          data-type={'Tipo de imóvel'}
                        >
                          {type}
                        </FormTabListItemButton>
                      </li>
                    ))}
                  </ul>
                </FormTabContent>
                {formik.values.types.length > 0 ? (
                  <FormTabFooter>
                    <Button
                      type="button"
                      fullWidth={true}
                      onClick={() => setTabActive(null)}
                    >
                      Aplicar filtro
                    </Button>
                  </FormTabFooter>
                ) : null}
              </FormTabWrapper>
            </SimpleBar>
          </FormTab>
        ) : null}

        {filtersData ? (
          <FormTab
            active={tabActive === 'filters'}
            onClick={(event) => event.stopPropagation()}
          >
            <FormTabButtonBack type="button" onClick={() => setTabActive(null)}>
              <SVG src={ArrowIconSVG} uniquifyIDs={true} />
            </FormTabButtonBack>
            <SimpleBar style={{ maxHeight: '100%' }}>
              <FormTabWrapper>
                <FormTabClose type="button" onClick={() => setTabActive(null)}>
                  Fechar
                </FormTabClose>
                <FormTabTitle>Mais filtros</FormTabTitle>
                  <FormTabContent>
                      {filtersData.prices &&
                      filtersData.prices.length &&
                      filtersData.prices[0] != filtersData.prices[1] ? (
                        <FormTabSlider>
                          <FormTabSliderTitle>Digite o valor Mínimo e Máximo</FormTabSliderTitle>
                          <RangeSlider
                            type="prices"
                            data={filtersData.prices}
                            finality={formik.values.finality}
                            prefix="R$ "
                            onChange={(values) => {
                              formik.setFieldValue('price_start', values[0]);
                              formik.setFieldValue('price_end', values[1]);
    
                              GTM.dataLayerPush({
                                event: 'Custom Field Change',
                                fieldLabel: 'Digite o valor Mínimo e Máximo',
                                fieldForm: 'Locais',
                                fieldValMin: values[0],
                                fieldValMax: values[1],
                              });
                            }}
                          />
                        </FormTabSlider>
                      ) : null}
                      {filtersData.area &&
                      filtersData.area.length &&
                      filtersData.area[0] != filtersData.area[1] ? (
                        <FormTabSlider>
                          <FormTabSliderTitle>Digite a Metragem Mínima e Máxima</FormTabSliderTitle>
                          <RangeSlider
                            type="area"
                            data={filtersData.area}
                            sep="a"
                            step={50}
                            suffix=" m²"
                            onChange={(values) => {
                              formik.setFieldValue('area_start', values[0]);
                              formik.setFieldValue('area_end', values[1]);
    
                              GTM.dataLayerPush({
                                event: 'Custom Field Change',
                                fieldLabel: 'Digite a Metragem Minima e Máxima',
                                fieldForm: 'Locais',
                                fieldValMin: values[0],
                                fieldValMax: values[1],
                              });
                            }}
                          />
                        </FormTabSlider>
                      ) : null}
    
                      {filtersData.bedrooms &&
                      filtersData.bedrooms.length &&
                      filtersData.bedrooms[0] != filtersData.bedrooms[1] ? (
                        <FormTabSlider>
                          <FormTabSliderTitle>Quartos</FormTabSliderTitle>
                          <RangeSlider
                            type="others"
                            data={filtersData.bedrooms}
                            sep="a"
                            step={1}
                            onChange={(values) => {
                              formik.setFieldValue('bedroom_start', values[0]);
                              formik.setFieldValue('bedroom_end', values[1]);
    
                              GTM.dataLayerPush({
                                event: 'Custom Field Change',
                                fieldLabel: 'Quartos',
                                fieldForm: 'Locais',
                                fieldValMin: values[0],
                                fieldValMax: values[1],
                              });
                            }}
                          />
                        </FormTabSlider>
                      ) : null}
    
                    {filtersData.bedrooms &&
                      filtersData.bedrooms.length &&
                      filtersData.bedrooms[0] != filtersData.bedrooms[1] ? (
                        <FormTabSlider>
                          <FormTabSliderTitle>Suítes</FormTabSliderTitle>
                          <RangeSlider
                            type="others"
                            data={filtersData.bedrooms}
                            sep="a"
                            step={1}
                            onChange={(values) => {
                              formik.setFieldValue('suites_start', values[0]);
                              formik.setFieldValue('suites_end', values[1]);
    
                              GTM.dataLayerPush({
                                event: 'Custom Field Change',
                                fieldLabel: 'Suítes',
                                fieldForm: 'Locais',
                                fieldValMin: values[0],
                                fieldValMax: values[1],
                              });
                            }}
                          />
                        </FormTabSlider>
                      ) : null}
                      {filtersData.parking &&
                      filtersData.parking.length &&
                      filtersData.parking[0] != filtersData.parking[1] ? (
                        <FormTabSlider>
                          <FormTabSliderTitle>Vagas</FormTabSliderTitle>
                          <RangeSlider
                            type="others"
                            data={filtersData.parking}
                            sep="a"
                            step={1}
                            onChange={(values) => {
                              formik.setFieldValue('parking_start', values[0]);
                              formik.setFieldValue('parking_end', values[1]);
    
                              GTM.dataLayerPush({
                                event: 'Custom Field Change',
                                fieldLabel: 'Vagas',
                                fieldForm: 'Locais',
                                fieldValMin: values[0],
                                fieldValMax: values[1],
                              });
                            }}
                          />
                        </FormTabSlider>
                      ) : null}
                  </FormTabContent>
                {(formik.values.price_start && formik.values.price_end) ||
                (formik.values.area_start && formik.values.area_end) ||
                (formik.values.bedroom_start && formik.values.bedroom_end) ||
                (typeof formik.values.parking_start !== 'undefined' &&
                  formik.values.parking_end) ? (
                  <FormTabFooter>
                    <Button
                      type="button"
                      fullWidth={true}
                      onClick={() => setTabActive(null)}
                    >
                      Aplicar filtro
                    </Button>
                  </FormTabFooter>
                ) : null}
              </FormTabWrapper>
            </SimpleBar>
          </FormTab>
        ) : null}

        {filtersData && filtersData.locals ? (
          <FormTab
            active={tabActive === 'locals'}
            onClick={(event) => event.stopPropagation()}
          >
            <FormTabButtonBack type="button" onClick={() => setTabActive(null)}>
              <SVG src={ArrowIconSVG} uniquifyIDs={true} aria-hidden="true"/>
            </FormTabButtonBack>
            <SimpleBar style={{ maxHeight: '100%' }}>
              <FormTabWrapper>
                <FormTabClose type="button" onClick={() => setTabActive(null)}>
                  Fechar
                </FormTabClose>
                <FormTabTitle>
                  {formik.values.source.value === 'sao-paulo'
                    ? 'Bairros'
                    : 'Localização'}
                </FormTabTitle>
                <FormTabContent hasFooter={true}>
                  <ul>
                    {Object.keys(filtersData.locals).map(
                      (local, localIndex) => (
                        <li key={`local-${local}-${localIndex}`}>
                          {formik.values.source.value !== 'sao-paulo' && (
                            <FormTabListItemTitle
                              active={filtersListToggle[local]}
                              onClick={() => handleFiltersListToggle(local)}
                            >
                              {local == 'SP' ? 'São Paulo' : local}
                            </FormTabListItemTitle>
                          )}
                          {filtersData.locals[local].length &&
                          !filtersListToggle[local] ? (
                            <ul>
                              {filtersData.locals[local].map(
                                (localItem, localItemIndex) => (
                                  <li
                                    key={`localitem-${localItem}-${localItemIndex}`}
                                  >
                                    <FormTabListItemButton
                                      type="button"
                                      active={formik.values.local.includes(
                                        localItem
                                      )}
                                      onClick={() =>
                                        setArrayValue('local', localItem)
                                      }
                                      className="holos-search-menu-item"
                                      data-label={localItem}
                                      data-type={'Selecione a localização'}
                                    >
                                      {localItem}
                                    </FormTabListItemButton>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : null}
                        </li>
                      )
                    )}
                  </ul>
                </FormTabContent>
                {formik.values.local.length > 0 ? (
                  <FormTabFooter>
                    <Button
                      type="button"
                      fullWidth={true}
                      onClick={() => setTabActive(null)}
                    >
                      Aplicar filtro
                    </Button>
                  </FormTabFooter>
                ) : null}
              </FormTabWrapper>
            </SimpleBar>
          </FormTab>
        ) : null}
      </Form>
    </Container>
  );
}

export default connect()(Search);
