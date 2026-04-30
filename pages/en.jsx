import React from 'react';
import Head from 'next/head';

// components
import OtherLanguages from 'pages/OtherLanguages';

// helpers
import SeoData from 'helpers/seo';

function English() {
  return (
    <>
      <Head>
        <title>{SeoData.title}</title>
        <meta name="description" content={SeoData.description} />
      </Head>
      <OtherLanguages language="en" />
    </>
  );
}

export default English;
