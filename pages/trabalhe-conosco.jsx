import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Api from 'services';

// actions
import { setMain } from 'store/modules/main/actions';

// components
import FormElements from 'components/FormElements';
import { FormGroup, FormGroupYesNo } from 'components/FormElements/styles';

// helpers
import GTM from 'helpers/gtm';
import { getErrorMessage } from 'helpers/errors';

// styles
import {
  Container,
  Form,
  FormGroupButton,
  FormGroupBrokerExperience,
  ButtonContainer,
  FormGroupBasics,
  FormGroupLang,
} from 'pages/Work/styles';

const workSchema = Yup.object().shape({
  brokerExperience: Yup.string().required(),
  haveBelieved: Yup.string().required(),
  name: Yup.string()
    .min(2)
    .required(),
  lastName: Yup.string()
    .min(2)
    .required(),
  cpf: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.string().required(),
  mobile: Yup.string().required(),
  linkedin: Yup.string(),
  facebook: Yup.string(),
  instagram: Yup.string(),
  twitter: Yup.string(),
  anotherSocialNetwork: Yup.string(),
  lang1: Yup.string(),
  lang2: Yup.string(),
  lang3: Yup.string(),
  lang4: Yup.string(),
  previousExperiences: Yup.string().required(),
  reasonWorkAxpe: Yup.string().required(),
  wasIndicated: Yup.boolean(),
  whoIndicated: Yup.string(),
  terms: Yup.boolean()
    .oneOf([ true ])
    // .required(),
});

