import React from 'react';
import SVG from 'react-inlinesvg';

// components
import FormContact from 'components/FormContact';

// style
import {
  Container,
  Header,
  Gradient,
  GroupInfo,
  GroupContact,
  Title,
  Contact,
  Body
} from './styles';

// image
import WhatsappIconSVG from 'assets/icons/whats-white.svg';

const LANGUAGE_TEXT = {
  es: {
    title: 'Conozca',
    phoneLabel: 'Si lo prefieres llama:',
    subtitle: (
      <h2>
        <strong>Una manera especial de trabajar,</strong> tan especial como
        nuestras propiedades y nuestros clientes.
      </h2>
    ),
    texts: [
      'Axpe es una agencia inmobiliaria reinventada y dirigida por publicitarios enamorados por la arquitectura y el diseño, con una auténtica devoción a la estética.',
      'Eso significa que nuestro portafolio tiene una mirada diferente, apurada y criteriosa. Solo admite propiedades especiales, con “algo más”, que no se encuentran en cualquier esquina ni, mucho menos, en una inmobiliaria cualquiera. Y, para ayudarlo a encontrar la propiedad perfecta para Usted, nadie mejor que alguien que entienda y comparta sus referencias y preferencias, alguien con una mirada muy semejante a la suya. Así son nuestros agentes. Usted habla y ellos entienden. Y se fijan en todos los detalles, por pequeños que sean.',
      'Una manera especial de trabajar, tan especial como nuestras propiedades y nuestros clientes.'
    ]
  },
  en: {
    title: 'Get to know',
    phoneLabel: 'If you prefer, call:',
    subtitle: (
      <h2>
        <strong>Axpe is a real estate company reinvented</strong> and run by
        former advertising professionals who share a passion for architecture
        and design and a true devotion to aesthetics.
      </h2>
    ),
    texts: [
      'This means our portfolio is based on a different eye, discerning and highly selective. It includes only special properties. Properties that possess that “extra something”, which you won’t find on every corner, much less with every realtor. And to help you find the perfect property for you, nothing surpasses someone who understands and shares your references and preferences, someone with an eye that matches yours. Such are our agents. You speak and they understand right away. And pay attention to even the smallest of details. A way of working as special as our properties and our clients.'
    ]
  }
};

function OtherLanguages({ language }) {
  return (
    <Container>
      <Header>
        <Gradient />
        <GroupInfo>
          <Title>
            {LANGUAGE_TEXT[language].title} <strong> Axpe</strong>
          </Title>
          <hr />
          <GroupContact>
            <Contact href="tel:+551130373600">
              <p>{LANGUAGE_TEXT[language].phoneLabel}</p>
              <p>(11) 3037-3600</p>
            </Contact>
            <Contact href="https://wa.me/5511990373600">
              <p>Whatsapp:</p>
              <p>
                <SVG src={WhatsappIconSVG} uniquifyIDs={true} />
                (11) 93206-2653
               
              </p>
            </Contact>
          </GroupContact>
        </GroupInfo>
      </Header>
      <Body>
        {LANGUAGE_TEXT[language].subtitle}
        {LANGUAGE_TEXT[language].texts.map((text, textIndex) => (
          <p key={`lang-text-${textIndex}`}>{text}</p>
        ))}
      </Body>
      <FormContact showHeader={false} />
    </Container>
  );
}

export default OtherLanguages;