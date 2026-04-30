// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import Head from 'next/head';
// import { useFormik } from 'formik';
// import Api from 'services';
// import * as Yup from 'yup';
// import ScrollTo, { getElementScrollTop } from 'helpers/scrollTo';

import { useRouter } from 'next/router';

// // components
// import BlockHighlighted from 'components/BlockHighlighted';
// import FormElements from 'components/FormElements';
// import Contact from 'components/Contact';

// // helpers
// import GTM from 'helpers/gtm';
// import SeoData from 'helpers/seo';
// import CookieUtmParams from 'helpers/cookieUtmParams';
// import { encrypt } from 'helpers/encryption';

// // styles
// import { FormGroup } from 'components/FormElements/styles';

// import {
//   Container,
//   Body,
//   Form,
//   FormGroupTwo,
//   FormGroupFlex,
//   FormGroupRow,
//   FormRow,
//   // FormGroupValues,
//   // FormGroupValuesSub,
//   FormGroupAddress,
//   // FormGroupPhotos,
//   // Description,
//   // GroupImages,
//   // GroupImage,
//   // Image,
//   FormGroupFooter,
//   ButtonSubmit,
// } from 'pages/Register/styles';


// const registrySchema = Yup.object().shape({
//   SingleLine5: Yup.string()
//     .oneOf([ 'Residencial', 'Comercial', 'Praia', 'Campo', 'Internacional' ])
//     .required(),
//   DecisionBox: Yup.string().required(),
//   Radio: Yup.string().required(),
//   Name_First: Yup.string().required(),
//   Name_Last: Yup.string().required(),
//   PhoneNumber_countrycode: Yup.string(),
//   Email: Yup.string()
//     .email()
//     .required(),
//   SingleLine11: Yup.string(),
//   // SingleLine: Yup.string().required(),
//   // SingleLine2: Yup.string().required(),
//   // SingleLine3: Yup.string(),
//   SingleLine4: Yup.string(),
//   SingleLine7: Yup.string(),
//   SingleLine8: Yup.string(),
//   // Number2: Yup.string().required(),
//   Number: Yup.string(),
//   Number1: Yup.string().required(),
//   // SingleLine12: Yup.string().required(),
//   // SingleLine13: Yup.string(),
//   // Currency: Yup.string(),
//   // Currency1: Yup.string(),
//   // Currency2: Yup.string(),
//   // Currency3: Yup.string(),
//   // MultiLine: Yup.string(),
//   // MultiLine2: Yup.string().required(),
//   // MultiLine1: Yup.string().required(),
//   finalityVender: Yup.string().required(),
//   finalityAluguel: Yup.string().required(),
//   SingleLine9: Yup.string(),
//   SingleLine10: Yup.string(),
//   images: Yup.array(),
//   SingleLine7: Yup.string(),
//   SingleLine8: Yup.string(),
//   // terms: Yup.boolean()
//   //   .oneOf([ true ])
//   //   .required(),
// });

// const formSuccessPageUrl = `${process.env.config.siteUrl}/cadastrar/sucesso`;

