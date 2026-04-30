import React from 'react';
import Head from 'next/head';

// components
import TermsOfUse from 'components/TermsOfUse';

// helpers
import SeoData from 'helpers/seo';

function Privacy() {
  return (
    <>
      <Head>
        <title>{`Termos de uso - ${SeoData.title}`}</title>
        <meta name="description" content={SeoData.description} />
      </Head>
      <TermsOfUse />
    </>
  );
}

export default Privacy;
