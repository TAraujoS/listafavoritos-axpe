import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Modal from 'components/Modals';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { SuccessColumn } from 'components/Modals/styles';
import { Success } from 'components/Modals/RegisterSuccess/styles';

function ContactSuccess() {
  const dispatch = useDispatch();
  const { modalContactSuccess } = useSelector(state => state.main);

  const closeModal = useCallback(() => {
    dispatch(setMain({ modalContactSuccess: false }));
  }, [ modalContactSuccess ]);

  return modalContactSuccess ? (
    <Modal active={modalContactSuccess} onClose={closeModal} themeColor="green">
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
