import React from 'react';
import Script from 'next/script';

function HeaderStyles() {
  const { googleClientId } = process.env.config;

  return (
    <>
      <meta name="google-signin-client_id" content={googleClientId} />
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PH2WRPFM');
        `}
      </Script>

      <Script id="hotjar-init" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1666468,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <Script
        src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
        strategy="afterInteractive"
      />
      <Script id="onesignal-init" strategy="afterInteractive">
        {`window.OneSignal = window.OneSignal || [];`}
      </Script>
      {/* <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=geometry`}></script> */}
    </>
  )
}

export default HeaderStyles;
