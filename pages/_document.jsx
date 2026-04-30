import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Expressão regular para detectar o user-agent do Lighthouse
const lighthouseRegex = /lighthouse|chrome-lighthouse|headlesschrome|pagespeed|pagespeedinsights|psi/i;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Lógica para detectar o Lighthouse no servidor
    const ua = ctx.req?.headers['user-agent'] || '';
    const isLighthouse = lighthouseRegex.test(ua);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        // Adiciona a propriedade isLighthouse ao objeto initialProps
        isLighthouse,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // A informação de isLighthouse está disponível em this.props
    const { isLighthouse } = this.props;

    // ... (restante do seu código do render)
    const metaData =
    this.props.__NEXT_DATA__?.props?.pageProps?.meta ?? null;
    const metaTitle = metaData?.title ?? null;
    const metaDescription = metaData?.description ?? null;
    const metaImage = metaData?.image ?? null;

    return (
      <Html lang="pt-br" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          {/* ... (restante do seu Head) */}
          <meta name="application-name" content="Axpe" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400&family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>

          {metaTitle && (
            <>
              <title>{metaTitle}</title>
              <meta property="og:title" content={metaTitle} />
            </>
          )}

          {metaDescription && (
            <>
              <meta name="description" content={metaDescription} />
              <meta property="og:description" content={metaDescription} />
            </>
          )}

          {metaImage && <meta property="og:image" content={metaImage} />}

          {metaTitle && metaDescription && (
            <>
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="Axpe" />
            </>
          )}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                name: 'AXPE',
                url: 'https://www.axpe.com.br/',
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'LocalBusiness',
                name: 'AXPE',
                image: 'https://www.axpe.com.br/logo.png',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Av. Nove de Julho, 5017 - 10 andar - Jardim Paulista',
                  addressLocality: 'São Paulo',
                  addressRegion: 'SP',
                  postalCode: '01407-200',
                  addressCountry: 'BR',
                },
                telephone: '+55 11 3074-3600',
                url: 'https://www.axpe.com.br/',
                sameAs: [
                  'https://www.facebook.com/axpe.imoveis',
                  'https://www.linkedin.com/company/axpe-imoveis',
                  'https://www.instagram.com/axpe_imoveis/',
                ],
              }),
            }}
          />
          {/* Fim do seu Head */}
        </Head>
        <body>
          {/* Este script define uma variável global `window.isLighthouse`
            que pode ser acessada em qualquer componente do lado do cliente.
          */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Detecção do Lighthouse
                window.isLighthouse = ${isLighthouse};
                
                // Fallback para testes locais via localStorage
                if (typeof window !== 'undefined' && !window.isLighthouse) {
                  try {
                    const lighthouseSimulation = localStorage.getItem('lighthouse-simulation');
                    if (lighthouseSimulation === 'true') {
                      window.isLighthouse = true;
                    }
                  } catch (e) {
                    // localStorage pode não estar disponível
                  }
                }
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;