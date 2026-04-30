import React from 'react';
import { ContainerModalMoreInformation, ContentModalMoreInformation, MoreInformationButtonSend, MoreInformationButtonWhatsApp, MoreInformationForm, MoreInformationHeader, MoreInformationHeaderCloseButton, MoreInformationHeaderTitle, MoreInformationInput, MoreInformationSpeak, MoreInformationTextarea } from './styles';

export function MoreInformationModal({ toggleModalMoreInfo, address }) {
  return (
    <ContainerModalMoreInformation>
      <ContentModalMoreInformation>
        <MoreInformationHeader>
          <MoreInformationHeaderTitle>
            Quer mais informações sobre este imóvel?
          </MoreInformationHeaderTitle>
          <MoreInformationHeaderCloseButton onClick={toggleModalMoreInfo}>
            ×
          </MoreInformationHeaderCloseButton>
        </MoreInformationHeader>

        <MoreInformationSpeak>Fale diretamente conosco</MoreInformationSpeak>

        <MoreInformationForm>
          <MoreInformationInput type="text" placeholder="Nome" />

          <MoreInformationInput type="text" placeholder="Sobrenome" />

          <MoreInformationInput type="email" placeholder="Seu E-mail" />

          <MoreInformationInput type="text" placeholder="Seu WhatsApp" />

          <MoreInformationTextarea  placeholder={`Olá gostaria de saber mais sobre o imóvel ${address.local}`} />
          <MoreInformationButtonSend primary>Enviar formulário</MoreInformationButtonSend>
          <MoreInformationButtonWhatsApp>Entrar em contato por WhatsApp</MoreInformationButtonWhatsApp>
        </MoreInformationForm>
      </ContentModalMoreInformation>
    </ContainerModalMoreInformation>
  );
}