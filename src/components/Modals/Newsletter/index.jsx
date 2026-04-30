import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Modal from 'components/Modals';
import Slider from 'components/Slider';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { Texts, Text, TextWrapper, Column, ColumnTitle } from 'components/Modals/styles';
import { FormContainer, Iframe } from './styles';

function NewsletterModal() {
  const dispatch = useDispatch();
  const refIframe = useRef(null);
  const { modalNewsletter } = useSelector(state => state.main);

  useEffect(() => {
    if (refIframe.current) {
      refIframe.current.onload = function() {
        const $contents = this.contentDocument || this.contentWindow.document;
        const $success = $contents.querySelector('.success-detect');

        if ($success) {
          dispatch(
            setMain({
              modalNewsletterSuccess: true
            })
          );
          
          refIframe.current.setAttribute('src', '/forms/newsletter/index.html');

          dispatch(
            setMain({
              modalNewsletter: false
            })
          );
        }
      };
    }
  });

  const closeModal = useCallback(() => {
    dispatch(setMain({ modalNewsletter: false }))
  }, [ modalNewsletter ]);

  return modalNewsletter ? (
    <Modal
      active={modalNewsletter}
      onClose={closeModal}
      dataType="Newsletter"
    >
      <Texts>
        <Slider propsArrow={{ color: 'white' }}>
          <Text>
            <TextWrapper>
              <h2><strong>Cadastre-se</strong> para receber nossas novidades em <span>primeira mão.</span></h2>
            </TextWrapper>
          </Text>
        </Slider>
      </Texts>
      <Column>
        <FormContainer>
          <ColumnTitle>Por favor, preencha seus dados e fique por dentro do que acontece na Axpe.</ColumnTitle>
          <Iframe
            ref={refIframe}
            src={`${process.env.config.siteUrl}/forms/newsletter/index.html?redirectUrl=${process.env.config.siteUrl}/forms/newsletter/sucesso.html`}
            border="none"
            title="Newsletter"
          ></Iframe>
        </FormContainer>
      </Column>
    </Modal>
  ) : null
}

export default NewsletterModal