function Work() {
  const dispatch = useDispatch();
  // const linkPolitics = (
  //   <a href="/politica-de-privacidade">política de privacidade</a>
  // );

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      brokerExperience: '',
      haveBelieved: '',
      name: '',
      lastName: '',
      cpf: '',
      email: '',
      phone: '',
      mobile: '',
      linkedin: '',
      facebook: '',
      instagram: '',
      twitter: '',
      anotherSocialNetwork: '',
      lang1: '',
      lang2: '',
      lang3: '',
      lang4: '',
      previousExperiences: '',
      reasonWorkAxpe: '',
      wasIndicated: '',
      whoIndicated: '',
      terms: true,
    },
    validationSchema: workSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const response = await Api.Contact.postWorkWithUs(values);

      setSubmitting(false);

      if (response.status) {
        dispatch(
          setMain({
            modalWorkWithUsSuccess: true,
          })
        );

        resetForm({});
      } else {
        const msg = getErrorMessage(response.msg);

        GTM.dataLayerPush({
          event: 'Form Trabalhe Conosco',
          'nome_do_form': 'trabalhe-conosco',
          formType: 'Trabalhe conosco',
          formResult: 'Erro',
          formMessage: msg,
        });
      }
    },
  });

  return (
    <>
      <Head>
        <title>Trabalhe Conosco | Faça Parte da Equipe Axpe</title>
        <meta name="description" content="Quer fazer parte do time da Axpe? Veja as vagas disponíveis!" />
      </Head>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Quero trabalhar na Axpe</h1>
          <FormGroup>
            <h2>Você já trabalhou ou trabalha como corretor de imóveis?*</h2>
            <FormGroupBrokerExperience>
              <FormElements
                name="brokerExperience"
                type="checkbox"
                label="Não"
                checked={values.brokerExperience === 'Não'}
                onChange={() => setFieldValue('brokerExperience', 'Não')}
                error={touched.brokerExperience && errors.brokerExperience}
                value={values.brokerExperience}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Não"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="brokerExperience"
                type="checkbox"
                label="Sim, em imobiliária"
                checked={values.brokerExperience === 'Sim, em imobiliária'}
                onChange={() =>
                  setFieldValue('brokerExperience', 'Sim, em imobiliária')
                }
                error={touched.brokerExperience && errors.brokerExperience}
                value={values.brokerExperience}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Sim, em imobiliária"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="brokerExperience"
                type="checkbox"
                label="Sim, como autônomo"
                checked={values.brokerExperience === 'Sim, como autônomo'}
                onChange={() =>
                  setFieldValue('brokerExperience', 'Sim, como autônomo')
                }
                error={touched.brokerExperience && errors.brokerExperience}
                value={values.brokerExperience}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Sim, como autônomo"
                data-type="Trabalhe Conosco"
              />
            </FormGroupBrokerExperience>
          </FormGroup>

          <FormGroup>
            <h2>POSSUI CRECI?*</h2>
            <FormGroupYesNo>
              <FormElements
                name="haveBelieved"
                type="checkbox"
                label="Não"
                checked={values.haveBelieved === false}
                onChange={() => setFieldValue('haveBelieved', false)}
                error={touched.haveBelieved && errors.haveBelieved}
                value={values.haveBelieved}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Possui CRECI? Não"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="haveBelieved"
                type="checkbox"
                label="Sim"
                checked={values.haveBelieved}
                onChange={() => setFieldValue('haveBelieved', true)}
                error={touched.haveBelieved && errors.haveBelieved}
                value={values.haveBelieved}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Possui CRECI? Sim"
                data-type="Trabalhe Conosco"
              />
            </FormGroupYesNo>
          </FormGroup>

          <FormGroup>
            <h2>SEUS DADOS BÁSICOS*</h2>
            <FormGroupBasics>
              <FormElements
                name="name"
                label="Nome"
                placeholder="Nome"
                onChange={handleChange}
                error={touched.name && errors.name}
                value={values.name}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Nome"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="lastName"
                label="Sobrenome"
                placeholder="Sobrenome"
                onChange={handleChange}
                error={touched.lastName && errors.lastName}
                value={values.lastName}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Sobrenome"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                type="cpf"
                name="cpf"
                label="CPF"
                placeholder="CPF"
                onChange={handleChange}
                error={touched.cpf && errors.cpf}
                value={values.cpf}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="CPF"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                type="emailmask"
                name="email"
                label="E-mail pessoal"
                placeholder="E-mail pessoal"
                onChange={handleChange}
                error={touched.email && errors.email}
                value={values.email}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="E-mail pessoal"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                type="phone"
                name="phone"
                label="Telefone"
                placeholder="Telefone"
                onChange={handleChange}
                error={touched.phone && errors.phone}
                value={values.phone}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Telefone"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                type="phone"
                name="mobile"
                label="Celular"
                placeholder="Celular"
                onChange={handleChange}
                error={touched.mobile && errors.mobile}
                value={values.mobile}
                onBlur={handleBlur}
                className="holos-form-field"
                data-label="Celular"
                data-type="Trabalhe Conosco"
              />
            </FormGroupBasics>
          </FormGroup>

          <FormGroup>
            <h2>REDES SOCIAIS NAS QUAIS VOCÊ ESTÁ</h2>
            <FormElements
              name="linkedin"
              label="Linkedin"
              placeholder="copie e cole o link do seu perfil aqui"
              onChange={handleChange}
              className="holos-form-field"
              data-label="Linkedin"
              data-type="Trabalhe Conosco"
            />
            <FormElements
              name="facebook"
              label="Facebook"
              placeholder="copie e cole o link do seu perfil aqui"
              onChange={handleChange}
              className="holos-form-field"
              data-label="Facebook"
              data-type="Trabalhe Conosco"
            />
            <FormElements
              name="instagram"
              label="Instagram"
              placeholder="copie e cole o link do seu perfil aqui"
              onChange={handleChange}
              className="holos-form-field"
              data-label="Instagram"
              data-type="Trabalhe Conosco"
            />
            <FormElements
              name="twitter"
              label="Twitter"
              placeholder="copie e cole o link do seu perfil aqui"
              onChange={handleChange}
              className="holos-form-field"
              data-label="Twitter"
              data-type="Trabalhe Conosco"
            />
            <FormElements
              name="anotherSocialNetwork"
              label="Outras"
              placeholder="copie e cole o link do seu perfil aqui"
              onChange={handleChange}
              className="holos-form-field"
              data-label="Outras"
              data-type="Trabalhe Conosco"
            />
          </FormGroup>

          <FormGroup>
            <h2>idiomas que falo fluentemente</h2>
            <FormGroupLang>
              <FormElements
                name="lang1"
                label="Idioma"
                placeholder="Idioma"
                onChange={handleChange}
                className="holos-form-field"
                data-label="Idioma1"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="lang2"
                label="Idioma"
                placeholder="Idioma"
                onChange={handleChange}
                className="holos-form-field"
                data-label="Idioma2"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="lang3"
                label="Idioma"
                placeholder="Idioma"
                onChange={handleChange}
                className="holos-form-field"
                data-label="Idioma3"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="lang4"
                label="Idioma"
                placeholder="Idioma"
                onChange={handleChange}
                className="holos-form-field"
                data-label="Idioma4"
                data-type="Trabalhe Conosco"
              />
            </FormGroupLang>
          </FormGroup>

          <FormGroup>
            <h2>experiências anteriores na área comercial de empresas:*</h2>
            <FormElements
              type="area"
              name="previousExperiences"
              placeholder="Comente sobre suas experiências anteriores"
              onChange={handleChange}
              error={touched.previousExperiences && errors.previousExperiences}
              value={values.previousExperiences}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Experiências anteriores na area comercial de empresas"
              data-type="Trabalhe Conosco"
            />
          </FormGroup>
          <FormGroup>
            <h2>por que gostaria de trabalhar conosco?*</h2>
            <FormElements
              type="area"
              name="reasonWorkAxpe"
              placeholder="Comente sobre suas experiências anteriores"
              onChange={handleChange}
              error={touched.reasonWorkAxpe && errors.reasonWorkAxpe}
              value={values.reasonWorkAxpe}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="por que gostaria de trabalhar conosco"
              data-type="Trabalhe Conosco"
            />
          </FormGroup>
          <FormGroup>
            <h2>conhece alguém na Axpe?</h2>
            <FormGroupYesNo>
              <FormElements
                name="wasIndicated"
                type="checkbox"
                label="Não"
                checked={values.wasIndicated === false}
                onChange={() => setFieldValue('wasIndicated', false)}
                className="holos-form-field"
                data-label="conhece alguém na axpe? não"
                data-type="Trabalhe Conosco"
              />
              <FormElements
                name="wasIndicated"
                type="checkbox"
                label="Sim"
                checked={values.wasIndicated}
                onChange={() => setFieldValue('wasIndicated', true)}
                className="holos-form-field"
                data-label="Conhece alguém na axpe? sim"
                data-type="Trabalhe Conosco"
              />
            </FormGroupYesNo>
            {values.wasIndicated && (
              <FormElements
                name="whoIndicated"
                placeholder="Quem?"
                label="Quem?"
                onChange={handleChange}
                className="holos-form-field"
                data-label="Conhece quem na axpe?"
                data-type="Trabalhe Conosco"
              />
            )}
          </FormGroup>
          <FormGroupButton>
            {/* <FormElements
              type="checkboxLink"
              name="terms"
              label={<>Concordo com a {linkPolitics} da Axpe.</>}
              onChange={handleChange}
              error={touched.terms && errors.terms}
              value={values.terms}
              checked={values.terms}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Concordo com a politica de privacidade da Axpe"
              data-type="Trabalhe Conosco"
            /> */}
            <ButtonContainer
              disabled={isSubmitting}
              type="submit"
              className="holos-form-submit"
              data-type="Trabalhe Conosco"
            >
              Enviar
            </ButtonContainer>
          </FormGroupButton>
        </Form>
      </Container>
    </>
  );
}

export default Work;
