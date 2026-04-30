import React from 'react';
import Head from 'next/head';

// components
import FormContact from 'components/FormContact';

function Contact() {
  return (
    <>
      <Head>
        <title>Entre em Contato com a Axpe - Fale Conosco</title>
        <meta name="description" content="Fale com a Axpe. Tire suas dúvidas e conheça nossos canais de atendimento." />
      </Head>
      <FormContact />
    </>
  );
}

export default Contact;
