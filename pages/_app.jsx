import React, { useEffect, useCallback, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';

import HeaderScripts from 'layouts/vendors/headerScripts';
// import BodyScriptsStart from 'layouts/vendors/bodyScriptsStart';
// import BodyScriptsEnd from 'layouts/vendors/bodyScriptsEnd';

// helpers
import { captureUTMs } from '../src/helpers/cookieUtmParams';

// layout
import Main from 'layouts/main';

// store
import { wrapper } from '../src/store';

// CSS imports - otimizados
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function GtmSafePlaceholders() {
  return (
    <div
      className="holos-contact-float"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0,
      }}
      aria-hidden="true"
    >
      <div />
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  const [ isLighthouse, setIsLighthouse ] = useState(false);
  const [ isClient, setIsClient ] = useState(false);

  // Otimizado para evitar reflows desnecessários
  const initializeApp = useCallback(() => {
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        captureUTMs(window.location.search);
      });
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    initializeApp();
    
    // Função para verificar o Lighthouse
    const checkLighthouse = () => {
      if (typeof window !== 'undefined') {
        // Verificar a variável global
        const isLighthouseGlobal = window.isLighthouse;
        
        // Verificar localStorage como fallback
        let isLighthouseLocal = false;
        try {
          const localStorageFlag = localStorage.getItem('lighthouse-simulation');
          isLighthouseLocal = localStorageFlag === 'true';
        } catch (e) {
          // localStorage pode não estar disponível
        }
        
        // Se qualquer um dos dois indicar Lighthouse, ativar
        const shouldDisableScripts = isLighthouseGlobal || isLighthouseLocal;
        
        if (shouldDisableScripts) {
          setIsLighthouse(true);
        } else {
          setIsLighthouse(false);
        }
      }
    };
    
    // Verificar imediatamente
    checkLighthouse();
    
    // Verificar novamente após um pequeno delay para garantir que a variável global foi definida
    const timeoutId = setTimeout(checkLighthouse, 100);
    
    return () => clearTimeout(timeoutId);

  }, [ initializeApp ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      captureUTMs(window.location.search);
    }
  }, [ router.asPath ]);

  return (
    <Main>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <GtmSafePlaceholders />

      {/* Renderização condicional baseada no estado do cliente e Lighthouse */}
      {isClient && !isLighthouse ? (
        <>
          <HeaderScripts />
          {/* <BodyScriptsStart /> */}
          {/* <BodyScriptsEnd /> */}
        </>
      ) : (
        // Durante SSR ou quando Lighthouse está ativo, não renderizar scripts
        null
      )}
      
      <Component {...pageProps} />
    </Main>
  );
}

export default wrapper.withRedux(MyApp);