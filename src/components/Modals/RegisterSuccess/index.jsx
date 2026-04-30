import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import GTM from 'helpers/gtm';

// components
import Modal from 'components/Modals';

// helpers
import { encrypt } from 'helpers/encryption';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { SuccessColumn } from 'components/Modals/styles';
import { Success } from './styles';

function RegisterSuccess() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = router;
  const { modalRegisterSuccess } = useSelector((state) => state.main);

  const closeModal = useCallback(
    (redirectUrl = '/') => {
      dispatch(setMain({ modalRegisterSuccess: false }));
      router.push(redirectUrl);
    },
    [ modalRegisterSuccess ]
  );

  useEffect(() => {
    if (modalRegisterSuccess) {
      const encriptedEmail = query.email ? encrypt(query.email) : '';
      let anonymousId = '';
      
      if (localStorage) {
        localStorage.setItem('cryptoId', encriptedEmail);
        anonymousId = localStorage.anonymousId;
      }

      GTM.dataLayerPush({
        event: 'Form_submit_cadastrar_imovel',
        'nome_do_form': 'form_register_imovel_modal',
        formType: 'Cadastrar Imóvel',
        formResult: 'Sucesso',
        // formMessage: '',
        cryptoId: encriptedEmail,
        anonymousId: anonymousId
      });
    }
  }, [ modalRegisterSuccess ]);

  return modalRegisterSuccess ? (
    <Modal
      active={modalRegisterSuccess}
      onClose={() => closeModal()}
      themeColor="green"
    >
      <Success>
        <SuccessColumn>
          <h2>
            Recebemos&nbsp;o seu&nbsp;<span>cadastro</span>
          </h2>
        </SuccessColumn>
        <SuccessColumn>
          <p>Aguarde nosso contato para agendarmos uma visita ao seu imóvel.</p>
        </SuccessColumn>
      </Success>
    </Modal>
  ) : null;
}

export default RegisterSuccess;
