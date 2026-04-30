import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import React, { useRef, useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
// import SVG from 'react-inlinesvg';
// import Head from 'next/head';
// import { useFormik } from 'formik';
// import Api from 'services';
// import * as Yup from 'yup';

// // helpers
// import Link from 'next/link';
// import SeoData from 'helpers/seo';
// import { getUTMs } from '../../src/helpers/cookieUtmParams';
// import { encrypt } from 'helpers/encryption';

// // components
// import Button from 'components/Button';
// import FormElements from 'components/FormElements';

// // assets
// import ArrowIconSVG from 'assets/icons/arrow.svg';

// // styles
// import {
//   Container,
//   Wrapper,
//   Breadcrumb,
//   Header,
//   Form,
//   ButtonLocals,
//   LocalsModal,
//   LocalsModalClose,
//   LocalsModalHeader,
//   LocalsModalList,
//   FormGroupContainer,
//   FormList,
//   FormListItem,
//   FormListItemStatic,
//   FormCols,
//   FormCol,
//   ButtonSubmitContainer,
// } from 'pages/DreamBuilding/Detail/styles';

// import { FormGroup } from 'components/FormElements/styles';

// const formSuccessPageUrl = `${process.env.config.siteUrl}/imovel-dos-sonhos/sucesso`;

function DreamBuildingSingle({ type }) {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/');
  }, [ router ]);

  return null;

  // const refForm = useRef(null);
  // const { main } = useSelector((state) => state);
  // const [ breadcrumb, setBreadcrumb ] = useState([]);
  // const [ localsModal, setLocalsModal ] = useState(false);
  // const [ optionsTypes, setOptionsTypes ] = useState([]);
  // const [ valueDropdown2, setValueDropdown2 ] = useState(null);
  // const [ finality, setFinality ] = useState(null);

  // const formSchema = Yup.object().shape({
  //   MultipleChoice1: Yup.array(),
  //   MultipleChoice: Yup.array(),
  //   Number: Yup.string(),
  //   Number1: type !== 'internacional' ? Yup.string().required() : Yup.string(),
  //   Number2: Yup.string().required(),
  //   Dropdown1: Yup.string(),
  //   Currency: Yup.string().required(),
  //   Dropdown4: Yup.string(),
  //   Dropdown5: Yup.string().required(),
  //   MultiLine1: Yup.string().required(),
  //   MultiLine2: Yup.string().required(),
  //   Radio1: Yup.string(),
  //   SingleLine2: Yup.string(),
  //   SingleLine3: Yup.string(),
  //   SingleLine4: Yup.string(),
  //   SingleLine5: Yup.string(),
  //   Dropdown3: Yup.string(),
  //   Name_First: Yup.string().required(),
  //   Name_Last: Yup.string().required(),
  //   Email: Yup.string()
  //     .email()
  //     .required(),
  //   PhoneNumber_countrycode: Yup.string(),
  // });

  // const getBreadcrumb = useCallback(() => {
  //   switch (type) {
  //     case 'sao-paulo-comprar-residencial':
  //       return [ 'sp', 'Residencial / Comprar' ];
  //     case 'sao-paulo-comprar-lancamentos':
  //       return [ 'sp', 'Lançamentos / Comprar' ];
  //     case 'sao-paulo-alugar-residencial':
  //       return [ 'sp', 'Residencial / Alugar' ];
  //     case 'sao-paulo-comerciais':
  //       return [ 'sp', 'Comerciais' ];
  //     case 'praia-campo':
  //       return [ 'sp', 'Praia / Campo' ];
  //     case 'internacional':
  //       return [ 'Internacional' ];
  //   }
  // }, [ type ]);

  // const optionsDropdownNumbers = [ ...Array(11).keys() ].map((i) => ({
  //   label: i,
  //   value: i,
  // }));
  // const optionsLeisure = [
  //   { label: 'Selecione uma opção', value: '' },
  //   { label: 'De preferência, sem lazer', value: 'De preferência, sem lazer' },
  //   {
  //     label: 'O básico: piscina e academia',
  //     value: 'O básico: piscina e academia',
  //   },
  //   {
  //     label: 'Completo: tudo que podem me oferecer',
  //     value: 'Completo: tudo que podem me oferecer',
  //   },
  // ];
  // const optionsLocals = [
  //   { label: 'Aclimação', value: 'Aclimação' },
  //   { label: 'Alto da Lapa', value: 'Alto da Lapa' },
  //   { label: 'Alto de Pinheiros', value: 'Alto de Pinheiros' },
  //   { label: 'Bela Vista', value: 'Bela Vista' },
  //   { label: 'Brooklin Novo', value: 'Brooklin Novo' },
  //   { label: 'Campo Belo', value: 'Campo Belo' },
  //   { label: 'Centro', value: 'Centro' },
  //   { label: 'Cidade Jardim', value: 'Cidade Jardim' },
  //   { label: 'Consolação', value: 'Consolação' },
  //   { label: 'Higienópolis', value: 'Higienópolis' },
  //   { label: 'Ibirapuera', value: 'Ibirapuera' },
  //   { label: 'Itaim Bibi', value: 'Itaim Bibi' },
  //   { label: 'Jardim América', value: 'Jardim América' },
  //   { label: 'Jardim Europa', value: 'Jardim Europa' },
  //   { label: 'Jardim Guedala', value: 'Jardim Guedala' },
  //   { label: 'Jardim Paulista', value: 'Jardim Paulista' },
  //   { label: 'Jardim Paulistano', value: 'Jardim Paulistano' },
  //   { label: 'Jardins / C. César', value: 'Jardins / C. César' },
  //   { label: 'Moema', value: 'Moema' },
  //   { label: 'Pacaembu', value: 'Pacaembu' },
  //   { label: 'Paraíso', value: 'Paraíso' },
  //   { label: 'Perdizes', value: 'Perdizes' },
  //   { label: 'Pinheiros', value: 'Pinheiros' },
  //   { label: 'Pompeia', value: 'Pompeia' },
  //   { label: 'Real Parque', value: 'Real Parque' },
  //   { label: 'Santa Cecília', value: 'Santa Cecília' },
  //   { label: 'Sumaré', value: 'Sumaré' },
  //   { label: 'Vila Beatriz', value: 'Vila Beatriz' },
  //   { label: 'Vila Madalena', value: 'Vila Madalena' },
  //   { label: 'Vila Mariana', value: 'Vila Mariana' },
  //   { label: 'Vila Nova Conceição', value: 'Vila Nova Conceição' },
  //   { label: 'Vila Olímpia', value: 'Vila Olímpia' },
  // ];
  // const optionsDropdown5 = [
  //   { label: 'Selecione uma opção', value: '' },
  //   { label: 'Google ou outros', value: 'Google&#x20;ou&#x20;outros' },
  //   { label: 'Facebook', value: 'Facebook' },
  //   { label: 'E-mail Publicitário', value: 'E-mail&#x20;Publicit&aacute;rio' },
  //   { label: 'Instagram', value: 'Instagram' },
  //   {
  //     label: 'Indicação de amigos e família',
  //     value:
  //       'Indica&ccedil;&atilde;o&#x20;de&#x20;amigos&#x20;e&#x20;fam&iacute;lia',
  //   },
  //   { label: 'Placa na rua', value: 'Placa&#x20;na&#x20;rua' },
  //   {
  //     label: 'Anúncio na imprensa',
  //     value: 'An&uacute;ncio&#x20;na&#x20;imprensa',
  //   },
  //   {
  //     label: 'Matérias em jornais e revistas',
  //     value: 'Mat&eacute;rias&#x20;em&#x20;jornais&#x20;e&#x20;revistas',
  //   },
  //   {
  //     label: 'Outros sites e blogs',
  //     value: 'Outros&#x20;sites&#x20;e&#x20;blogs',
  //   },
  //   { label: 'Eventos da Axpe', value: 'Eventos&#x20;da&#x20;Axpe' },
  //   { label: 'Linkedin', value: 'Linkedin' },
  //   // { label: 'Christie\'s', value: 'Christie&#x27;s' },
  //   { label: 'Viva Real', value: 'Viva&#x20;Real' },
  //   { label: 'Zap Im&oacute;veis', value: 'Zap&#x20;Im&oacute;veis' },
  // ];

  // const optionsFinalities = [
  //   { label: 'Selecione uma opção', value: '' },
  //   { label: 'Comprar', value: 'Comprar' },
  //   { label: 'Alugar', value: 'Interessado - Alugar' },
  // ];

  // const optionsCountries = [
  //   { label: 'Selecione uma opção', value: '' },
  //   { label: '&Aacute;frica do Sul', value: 'África do Sul' },
  //   { label: 'Argentina', value: 'Argentina' },
  //   { label: '&Aacute;ustria', value: 'Áustria' },
  //   { label: 'Austr&aacute;lia', value: 'Austrália' },
  //   { label: 'Bahamas', value: 'Bahamas' },
  //   { label: 'Barbados', value: 'Barbados' },
  //   { label: 'Belize', value: 'Belize' },
  //   { label: 'Bermuda', value: 'Bermuda' },
  //   { label: 'Canad&aacute;', value: 'Canadá' },
  //   { label: 'Chile', value: 'Chile' },
  //   { label: 'Colombia', value: 'Colombia' },
  //   { label: 'Costa Rica', value: 'Costa Rica' },
  //   { label: 'Emirados &Aacute;rabes', value: 'Emirados Árabes' },
  //   { label: 'Esc&oacute;cia', value: 'Escócia' },
  //   { label: 'Espanha', value: 'Espanha' },
  //   { label: 'EUA', value: 'EUA' },
  //   { label: 'Fiji', value: 'Fiji' },
  //   { label: 'Fran&ccedil;a', value: 'França' },
  //   { label: 'Gr&eacute;cia', value: 'Grécia' },
  //   { label: 'Holanda', value: 'Holanda' },
  //   { label: 'Hong Kong', value: 'Hong Kong' },
  //   { label: 'Ilhas Cayman', value: 'Ilhas Cayman' },
  //   { label: 'Ilhas Turks e Caicos', value: 'Ilhas Turks e Caicos' },
  //   { label: 'Ilhas Virgens', value: 'Ilhas Virgens' },
  //   { label: 'Inglaterra', value: 'Inglaterra' },
  //   { label: 'Irlanda', value: 'Irlanda' },
  //   { label: 'It&aacute;lia', value: 'Itália' },
  //   { label: 'Maldivas', value: 'Maldivas' },
  //   { label: 'Marrocos', value: 'Marrocos' },
  //   { label: 'M&eacute;xico', value: 'México' },
  //   { label: 'M&ocirc;naco', value: 'Mônaco' },
  //   { label: 'Nova Zel&acirc;ndia', value: 'Nova Zelândia' },
  //   { label: 'Panam&aacute;', value: 'Panamá' },
  //   { label: 'Porto Rico', value: 'Porto Rico' },
  //   { label: 'Portugal', value: 'Portugal' },
  //   { label: 'Rep&uacute;blica Dominicana', value: 'República Dominicana' },
  //   { label: 'Singapura', value: 'Singapura' },
  //   { label: 'Su&eacute;cia', value: 'Suécia' },
  //   { label: 'Su&iacute;&ccedil;a', value: 'Suíça' },
  //   { label: 'S&atilde;o Bartolomeu', value: 'São Bartolomeu' },
  //   { label: 'Uruguai', value: 'Uruguai' },
  // ];

  // const optionsTypesData = {
  //   'sao-paulo-comprar-residencial': [
  //     'Apartamento',
  //     'Casa',
  //     'Casa de vila',
  //     'Casa em condomínio',
  //     'Cobertura',
  //     'Terreno',
  //   ],
  //   'sao-paulo-alugar-residencial': [
  //     'Apartamento',
  //     'Casa',
  //     'Casa de vila',
  //     'Casa em condomínio',
  //     'Cobertura',
  //     'Terreno',
  //   ],
  //   'sao-paulo-comprar-lancamentos': [
  //     'Apartamento',
  //     'Cobertura',
  //     'Casa em condomínio',
  //   ],
  //   'sao-paulo-comerciais': [
  //     'Casa Comercial',
  //     'Conjunto',
  //     'Galpão',
  //     'Laje',
  //     'Loja',
  //     'Terreno',
  //     'Prédio monousuário',
  //   ],
  //   campo: [ 'Casa', 'Casa em condomínio', 'Terreno' ],
  //   praia: [ 'Casa', 'Casa em condomínio', 'Terreno' ],
  //   internacional: [ 'Apartamento', 'Casa' ],
  // };

  // const {
  //   handleSubmit,
  //   handleChange,
  //   handleBlur,
  //   isSubmitting,
  //   values,
  //   touched,
  //   errors,
  //   setFieldValue,
  // } = useFormik({
  //   initialValues: {
  //     zf_referrer_name: '',
  //     zf_redirect_url: formSuccessPageUrl,
  //     zc_gad: '',
  //     utm_source: '',
  //     utm_medium: '',
  //     utm_campaign: '',
  //     utm_term: '',
  //     utm_content: '',
  //     Dropdown: 'Comprar',
  //     Dropdown1: 'VD-Residencial SP',
  //     Dropdown2: valueDropdown2,
  //     DecisionBox: true,
  //     Radio: 'Novo Lead',
  //     Name_First: '',
  //     Name_Last: '',
  //     PhoneNumber_countrycode: '',
  //     Email: '',
  //     MultipleChoice1: [],
  //     MultipleChoice: [],
  //     locals: [],
  //     Dropdown1:
  //       type === 'sao-paulo-comerciais' || type === 'praia-campo'
  //         ? ''
  //         : 'vazio',
  //     Number: '',
  //     Number1: '',
  //     Number2: '',
  //     Currency: '',
  //     Dropdown4: '',
  //     Dropdown5: '',
  //     MultiLine1: '',
  //     MultiLine2: '',
  //     Radio1: '',
  //     SingleLine2: '',
  //     SingleLine3: '',
  //     SingleLine4: '',
  //     SingleLine5: '',
  //     Dropdown3: '',
  //   },
  //   validationSchema: formSchema,
  //   onSubmit: async (values) => {

  //     if (type == 'praia-campo'){
  //         values.SingleLine4 = encrypt(values.Email);
  //         setFieldValue('SingleLine4', encrypt(values.Email));
  //         values.SingleLine5 = localStorage.anonymousId;
  //         setFieldValue('SingleLine5', localStorage.anonymousId);
  //     } else {
  //       values.SingleLine3 = encrypt(values.Email);
  //       setFieldValue('SingleLine3', encrypt(values.Email));
  //       values.SingleLine4 = localStorage.anonymousId;
  //       setFieldValue('SingleLine4', localStorage.anonymousId);
  //     }

  //     if (type != 'praia-campo' && type != 'internacional'){

  //       if (
  //         values.MultipleChoice &&
  //         typeof values.MultipleChoice !== 'undefined'
  //       ) {
  //         const selectedLocations =
  //           typeof values.MultipleChoice === 'string'
  //             ? values.MultipleChoice
  //             : values.MultipleChoice.join(', ');
  //         setFieldValue('SingleLine2', selectedLocations);
  //       }
  //     }

  //     setFieldValue(
  //       'zf_redirect_url',
  //       `${formSuccessPageUrl}?email=${values.Email}`
  //     );

  //     setTimeout(() => {
  //       refForm.current.submit();
  //     }, 1000);
  //   },
  // });

  // useEffect(() => {
  //   setBreadcrumb(getBreadcrumb());
  // }, [ type ]);

  // useEffect(() => {
  //   let params = null;

  //   const setFilters = async () => {
  //     const newOptionsTypes = [];
  //     let selectedOptionsTypes = optionsTypesData[type];

  //     if (type === 'praia-campo' && values.Radio1) {
  //       selectedOptionsTypes = optionsTypesData[values.Radio1.toLowerCase()];
  //     }

  //     if (selectedOptionsTypes) {
  //       selectedOptionsTypes.forEach((item) => {
  //         newOptionsTypes.push({
  //           label: item,
  //           value: item,
  //         });
  //       });
  //       setOptionsTypes(newOptionsTypes);
  //     }
  //   };

  //   switch (type) {
  //     case 'sao-paulo-comprar-residencial':
  //       params = `?source=sao-paulo&finality=venda&use=RESIDENCIAL&ready_release=pronto`;
  //       break;
  //     case 'sao-paulo-comprar-lancamentos':
  //       params = `?source=sao-paulo&finality=venda&use=RESIDENCIAL&ready_release=lancamento`;
  //       break;
  //     case 'sao-paulo-alugar-residencial':
  //       params = `?source=sao-paulo&finality=aluguel&use=RESIDENCIAL`;
  //       break;
  //     case 'sao-paulo-comerciais':
  //       params =
  //         finality === 'aluguel'
  //           ? `?source=sao-paulo&finality=aluguel&use=COMERCIAL`
  //           : `?source=sao-paulo&finality=venda&use=COMERCIAL`;
  //       break;
  //     case 'praia-campo':
  //       params = `?source=praia&finality=aluguel`;
  //       break;
  //     case 'internacional':
  //       params = `?source=internacional&finality=venda`;
  //       break;
  //   }

  //   if (main.categories && params) {
  //     setFilters();
  //   }
  // }, [ main.categories, finality, values.Radio1 ]);

  // useEffect(() => {
  //   let tempValueDropdown2 = null;

  //   switch (type) {
  //     case 'internacional':
  //       tempValueDropdown2 = 'VD-RES Revenda IN';
  //       break;
  //     case 'sao-paulo-comprar-lancamentos':
  //       tempValueDropdown2 = 'VD-RES Lançamento SP';
  //       break;
  //     case 'sao-paulo-alugar-residencial':
  //       tempValueDropdown2 = 'LC-RES Longa SP';
  //       break;
  //     case 'sao-paulo-comerciais':
  //       tempValueDropdown2 =
  //         finality === 'aluguel' ? 'LC-COM Longa SP' : 'VD-COM Revenda SP';
  //       break;
  //     case 'praia-campo':
  //       tempValueDropdown2 =
  //         finality === 'aluguel' ? 'LC-RES Longa PC' : 'VD-RES Revenda PC';
  //       break;
  //     default:
  //       tempValueDropdown2 = 'VD-RES Revenda SP';
  //       break;
  //   }

  //   setValueDropdown2(tempValueDropdown2);
  //   setFieldValue('Dropdown2', tempValueDropdown2);
  // }, [ finality ]);

  // useEffect(() => {
  //   async function loadMe() {
  //     const utmParams = getUTMs.get();

  //     if (utmParams.utm_source)
  //       setFieldValue('utm_source', utmParams.utm_source);

  //     if (utmParams.utm_medium)
  //       setFieldValue('utm_medium', utmParams.utm_medium);

  //     if (utmParams.utm_campaign)
  //       setFieldValue('utm_campaign', utmParams.utm_campaign);

  //     if (utmParams.utm_term) setFieldValue('utm_term', utmParams.utm_term);

  //     if (utmParams.utm_content)
  //       setFieldValue('utm_content', utmParams.utm_content);
  //   }

  //   loadMe();
  // }, []);

  // return (
  //   <>
  //     <Head>
  //       <title>{`Imóvel dos sonhos - ${SeoData.title}`}</title>
  //       <meta name="description" content={SeoData.description} />
  //     </Head>
  //     <Container>
  //       <Wrapper>
  //         {breadcrumb.length > 0 && (
  //           <Breadcrumb>
  //             <Link href="/imovel-dos-sonhos" passHref>
  //               {breadcrumb[0] === 'sp' ? 'São Paulo' : breadcrumb[0]}
  //             </Link>
  //             {breadcrumb[1] ? (
  //               <>
  //                 <span>/</span>
  //                 <strong>{breadcrumb[1]}</strong>
  //               </>
  //             ) : null}
  //           </Breadcrumb>
  //         )}

  //         <Header>
  //           <h2>
  //             Como é o imóvel <strong>dos seus sonhos</strong>
  //           </h2>
  //         </Header>

  //         <Form
  //           ref={refForm}
  //           action="https://forms.zohopublic.com/axpeimoveis1/form/FormulrioFinalKafnet1/formperma/T3VVsmae1y_8dNWOpGn5QuqMAZo2D6zY-vcOlzz-nY4/htmlRecords/submit"
  //           method="POST"
  //           accept-charset="UTF-8"
  //           enctype="multipart/form-data"
  //           onSubmit={handleSubmit}
  //         >
  //           <input
  //             type="hidden"
  //             name="zf_referrer_name"
  //             value={values.zf_referrer_name}
  //           />
  //           <input
  //             type="hidden"
  //             name="zf_redirect_url"
  //             value={values.zf_redirect_url}
  //           />
  //           <input type="hidden" name="zc_gad" value={values.zc_gad} />
  //           <input type="hidden" name="utm_source" value={values.utm_source} />
  //           <input type="hidden" name="utm_medium" value={values.utm_medium} />

  //           <input type="hidden" name="utm_source" value={values.utm_source} />
  //           <input type="hidden" name="utm_medium" value={values.utm_medium} />
  //           <input
  //             type="hidden"
  //             name="utm_campaign"
  //             value={values.utm_campaign}
  //           />
  //           <input type="hidden" name="utm_term" value={values.utm_term} />
  //           <input
  //             type="hidden"
  //             name="utm_content"
  //             value={values.utm_content}
  //           />
  //           <input type="hidden" name="Dropdown" value={values.Dropdown} />
  //           <input type="hidden" name="Dropdown1" value={values.Dropdown1} />
  //           <input type="hidden" name="Dropdown2" value={values.Dropdown2} />
  //           <input type="checkbox" checked={true} name="DecisionBox" />
  //           <input type="radio" name="Radio" value={values.Radio} checked />
  //           <input type="hidden" name="Name_First" value={values.Name_First} />
  //           <input type="hidden" name="Name_Last" value={values.Name_Last} />
  //           <input
  //             type="hidden"
  //             name="PhoneNumber_countrycode"
  //             value={values.PhoneNumber_countrycode}
  //           />
  //           <input type="hidden" name="Email" value={values.Email} />
  //           <input type="hidden" name="Currency" value={values.Currency} />
  //           <input type="hidden" name="Radio1" value={values.Radio1} />

  //           <input type="hidden" name="SingleLine3" value={values.SingleLine3} />
  //           <input type="hidden" name="SingleLine4" value={values.SingleLine4} />
  //           <input type="hidden" name="SingleLine5" value={values.SingleLine5} />


  //           {type !== 'praia-campo' && type !== 'internacional' && (
  //             <input
  //               type="hidden"
  //               name="SingleLine2"
  //               value={values.SingleLine2}
  //             />
  //           )}

  //           {type === 'sao-paulo-comerciais' || type === 'praia-campo' ? (
  //             <FormCols>
  //               <FormCol noMarginBottom={type === 'sao-paulo-comerciais'}>
  //                 <h3>Para:</h3>
  //                 <FormGroup>
  //                   <FormElements
  //                     name="Dropdown1"
  //                     type="select"
  //                     items={optionsFinalities}
  //                     onChange={(event) => {
  //                       const value = event.target.value;
  //                       setFieldValue('Dropdown1', value);
  //                       setFinality(value);
  //                     }}
  //                     error={touched.Dropdown1 && errors.Dropdown1}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="Para:"
  //                     data-type="Imóvel dos Sonhos"
  //                   />
  //                 </FormGroup>
  //               </FormCol>
  //               {type === 'praia-campo' && (
  //                 <FormCol layout="half" last={true}>
  //                   <h3>Praia ou Campo?</h3>
  //                   <FormList styleType="praiacampo">
  //                     <FormListItem>
  //                       <FormElements
  //                         name="Radio1"
  //                         id="Radio1-praia"
  //                         type="radio"
  //                         label="Praia"
  //                         onChange={handleChange}
  //                         error={touched.Radio1 && errors.Radio1}
  //                         value="Praia"
  //                         onBlur={handleBlur}
  //                         className="holos-form-field"
  //                         data-label="Praia"
  //                         data-type="Imóvel dos Sonhos"
  //                       />
  //                     </FormListItem>
  //                     <FormListItem>
  //                       <FormElements
  //                         name="Radio1"
  //                         id="Radio1-campo"
  //                         type="radio"
  //                         label="Campo"
  //                         onChange={handleChange}
  //                         error={touched.Radio1 && errors.Radio1}
  //                         value="Campo"
  //                         onBlur={handleBlur}
  //                         className="holos-form-field"
  //                         data-label="Campo"
  //                         data-type="Imóvel dos Sonhos"
  //                       />
  //                     </FormListItem>
  //                   </FormList>
  //                 </FormCol>
  //               )}
  //             </FormCols>
  //           ) : null}

  //           {type === 'internacional' && (
  //             <FormCols>
  //               <FormCol layout="half">
  //                 <h3>Qual o país de seu interesse?</h3>
  //                 <FormGroup>
  //                   <FormElements
  //                     name="Dropdown3"
  //                     type="select"
  //                     items={optionsCountries}
  //                     onChange={handleChange}
  //                     error={touched.Dropdown3 && errors.Dropdown3}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="Qual o país de seu interesse?"
  //                     data-type="Imóvel dos Sonhos"
  //                   />
  //                 </FormGroup>
  //               </FormCol>
  //             </FormCols>
  //           )}

  //           {optionsTypes.length >= 1 ? (
  //             <FormGroupContainer>
  //               <h2>
  //                 Que tipo de imóvel você procura?{' '}
  //                 <strong>Marque quantas opções você quiser.</strong>
  //               </h2>
  //               <FormList>
  //                 {optionsTypes.length >= 1 &&
  //                   optionsTypes.map((type, typeIndex) => (
  //                     <FormListItemStatic
  //                       key={`formlistitem-type-${typeIndex}-${type.value}`}
  //                     >
  //                       <FormElements
  //                         id={`MultipleChoice1_${typeIndex}`}
  //                         name="MultipleChoice1"
  //                         type="checkbox"
  //                         label={type.label}
  //                         onChange={handleChange}
  //                         error={
  //                           touched.MultipleChoice1 && errors.MultipleChoice1
  //                         }
  //                         value={type.value}
  //                         onBlur={handleBlur}
  //                         className="holos-form-field"
  //                         data-label={type.label}
  //                         data-type="Imóvel dos Sonhos"
  //                       />
  //                     </FormListItemStatic>
  //                   ))}
  //               </FormList>
  //             </FormGroupContainer>
  //           ) : null}

  //           {type !== 'praia-campo' && type !== 'internacional' && (
  //             <>
  //               <ButtonLocals
  //                 type="button"
  //                 onClick={() => setLocalsModal(true)}
  //               >
  //                 Aonde você deseja?{' '}
  //                 <strong>Selecione um ou mais bairros</strong>
  //               </ButtonLocals>

  //               <LocalsModal active={localsModal}>
  //                 <LocalsModalClose
  //                   type="button"
  //                   onClick={() => setLocalsModal(false)}
  //                   active={localsModal}
  //                 >
  //                   <SVG src={ArrowIconSVG} uniquifyIDs={true} />
  //                 </LocalsModalClose>
  //                 <LocalsModalHeader>
  //                   <h4>Aonde você deseja?</h4>
  //                   <p>Selecione um ou mais bairros</p>
  //                 </LocalsModalHeader>
  //                 <LocalsModalList>
  //                   <FormList>
  //                     {optionsLocals.map((local, localIndex) => (
  //                       <FormListItem
  //                         key={`formlistitem-type-${localIndex}-${local.value}`}
  //                       >
  //                         <FormElements
  //                           id={`MultipleChoice_${localIndex}`}
  //                           name="MultipleChoice"
  //                           type="checkbox"
  //                           label={local.label}
  //                           onChange={handleChange}
  //                           checked={values.MultipleChoice.includes(
  //                             local.value
  //                           )}
  //                           error={
  //                             touched.MultipleChoice && errors.MultipleChoice
  //                           }
  //                           value={local.value}
  //                           onBlur={handleBlur}
  //                           className="holos-form-field"
  //                           data-label={local.label}
  //                           data-type="Imóvel dos Sonhos"
  //                         />
  //                       </FormListItem>
  //                     ))}
  //                   </FormList>
  //                 </LocalsModalList>
  //               </LocalsModal>

  //               <FormGroupContainer mq="desktop">
  //                 <h2>
  //                   Aonde você deseja?{' '}
  //                   <strong>Selecione um ou mais bairros</strong>
  //                 </h2>
  //                 <FormList>
  //                   {optionsLocals.map((local, localIndex) => (
  //                     <FormListItem
  //                       key={`formlistitem-type-${localIndex}-${local.value}`}
  //                     >
  //                       <FormElements
  //                         id={`MultipleChoice_${localIndex}`}
  //                         name="MultipleChoice"
  //                         type="checkbox"
  //                         label={local.label}
  //                         onChange={handleChange}
  //                         checked={values.MultipleChoice.includes(local.value)}
  //                         error={
  //                           touched.MultipleChoice && errors.MultipleChoice
  //                         }
  //                         value={local.value}
  //                         onBlur={handleBlur}
  //                         className="holos-form-field"
  //                         data-label={local.label}
  //                         data-type="Imóvel dos Sonhos"
  //                       />
  //                     </FormListItem>
  //                   ))}
  //                 </FormList>
  //               </FormGroupContainer>
  //             </>
  //           )}

  //           {type === 'internacional' && (
  //             <FormGroupContainer>
  //               <h2>Aonde você deseja?</h2>
  //               <FormCol layout="half">
  //                 <FormGroup>
  //                   <FormElements
  //                     name="SingleLine2"
  //                     label="Quais as cidades de interesse"
  //                     placeholder="&nbsp;"
  //                     onChange={handleChange}
  //                     error={touched.SingleLine2 && errors.SingleLine2}
  //                     value={values.SingleLine2}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="De quanto espaço você precisa?"
  //                     data-type="Imóvel dos Sonhos"
  //                   />
  //                 </FormGroup>
  //               </FormCol>
  //             </FormGroupContainer>
  //           )}

  //           <FormGroupContainer>
  //             <h2>
  //               Conte mais detalhes sobre o que está buscando{' '}
  //               <strong>Selecione apenas uma opção</strong>
  //             </h2>
  //           </FormGroupContainer>

  //           {type === 'praia-campo' && (
  //             <FormCols>
  //               {values.Radio1 === 'Praia' && (
  //                 <FormCol layout="half">
  //                   <h3>Quais praias você consideraria?</h3>
  //                   <FormGroup>
  //                     <FormElements
  //                       name="SingleLine2"
  //                       type="area"
  //                       onChange={handleChange}
  //                       error={touched.SingleLine2 && errors.SingleLine2}
  //                       onBlur={handleBlur}
  //                       className="holos-form-field"
  //                       data-label="Quais praias você consideraria?"
  //                       data-type="Imóvel dos Sonhos"
  //                     />
  //                   </FormGroup>
  //                 </FormCol>
  //               )}
  //               {values.Radio1 === 'Campo' && (
  //                 <FormCol layout="half">
  //                   <h3>Quais condomínios de campo consideraria?</h3>
  //                   <FormGroup>
  //                     <FormElements
  //                       name="SingleLine3"
  //                       type="area"
  //                       onChange={handleChange}
  //                       error={touched.SingleLine3 && errors.SingleLine3}
  //                       onBlur={handleBlur}
  //                       className="holos-form-field"
  //                       data-label="Quais condomínios de campo consideraria?"
  //                       data-type="Imóvel dos Sonhos"
  //                     />
  //                   </FormGroup>
  //                 </FormCol>
  //               )}
  //             </FormCols>
  //           )}

  //           <FormCols>
  //             <FormCol layout="half">
  //               <h3>Qual o valor que você quer investir?</h3>
  //               <FormGroup>
  //                 <FormElements
  //                   type="currency"
  //                   name="Currency"
  //                   label="Valor em R$"
  //                   placeholder="Valor em R$"
  //                   onChange={(event) => {
  //                     const currency = event.target.value;
  //                     setFieldValue('Currency', currency);
  //                     setFieldValue(
  //                       'Currency',
  //                       currency.replace('R$', '').replace(/[.]/g, '')
  //                     );
  //                   }}
  //                   error={touched.Currency && errors.Currency}
  //                   value={values.Currency}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Qual o valor que você quer investir?"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             {type !== 'sao-paulo-comerciais' && (
  //               <FormCol layout="bedrooms">
  //                 <h3>Número de quartos?</h3>
  //                 <FormGroup>
  //                   <FormElements
  //                     name="Number"
  //                     type="select"
  //                     items={optionsDropdownNumbers}
  //                     onChange={handleChange}
  //                     error={touched.Number && errors.Number}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="Número de quartos?"
  //                     data-type="Imóvel dos Sonhos"
  //                   />
  //                 </FormGroup>
  //               </FormCol>
  //             )}
  //             {type !== 'internacional' && (
  //               <FormCol layout="parking" last={true}>
  //                 <h3>Vagas de garagem?</h3>
  //                 <FormGroup>
  //                   <FormElements
  //                     name="Number1"
  //                     type="select"
  //                     items={optionsDropdownNumbers}
  //                     onChange={handleChange}
  //                     error={touched.Number1 && errors.Number1}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="Vagas de garagem?"
  //                     data-type="Imóvel dos Sonhos"
  //                   />
  //                 </FormGroup>
  //               </FormCol>
  //             )}
  //           </FormCols>

  //           <FormCols>
  //             <FormCol layout="half">
  //               <h3>De quanto espaço você precisa?</h3>
  //               <FormGroup>
  //                 <FormElements
  //                   type="number"
  //                   name="Number2"
  //                   label="Área útil (m²)"
  //                   placeholder="Área útil (m²)"
  //                   onChange={handleChange}
  //                   error={touched.Number2 && errors.Number2}
  //                   value={values.Number2}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="De quanto espaço você precisa?"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             {type !== 'sao-paulo-comerciais' && type !== 'internacional' && (
  //               <FormCol layout="half" last={true}>
  //                 <h3>E sobre a área de lazer?</h3>
  //                 <FormGroup>
  //                   <FormElements
  //                     name="Dropdown4"
  //                     type="select"
  //                     items={optionsLeisure}
  //                     onChange={handleChange}
  //                     error={touched.Dropdown4 && errors.Dropdown4}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="E sobre a área de lazer?"
  //                     data-type="Imóvel dos Sonhos"
  //                   />
  //                 </FormGroup>
  //               </FormCol>
  //             )}
  //           </FormCols>

  //           <FormCols>
  //             <FormCol layout="half">
  //               <h3>O que não pode faltar no imóvel?</h3>
  //               <FormGroup>
  //                 <FormElements
  //                   name="MultiLine2"
  //                   type="area"
  //                   onChange={handleChange}
  //                   error={touched.MultiLine2 && errors.MultiLine2}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="O que não pode faltar no imóvel?"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             <FormCol layout="half" last={true}>
  //               <h3>E o que você não quer, de jeito nenhum?</h3>
  //               <FormGroup>
  //                 <FormElements
  //                   name="MultiLine1"
  //                   type="area"
  //                   onChange={handleChange}
  //                   error={touched.MultiLine1 && errors.MultiLine1}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="E o que você não quer, de jeito nenhum?"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //           </FormCols>

  //           <FormCols>
  //             <FormCol layout="half">
  //               <h3>Como você conheceu a Axpe?</h3>
  //               <FormGroup>
  //                 <FormElements
  //                   name="Dropdown5"
  //                   type="select"
  //                   items={optionsDropdown5}
  //                   onChange={handleChange}
  //                   error={touched.Dropdown5 && errors.Dropdown5}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Como você conheceu a Axpe?"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             <FormCol layout="half" last={true}></FormCol>
  //           </FormCols>

  //           <FormCols>
  //             <FormCol layout="half">
  //               <h3>Dados pessoais</h3>
  //             </FormCol>
  //             <FormCol layout="half" last={true}></FormCol>
  //             <FormCol layout="half">
  //               <FormGroup>
  //                 <FormElements
  //                   name="Name_First"
  //                   label="Nome"
  //                   placeholder="Nome"
  //                   onChange={handleChange}
  //                   error={touched.Name_First && errors.Name_First}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Nome"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             <FormCol layout="half" last={true}>
  //               <FormGroup>
  //                 <FormElements
  //                   name="Name_Last"
  //                   label="Sobrenome"
  //                   placeholder="Sobrenome"
  //                   onChange={handleChange}
  //                   error={touched.Name_Last && errors.Name_Last}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Sobrenome"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             <FormCol layout="half">
  //               <FormGroup>
  //                 <FormElements
  //                   name="Email"
  //                   type="email"
  //                   label="Email"
  //                   placeholder="Email"
  //                   onChange={handleChange}
  //                   error={touched.Email && errors.Email}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Sobrenome"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //             <FormCol layout="half" last={true}>
  //               <FormGroup>
  //                 <FormElements
  //                   name="PhoneNumber_countrycode"
  //                   type="phone"
  //                   label="Telefone ou Celular"
  //                   placeholder="Telefone ou Celular"
  //                   onChange={handleChange}
  //                   error={
  //                     touched.PhoneNumber_countrycode &&
  //                     errors.PhoneNumber_countrycode
  //                   }
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Telefone ou Celular"
  //                   data-type="Imóvel dos Sonhos"
  //                 />
  //               </FormGroup>
  //             </FormCol>
  //           </FormCols>

  //           <ButtonSubmitContainer>
  //             <Button
  //               disabled={isSubmitting}
  //               type="submit"
  //               className="holos-form-submit"
  //               data-type="Imóvel dos Sonhos"
  //             >
  //               Enviar
  //             </Button>
  //           </ButtonSubmitContainer>
  //         </Form>
  //       </Wrapper>
  //     </Container>
  //   </>
  // );
}

// DreamBuildingSingle.getInitialProps = async ({ query }) => {
//   const locals = await Api.Search.getLocals();
//   const categories = await Api.Search.getCategories();
//   const countries = await Api.Search.getFilters('?source=internacional');
//   const itemBase = { label: 'Selecione', value: '' };

//   const newContries = [ itemBase ];
//   Object.keys(countries.locals).map((x) =>
//     newContries.push({ label: x, value: x })
//   );

//   return {
//     locals: locals,
//     countries: newContries,
//     categories,
//     type: query.type,
//   };
// };

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    notFound: true,
  };
}

export default DreamBuildingSingle;