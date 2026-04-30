import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GTM from 'helpers/gtm';

// components
import Modal from 'components/Modals';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { Success, SuccessColumn } from 'components/Modals/styles';

function BuildingContactSuccess() {
  const dispatch = useDispatch();
  const { modalBuildingContactSuccess } = useSelector(state => state.main);

  const closeModal = useCallback(() => {
    dispatch(setMain({ modalBuildingContactSuccess: false }))
  }, [ modalBuildingContactSuccess ]);

  useEffect(() => {
    if(modalBuildingContactSuccess) {
      GTM.dataLayerPush({
        event: 'Form Response',
        formType: 'Favorito - Agendar',
        formResult: 'Sucesso',
        formMessage: ''
      });
    }
  }, [ modalBuildingContactSuccess ]);

  return modalBuildingContactSuccess ? (
    <Modal
      active={modalBuildingContactSuccess}
      onClose={closeModal}
      themeColor="green"
      dataType="Favorito Contato Sucesso"
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

export default BuildingContactSuccess
