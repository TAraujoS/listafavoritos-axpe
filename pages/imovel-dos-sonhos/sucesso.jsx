import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// helpers
import { encrypt } from 'helpers/encryption';
import Link from 'next/link';
import GTM from 'helpers/gtm';
import SeoData from 'helpers/seo';

// styles
import { Container, Wrapper, Button } from 'pages/DreamBuilding/Success/styles';

function DreamBuildingSuccess() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const encriptedEmail = query.email ? encrypt(query.email) : '';
    let anonymousId = '';

    if (localStorage) {
      localStorage.setItem('cryptoId', encriptedEmail);
      anonymousId = localStorage.anonymousId;
    }

    GTM.dataLayerPush({
      event: 'Form Response',
      formType: 'Imóvel dos Sonhos',
      formResult: 'Sucesso',
      formMessage: '',
      cryptoId: encriptedEmail,
      anonymousId: anonymousId
    });
  }, []);

  return (
    <>
      <Head>
        <title>{`Imóvel dos sonhos - ${SeoData.title}`}</title>
        <meta name="description" content={SeoData.description} />
      </Head>
      <Container>
        <Wrapper>
          <h2>Foi! Agora é com a gente.</h2>
          <p>Em breve, entraremos em contato.</p>

          <Link href="/" passHref>
            <Button>&lt; Voltar à home</Button>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default DreamBuildingSuccess;
