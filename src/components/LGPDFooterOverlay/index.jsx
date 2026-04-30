import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// styles
import {
  Container,
  Wrapper,
  Button
} from './styles';

function LGPDFooterOverlay() {

  const [ isCookiesAgreementValid, setCookiesAgreementValid ] = useState(false);

  useEffect(() => {
    if(('true' == Cookies.get('isCookiesAgreementValid')) && !isCookiesAgreementValid) {
      setCookiesAgreementValid(true);
    }
  }, [ isCookiesAgreementValid ]);

  const acceptCookies = () => {
    Cookies.set('isCookiesAgreementValid', true, { expires: 15 });
    setCookiesAgreementValid(true);
  };

  return (
    <Container className={!isCookiesAgreementValid ? 'active' : ''}>
      <Wrapper>
        <div>
          Utilizamos cookies essenciais de acordo com a nossa Politica de Privacidade e, ao continuar navegando, você concorda com essas condições.
        </div>

        <Button
          type="button"
          className="holos-lgpd-overlay"
          fullWidth={true}
          onClick={acceptCookies}
        >
          Aceitar
        </Button>

      </Wrapper>
    </Container>
  );
}

export default LGPDFooterOverlay;