import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import Api from 'services';

// actions
import { setMain } from 'store/modules/main/actions';

// components
import BlockHighlighted from 'components/BlockHighlighted';

// styles
import {
  Container,
  Header,
  Body,
  BlockForm,
  Numbers,
  PhoneNumber,
  Tel,
  Whats,
  IframeContainer,
  Iframe,
  Mapa,
  Balloon,
  Pin,
  Circle,
  Rec,
} from './styles';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -23.578524,
  lng: -46.67418,
};

function FormContact({ showHeader = true }) {
  const dispatch = useDispatch();
  const refIframe = useRef(null);

  useEffect(() => {
    if (refIframe.current) {
      refIframe.current.onload = function() {
        const $contents = this.contentDocument || this.contentWindow.document;
        const $success = $contents.querySelector('.success-detect');

        if ($success) {
          dispatch(
            setMain({
              modalContactSuccess: true,
            })
          );
          refIframe.current.setAttribute('src', '/forms/contato/index.html');
        }
      };
    }
  }, [ refIframe ]);

  return (
    <>
      <Container>
        {showHeader && (
          <Header>
            <BlockHighlighted type="contact" />
            <Numbers>
              <PhoneNumber>
                <p>Se preferir ligue:</p>
                <Tel
                  flag="tel"
                  className="holos-institutional-contact-phone"
                  data-label="Telefone"
                />
              </PhoneNumber>
              <PhoneNumber>
                <p>Whatsapp:</p>
                <Whats
                  flag="whats"
                  className="holos-institutional-contact-phone"
                  data-label="Whatsapp"
                  showIcon
                />
              </PhoneNumber>
            </Numbers>
          </Header>
        )}
        <Body>
          <BlockForm showHeader={showHeader}>
            <IframeContainer>
              <Iframe
                ref={refIframe}
                src={`/forms/contato/index.html?redirectUrl=${process.env.config.siteUrl}/forms/contato/sucesso.html`}
                border="none"
                frameBorder="0"
                title="Contato"
              ></Iframe>
            </IframeContainer>
            <BlockHighlighted type="contactWork" />
          </BlockForm>
          <Mapa>
            <LoadScript googleMapsApiKey="AIzaSyAn4jhPJpyJwgIYnYyr4Kaj1JSyg74Qoto">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
              >
                <Marker position={{ lat: -23.577693, lng: -46.67388 }} />
                <Pin>
                  <Balloon>
                    <h4>Nosso escritório</h4>
                    <p>
                      Avenida Nove de Julho, 5017, 10° Andar. Jardim Paulista - São
                      Paulo, SP
                    </p>
                    <a href="https://g.page/axpe_imoveis?share">Como chegar?</a>
                  </Balloon>
                  <Rec />
                  <Circle />
                </Pin>
              </GoogleMap>
            </LoadScript>
          </Mapa>
        </Body>
      </Container>
      {/* <PrivacyPolicy
        onDemand={true}
        active={privacyPolicyActive}
        onClose={handlePrivacyPolicy}
      /> */}
    </>
  );
}

export default FormContact;
