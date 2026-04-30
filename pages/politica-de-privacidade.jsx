import React from 'react';
import Head from 'next/head';

// components
import PrivacyPolicy from 'components/PrivacyPolicy';

function Privacy() {
  return (
    <>
      <Head>
        <title>Política de Privacidade da Axpe | Saiba Mais</title>
        <meta name="description" content="Entenda como protegemos seus dados e garantimos sua privacidade."/>
      </Head>
      <PrivacyPolicy />
    </>
  );
}

export default Privacy;