function Register({ locals, categories, countries }) {
  // const refForm = useRef(null);
  // const [ cats, setCats ] = useState([]);

    const router = useRouter();
  
    useEffect(() => {
      router.replace('/');
    }, [ router ]);
  
    return null;
  



  // const optionsLocals = [
  //   { label: 'Selecione', value: '' },
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
  //   { label: 'Jardins', value: 'Jardins' },
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

  // const optionsTypesData = {
  //   residencial: [
  //     'Apartamento',
  //     'Casa',
  //     'Casa de Vila',
  //     'Casa em Condomínio',
  //     'Cobertura',
  //     'Terreno',
  //   ],
  //   comercial: [
  //     'Casa Comercial',
  //     'Conjunto',
  //     'Galpão',
  //     'Laje',
  //     'Loja',
  //     'Terreno',
  //     'Prédio Monousuário',
  //   ],
  //   praia: [ 'Casa', 'Casa em Condomínio', 'Terreno' ],
  //   campo: [ 'Casa', 'Casa em Condomínio', 'Terreno' ],
  //   internacional: [ 'Apartamento', 'Casa', 'Vinhedo' ],
  // };

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
  //     SingleLine16: '',
  //     SingleLine17: '',
  //     Dropdown: 'Proprietário',
  //     SingleLine5: 'Residencial', // Categoria do Imóvel - Residencial, Comercial, Praia, Campo ou Internacional
  //     DecisionBox: true,
  //     Radio: 'Novo Lead',
  //     Name_First: '',
  //     Name_Last: '',
  //     PhoneNumber_countrycode: '',
  //     Email: '',
  //     SingleLine11: '', // Tipo do Imóvel - Apartamento, Casa, Cobertura, Conjunto, etc
  //     // removed SingleLine: '', // Endereço
  //     // removed SingleLine2: '', // Número
  //     // removed SingleLine3: '', // Complemento
  //     SingleLine4: '', // Cidade
  //     SingleLine7: '', // Bairros
  //     SingleLine8: '', // País
  //     // removed Number2: '', // Area util
  //     Number: '', // Quartos
  //     Number1: '', // Vagas
  //     // removed SingleLine12: '', // Chaves ficam com quem?
  //     // removed SingleLine13: '', // Imóvel vago? Sim ou Não
  //     // removed Currency: '', // Valor de venda
  //     // removed Currency1: '', // Valor de aluguel
  //     // removed Currency2: '', // Valor de condominio
  //     // removed Currency3: '', // Valor de iptu
  //     // removed MultiLine: '', // Fotos urls
  //     // removed MultiLine2: '', // O que o imóvel tem de melhor?
  //     // removed MultiLine1: '', // O que não é tão bacana
  //     SingleLine9: '', // Praia
  //     SingleLine10: '', // Condominio
  //     finalityVender: false,
  //     finalityAluguel: false,
  //     images: [],
  //     terms: false,
  //   },
  //   validationSchema: registrySchema,
  //   onSubmit: async (values) => {
  //     // values.Currency = values.Currency.replace('R$', '');
  //     // values.Currency2 = values.Currency2.replace('R$', '');

  //     // await Api.Building.postRegisterProperty();

  //     const encriptedEmail = values.Email ? encrypt(values.Email) : '';

  //     localStorage.setItem('cryptoId', encriptedEmail);

  //     setFieldValue('SingleLine16', encriptedEmail);
  //     setFieldValue('SingleLine17', localStorage.anonymousId);

  //     setFieldValue(
  //       'zf_redirect_url',
  //       `${formSuccessPageUrl}?email=${values.Email}`
  //     );

  //     GTM.dataLayerPush({
  //       'event': 'form_submit_cadastrar_imovel',
  //       'nome_do_form': 'Cadastrar Imóvel - ZOHO-SITECADASTROGERAL',
  //     });

  //     setTimeout(() => {
  //       refForm.current.submit();
  //     }, 500);
  //   },
  // });

  // const changeType = useCallback((field, value) => {
  //   setFieldValue(field, value);
  //   GTM.dataLayerPush({
  //     event: 'Custom Field Change',
  //     fieldLabel: 'Qual o perfil do imóvel que deseja cadastrar?',
  //     fieldForm: 'Cadastrar Imóvel',
  //     fieldValMin: '',
  //     fieldValMax: value,
  //   });
  // }, []);

  // const scrollToErrors = () => {
  //   const errorKeys = Object.keys(errors);

  //   if (!values.finalityVender && !values.finalityAluguel) {
  //     errorKeys.push('finalityVender');
  //     errorKeys.push('finalityAluguel');
  //   }

  //   if (errorKeys.length > 0) {
  //     let scrollToTop = -1;
  //     let firstErrorInput = null;

  //     errorKeys.forEach((key) => {
  //       const input = document.getElementsByName(key)?.[0];
  //       const inputScrollTop = getElementScrollTop(input);

  //       if (
  //         input &&
  //         input.getAttribute('type') !== 'hidden' &&
  //         (scrollToTop === -1 || inputScrollTop < scrollToTop)
  //       ) {
  //         scrollToTop = inputScrollTop;
  //         firstErrorInput = input;
  //       }
  //     });

  //     if (firstErrorInput) {
  //       ScrollTo(firstErrorInput, 50);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   async function loadMe() {
  //     const utmParams = CookieUtmParams.get();

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

  // useEffect(() => {
  //   let newCats = optionsTypesData[values.SingleLine5.toLowerCase()];

  //   if (values.SingleLine5 && newCats) {
  //     newCats = [{ label: 'Selecione', value: '' }].concat(
  //       newCats.map((x) => ({
  //         label: x,
  //         value: x,
  //       }))
  //     );
  //   }

  //   setCats(newCats);
  // }, [ values ]);

  // return (
  //   <>
  //     <Head>
  //       <title>{`Cadastre seu imóvel - ${SeoData.title}`}</title>
  //       <meta name="description" content={SeoData.description} />
  //     </Head>
  //     <Container>
  //       <BlockHighlighted type="registerProperty" />
  //       <Body>
  //         <Form
  //           ref={refForm}
  //           action="https://forms.zohopublic.com/axpeimoveis1/form/SITECADASTROGERAL/formperma/kS1k-h1kXXOhkZbL-r5ZJvV0cpaVSWVg-cm5AoLytbg/htmlRecords/submit"
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
  //           <input
  //             type="hidden"
  //             name="SingleLine16"
  //             value={values.SingleLine16}
  //             data-element="cryptoId"
  //           />
  //           <input
  //             type="hidden"
  //             name="SingleLine17"
  //             value={values.SingleLine17}
  //             data-element="anonymousId"
  //           />

  //           <input type="hidden" name="Name_First" value={values.Name_First} />
  //           <input type="hidden" name="Name_Last" value={values.Name_Last} />
  //           <input
  //             type="hidden"
  //             name="PhoneNumber_countrycode"
  //             value={values.PhoneNumber_countrycode}
  //           />
  //           <input type="hidden" name="Email" value={values.Email} />
  //           <input type="hidden" name="Radio" value={values.Radio} />
  //           <input type="hidden" name="Dropdown" value={values.Dropdown} />
  //           <input type="checkbox" name="DecisionBox" checked={true} />

  //           <select style={{ display: 'none' }} name="Dropdown7">
  //             <option selected="true" value="-Select-">-Select-</option>
  //             <option value="AXPE - SITE AXPE" selected>AXPE - SITE AXPE</option>
  //           </select>

  //           <FormGroup>
  //             <h2>Qual o perfil do imóvel que deseja cadastrar?</h2>
  //             <FormGroupFlex>
  //               <FormElements
  //                 name="SingleLine5"
  //                 type="radio"
  //                 label="Residencial"
  //                 size="big"
  //                 value="Residencial"
  //                 checked={values.SingleLine5 === 'Residencial'}
  //                 onChange={() => changeType('SingleLine5', 'Residencial')}
  //                 error={touched.SingleLine5 && errors.SingleLine5}
  //               />
  //               <FormElements
  //                 name="SingleLine5"
  //                 type="radio"
  //                 label="Comercial"
  //                 size="big"
  //                 value="Comercial"
  //                 checked={values.SingleLine5 === 'Comercial'}
  //                 onChange={() => changeType('SingleLine5', 'Comercial')}
  //                 error={touched.SingleLine5 && errors.SingleLine5}
  //               />
  //               <FormElements
  //                 name="SingleLine5"
  //                 type="radio"
  //                 label="Praia"
  //                 size="big"
  //                 value="Praia"
  //                 checked={values.SingleLine5 === 'Praia'}
  //                 onChange={() => changeType('SingleLine5', 'Praia')}
  //                 error={touched.SingleLine5 && errors.SingleLine5}
  //               />
  //               <FormElements
  //                 name="SingleLine5"
  //                 type="radio"
  //                 label="Campo"
  //                 size="big"
  //                 value="Campo"
  //                 checked={values.SingleLine5 === 'Campo'}
  //                 onChange={() => changeType('SingleLine5', 'Campo')}
  //                 error={touched.SingleLine5 && errors.SingleLine5}
  //               />
  //               <FormElements
  //                 name="SingleLine5"
  //                 type="radio"
  //                 label="Internacional"
  //                 size="big"
  //                 value="Internacional"
  //                 checked={values.SingleLine5 === 'Internacional'}
  //                 onChange={() => changeType('SingleLine5', 'Internacional')}
  //                 error={touched.SingleLine5 && errors.SingleLine5}
  //               />
  //             </FormGroupFlex>
  //           </FormGroup>

  //           <FormRow>
  //             <FormGroup>
  //               <h2>O que você deseja?</h2>
  //               <FormGroupTwo>
  //                 <FormElements
  //                   name="finalityVender"
  //                   type="checkbox"
  //                   label="Vender"
  //                   onChange={() => {
  //                     setFieldValue('finalityVender', !values.finalityVender);
  //                     setFinality(
  //                       !values.finalityVender,
  //                       values.finalityAluguel
  //                     );
  //                     GTM.dataLayerPush({
  //                       event: 'Custom Field Change',
  //                       fieldLabel: 'O que você deseja?',
  //                       fieldForm: 'Cadastrar Imóvel',
  //                       fieldValMin: '',
  //                       fieldValMax: 'Vender',
  //                     });
  //                   }}
  //                   error={
  //                     Object.keys(touched).length &&
  //                     !values.finalityVender &&
  //                     !values.finalityAluguel
  //                   }
  //                   value={values.finalityVender}
  //                   checked={values.finalityVender}
  //                   onBlur={handleBlur}
  //                 />
  //                 <FormElements
  //                   name="finalityAluguel"
  //                   type="checkbox"
  //                   label="Alugar"
  //                   onChange={() => {
  //                     setFieldValue('finalityAluguel', !values.finalityAluguel);
  //                     setFinality(
  //                       values.finalityVender,
  //                       !values.finalityAluguel
  //                     );
  //                     GTM.dataLayerPush({
  //                       event: 'Custom Field Change',
  //                       fieldLabel: 'O que você deseja?',
  //                       fieldForm: 'Cadastrar Imóvel',
  //                       fieldValMin: '',
  //                       fieldValMax: 'Alugar',
  //                     });
  //                   }}
  //                   error={
  //                     Object.keys(touched).length &&
  //                     !values.finalityVender &&
  //                     !values.finalityAluguel
  //                   }
  //                   value={values.finalityAluguel}
  //                   checked={values.finalityAluguel}
  //                   onBlur={handleBlur}
  //                 />
  //               </FormGroupTwo>
  //             </FormGroup>

  //             <FormGroupRow>
  //               {cats && cats.length >= 0 ? (
  //                 <FormGroup>
  //                   <h2>Qual o tipo do imóvel?</h2>
  //                   <FormElements
  //                     name="SingleLine11"
  //                     type="select"
  //                     items={cats}
  //                     onChange={handleChange}
  //                     error={touched.SingleLine11 && errors.SingleLine11}
  //                     onBlur={handleBlur}
  //                   />
  //                 </FormGroup>
  //               ) : null}
  //               {values.SingleLine5 === 'Internacional' && (
  //                 <FormGroup>
  //                   <h2>Qual o país?</h2>
  //                   <FormElements
  //                     name="SingleLine8"
  //                     type="select"
  //                     items={optionsCountries}
  //                     onChange={(e) => {
  //                       handleChange(e);
  //                       setFieldValue('SingleLine8', e.currentTarget.value);
  //                     }}
  //                     error={touched.SingleLine8 && errors.SingleLine8}
  //                     onBlur={handleBlur}
  //                   />
  //                 </FormGroup>
  //               )}
  //             </FormGroupRow>
  //           </FormRow>

  //           <FormGroup>
  //             {values.SingleLine5 !== 'Campo' && <h2>Onde fica?</h2>}
  //             {values.SingleLine5 === 'Campo' &&
  //               values.SingleLine11 === 'Casa em Condomínio' && (
  //                 <h2>Onde fica?</h2>
  //               )}
  //             <FormGroupAddress>
  //               {values.SingleLine5 === 'Internacional' && (
  //                 <FormElements
  //                   name="SingleLine4"
  //                   label="Cidade"
  //                   placeholder="Cidade"
  //                   onChange={handleChange}
  //                   error={touched.SingleLine4 && errors.SingleLine4}
  //                   value={values.SingleLine4}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Cidade"
  //                   data-type="Cadastrar Imóvel"
  //                 />
  //               )}
  //               {values.SingleLine5 === 'Praia' && (
  //                 <FormElements
  //                   name="SingleLine9"
  //                   label="Praia"
  //                   placeholder="Praia"
  //                   onChange={handleChange}
  //                   error={touched.SingleLine9 && errors.SingleLine9}
  //                   value={values.SingleLine9}
  //                   onBlur={handleBlur}
  //                   className="holos-form-field"
  //                   data-label="Praia"
  //                   data-type="Cadastrar Imóvel"
  //                 />
  //               )}
  //               {values.SingleLine11 === 'Casa em Condomínio' && (
  //                 <FormElements
  //                   name="SingleLine10"
  //                   label="Condomínio"
  //                   placeholder="Condomínio"
  //                   onChange={handleChange}
  //                   error={touched.SingleLine10 && errors.SingleLine10}
  //                   value={values.SingleLine10}
  //                   onBlur={handleBlur}
  //                 />
  //               )}

  //               {values.SingleLine5 !== 'Praia' &&
  //                 values.SingleLine5 !== 'Campo' &&
  //                 values.SingleLine5 !== 'Internacional' && (
  //                   <FormElements
  //                     name="SingleLine7"
  //                     placeholder="Bairro"
  //                     label="Bairro"
  //                     type="select"
  //                     items={optionsLocals}
  //                     message="* Por enquanto atuamos apenas nestes bairros"
  //                     onChange={handleChange}
  //                     error={touched.SingleLine7 && errors.SingleLine7}
  //                     value={values.SingleLine7}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="Bairro"
  //                     data-type="Cadastrar Imóvel"
  //                   />
  //                 )}
  //             </FormGroupAddress>
  //           </FormGroup>

  //           <FormGroup>
  //             <h2>Como é o seu imóvel</h2>
  //             <FormGroupFlex>
  //               {values.SingleLine5 !== 'Comercial' && (
  //                 <>
  //                   <FormElements
  //                     type="number"
  //                     name="Number"
  //                     label="Números de dormitórios"
  //                     placeholder="Números de dormitórios"
  //                     onChange={handleChange}
  //                     error={touched.Number && errors.Number}
  //                     value={values.Number}
  //                     onBlur={handleBlur}
  //                     className="holos-form-field"
  //                     data-label="Números de dormitórios"
  //                     data-type="Cadastrar Imóvel"
  //                   />
  //                 </>
  //               )}
  //               <FormElements
  //                 type="number"
  //                 name="Number1"
  //                 label="Número de vagas de garagem"
  //                 placeholder="Número de vagas de garagem"
  //                 onChange={handleChange}
  //                 error={touched.Number1 && errors.Number1}
  //                 value={values.Number1}
  //                 onBlur={handleBlur}
  //                 className="holos-form-field"
  //                 data-label="Número de vagas de garagem"
  //                 data-type="Cadastrar Imóvel"
  //               />
  //             </FormGroupFlex>
  //           </FormGroup>

  //           <FormGroup>
  //             <h2>Dados pessoais</h2>
  //           </FormGroup>
  //           <FormGroupFlex layout="userdata">
  //             <FormElements
  //               name="Name_First"
  //               label="Nome"
  //               placeholder="Nome"
  //               onChange={handleChange}
  //               error={touched.Name_First && errors.Name_First}
  //               onBlur={handleBlur}
  //               className="holos-form-field"
  //               data-label="Nome"
  //               data-type="Imóvel dos Sonhos"
  //             />
  //             <FormElements
  //               name="Name_Last"
  //               label="Sobrenome"
  //               placeholder="Sobrenome"
  //               onChange={handleChange}
  //               error={touched.Name_Last && errors.Name_Last}
  //               onBlur={handleBlur}
  //               className="holos-form-field"
  //               data-label="Sobrenome"
  //               data-type="Imóvel dos Sonhos"
  //             />
  //             <FormElements
  //               name="Email"
  //               type="email"
  //               label="Email"
  //               placeholder="Email"
  //               onChange={handleChange}
  //               error={touched.Email && errors.Email}
  //               onBlur={handleBlur}
  //               className="holos-form-field"
  //               data-label="Sobrenome"
  //               data-type="Imóvel dos Sonhos"
  //             />
  //             <FormElements
  //               name="PhoneNumber_countrycode"
  //               type="phone"
  //               label="Telefone ou Celular"
  //               placeholder="Telefone ou Celular"
  //               onChange={handleChange}
  //               error={
  //                 touched.PhoneNumber_countrycode &&
  //                 errors.PhoneNumber_countrycode
  //               }
  //               onBlur={handleBlur}
  //               className="holos-form-field"
  //               data-label="Telefone ou Celular"
  //               data-type="Imóvel dos Sonhos"
  //             />
  //           </FormGroupFlex>

  //           <FormGroupFooter>
  //             {/* <CheckLinkTerms
  //               type="checkboxLink"
  //               name="terms"
  //               label="Concordo com o termo de autorização de comercialização de imóveis"
  //               onChange={() => setFieldValue('terms', !values.terms)}
  //               error={touched.terms && errors.terms}
  //               value={values.terms}
  //               checked={values.terms}
  //               onBlur={handleBlur}
  //             /> */}

  //             <ButtonSubmit
  //               disabled={isSubmitting}
  //               type="submit"
  //               className="holos-form-submit"
  //               data-type="Cadastrar Imóvel"
  //               onClick={scrollToErrors}
  //             >
  //               {isSubmitting ? 'Enviando...' : 'Enviar'}
  //             </ButtonSubmit>
  //           </FormGroupFooter>
  //         </Form>
  //       </Body>
  //       <Contact />
  //     </Container>
  //   </>
  // );
}

// Register.getInitialProps = async ({ query }) => {
//   const locals = await Api.Search.getLocals();
//   // const categories = await Api.Search.getCategories();
//   const countries = await Api.Search.getFilters('?source=internacional');
//   const itemBase = { label: 'Selecione', value: '' };

//   const newContries = [ itemBase ];
//   Object.keys(countries.locals).map((x) =>
//     newContries.push({ label: x, value: x })
//   );

//   return {
//     locals: locals,
//     countries: newContries,
//     // categories,
//   };
// };

export async function getStaticProps() {
  return {
    notFound: true,
  };
}

export default Register;
