import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GTM from 'helpers/gtm';

// components
import Modal from 'components/Modals';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { Success, SuccessColumn } from 'components/Modals/styles';

function NewsletterSuccess() {
  const dispatch = useDispatch();
  const { modalNewsletterSuccess } = useSelector(state => state.main);

  const closeModal = useCallback(() => {
    dispatch(setMain({ modalNewsletterSuccess: false }))
  }, [ modalNewsletterSuccess ]);

  useEffect(() => {
    if(modalNewsletterSuccess) {
      GTM.dataLayerPush({
        event: 'form_submit_newsletter',
        'nome_do_form': 'form_newsletter_modal',
        formType: 'Newsletter',
        formResult: 'Sucesso',
      });
    }
  }, [ modalNewsletterSuccess ]);

  return modalNewsletterSuccess ? (
    <Modal
      active={modalNewsletterSuccess}
      onClose={closeModal}
      themeColor="green"
      dataType="Newsletter Sucesso"
    >
      <Success>
        <SuccessColumn>
          <h2>Quase pronto!</h2>
        </SuccessColumn>
        <SuccessColumn>
          <p>Agora é só olhar sua caixa de e-mail e clicar no link que acabamos de enviar.</p>
        </SuccessColumn>
      </Success>
    </Modal>
  ) : null;
}

export default NewsletterSuccess
