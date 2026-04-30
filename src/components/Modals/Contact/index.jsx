import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GTM from 'helpers/gtm';
import Api from 'services';

// components
import Modal from 'components/Modals';
import Button from 'components/Button';
import FormElements from 'components/FormElements';

// store
import { setMain } from 'store/modules/main/actions';

// styles
import { Form } from './styles';
import { FormGroup } from 'components/FormElements/styles';
import {
  Texts,
  Column,
  Text,
  TextWrapper,
  ColumnTitle,
} from 'components/Modals/styles';

export default function Contact() {
  const dispatch = useDispatch();
  const { modalContact } = useSelector((state) => state.main);
  const [ showRegister, setShowRegister ] = useState(false);

  const closeModal = useCallback(() => {
    dispatch(setMain({ modalContact: false }));
  }, [ modalContact ]);

  const onClickButtonBack = useCallback(() => {
    setShowRegister(false);
  }, []);

  const contactSchema = Yup.object().shape({
    message: Yup.string()
      .min(2)
      .required(),
    name: Yup.string().required(),
    lastName: Yup.string().required(),
    phone: Yup.string(),
    email: Yup.string().required(),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const response = await Api.Contact.postContact({
        ...values,
        subject: 'Mais informações',
      });

      setSubmitting(false);

      if (response.status) {
        dispatch(
          setMain({
            modalBuildingContactSuccess: true,
            modalContact: false,
            modalContactMessage: '',
          })
        );

        GTM.dataLayerPush({
          event: 'Form_submit_contact',
          formType: 'Favorito - Agendar',
          'nome_do_form': 'form_contact_modal'
        });

        resetForm({});
      } else {
        GTM.dataLayerPush({
          event: 'form_submit_contact',
          formType: 'Favorito - Agendar',
          formResult: 'Erro',
          formMessage: '',
        });
      }
    },
  });

  return modalContact ? (
    <Modal
      active={modalContact}
      onClose={closeModal}
      showButtonBack={showRegister}
      onClickButtonBack={onClickButtonBack}
      dataType="Favorito - Agendar"
    >
      <Texts>
        <Text>
          <TextWrapper>
            <h2>
              Que bom que você gostou <strong>deste imóvel</strong>
            </h2>
          </TextWrapper>
        </Text>
      </Texts>
      <Column>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <ColumnTitle>Quer mais informações sobre este imóvel?</ColumnTitle>
            <FormElements
              type="area"
              name="message"
              onChange={handleChange}
              error={touched.message && errors.message}
              value={values.message}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Quer mais informações sobre este imóvel?"
              data-type="Favorito - Agendar"
            />
            <FormElements
              type="text"
              name="name"
              onChange={handleChange}
              error={touched.name && errors.name}
              value={values.name}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Nome"
              data-type="Favorito - Agendar"
            />
            <FormElements
              type="text"
              name="lastName"
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
              value={values.lastName}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Sobrenome"
              data-type="Favorito - Agendar"
            />
            <FormElements
              type="phone"
              name="phone"
              onChange={handleChange}
              error={touched.phone && errors.phone}
              value={values.phone}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Telefone ou celular"
              data-type="Favorito - Agendar"
            />
            <FormElements
              type="email"
              name="email"
              onChange={handleChange}
              error={touched.email && errors.email}
              value={values.email}
              onBlur={handleBlur}
              className="holos-form-field"
              data-label="Sobrenome"
              data-type="Favorito - Agendar"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              className="holos-form-submit"
              data-type="Favorito - Agendar"
              fullWidth
            >
              Enviar
            </Button>
          </FormGroup>
        </Form>
      </Column>
    </Modal>
  ) : null;
}
