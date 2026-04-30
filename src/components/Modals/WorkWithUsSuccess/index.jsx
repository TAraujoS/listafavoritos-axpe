import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GTM from 'helpers/gtm';

// components
import Modal from 'components/Modals';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { SuccessColumn } from 'components/Modals/styles';
import { Success } from 'components/Modals/RegisterSuccess/styles';

function ContactSuccess() {
  const dispatch = useDispatch();
  const { modalWorkWithUsSuccess } = useSelector((state) => state.main);

  const closeModal = useCallback(() => {
    if (modalWorkWithUsSuccess) {
      GTM.dataLayerPush({
        event: 'Form Response',
        formType: 'Trabalhe conosco',
        formResult: 'Sucesso',
        formMessage: '',
      });
    }

    dispatch(setMain({ modalWorkWithUsSuccess: false }));
  }, [ modalWorkWithUsSuccess ]);

  return modalWorkWithUsSuccess ? (
    <Modal
      active={modalWorkWithUsSuccess}
      onClose={closeModal}
      themeColor="green"
    >
      <Success>
        <SuccessColumn>
          <h2>Pronto!</h2>
        </SuccessColumn>
        <SuccessColumn>
          <p>
            Sua mensagem foi enviada com sucesso. Responderemos rapidamente.
          </p>
        </SuccessColumn>
      </Success>
    </Modal>
  ) : null;
}

export default ContactSuccess;
