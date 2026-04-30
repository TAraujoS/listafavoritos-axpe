import React from 'react';
// import Script from 'next/script';

function BodyScripts() {
  return (
    <>
      {/* <Script
        id="google-platform"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://apis.google.com/js/platform.js";
            js.async = true;
            js.defer = true;
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'google-jsapi'));
        `,
        }}
      /> */}
      {/* <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.fbAsyncInit = function() {
            FB.init({
              appId: '200759761662178',
              cookie: true,
              xfbml: true,
              version: 'v6.0'
            });

            FB.AppEvents.logPageView();
          };

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `,
        }}
      /> */}
      {/* <Script
        id="zoho-marketing"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var w=window;var p = w.location.protocol;if(p.indexOf("http") < 0){p = "http"+":";}var d = document;var f = d.getElementsByTagName('script')[0],s = d.createElement('script');s.type = 'text/javascript'; s.async = false; if (s.readyState){s.onreadystatechange = function(){if (s.readyState=="loaded"||s.readyState == "complete"){s.onreadystatechange = null;try{loadwaprops("27218d28c96aa859ea49011ad5ef59a6c","2a3c48c179e1acc2b3d2af3e628508ae6","2e7e5598790972a27af6c098dedb76fa772f384f8d12b7f6c","2df7b610b70ebb93534744ad4cd5086a4","0.0");}catch(e){}}};}else {s.onload = function(){try{loadwaprops("27218d28c96aa859ea49011ad5ef59a6c","2a3c48c179e1acc2b3d2af3e628508ae6","2e7e5598790972a27af6c098dedb76fa772f384f8d12b7f6c","2df7b610b70ebb93534744ad4cd5086a4","0.0");}catch(e){}};};s.src =p+"//marketinghub.zoho.com/hub/js/WebsiteAutomation.js";f.parentNode.insertBefore(s, f);
        `,
        }}
      /> */}
      {/* <Script
        id="zoho-salesiq"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"d7451b41949fea5af35a3975d980f7ce764b727d5cf769b6ecc8ae2fcedfb40b1a2010ab7b6727677d37b27582c0e9c4", values:{},ready:function(){$zoho.salesiq.floatbutton.visible("hide");}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
        `,
        }}
      /> */}
      {/* <Script
        id="zoho-utm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          function ZFLead() {}
          ZFLead.utmPValObj = ZFLead.utmPValObj || {};

          ZFLead.utmPNameArr = new Array(
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_term',
            'utm_content'
          );

          ZFLead.prototype.zfutm_getLeadVal = function(pName) {
            var qStr = '';
            try {
              qStr = window.top.location.search.substring(1);
            } catch (e) {
              qStr = '';
            }
            var pNameTemp = pName + '=';
            var pValue = '';
            if (typeof qStr !== 'undefined' && qStr !== null && qStr.length > 0) {
              var begin = qStr.indexOf(pNameTemp);
              if (begin != -1) {
                begin = begin + pNameTemp.length;
                end = qStr.indexOf('&', begin);
                if (end == -1) {
                  end = qStr.length;
                }
                pValue = qStr.substring(begin, end);
              }
            }
            return pValue;
          };

          ZFLead.prototype.zfutm_sC = function(cookieName) {
            var cookieVal = this.zfutm_gC(cookieName);
            if (typeof cookieVal !== 'undefined') {
              document.cookie = cookieName + '=' + cookieVal + '; path=/';
            }
          };

          ZFLead.prototype.zfutm_ini = function() {
            for (var zf_pN = 0; zf_pN < ZFLead.utmPNameArr.length; zf_pN++) {
              var zf_pV = this.zfutm_getLeadVal(ZFLead.utmPNameArr[zf_pN]);
              if (typeof zf_pV !== 'undefined' && zf_pV !== '') {
                ZFLead.utmPValObj[zf_pN] = zf_pV;
              }
            }
            for (var pkey in ZFLead.utmPValObj) {
              this.zfutm_sC(pkey);
            }
          };

          ZFLead.prototype.zfutm_gC = function(cookieName) {
            var cookieArr = document.cookie.split('; ');
            for (var i = 0; i < cookieArr.length; i++) {
              var cookieVals = cookieArr[i].split('=');
              if (cookieVals[0] === cookieName && cookieVals[1]) {
                return unescape(cookieVals[1]);
              }
            }
          };

          ZFLead.prototype.zfutm_iframeSprt = function() {
            var zf_frame = document.getElementsByTagName('iframe');
            for (var i = 0; i < zf_frame.length; ++i) {
              if (zf_frame[i].src.indexOf('formperma') > 0) {
                var zf_src = zf_frame[i].src;
                for (var prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
                  var utmPm = ZFLead.utmPNameArr[prmIdx];
                  var utmVal = this.zfutm_gC(ZFLead.utmPNameArr[prmIdx]);
                  if (typeof utmVal !== 'undefined') {
                    if (zf_src.indexOf('?') > 0) {
                      zf_src = zf_src + '&' + utmPm + '=' + utmVal; //No I18N
                    } else {
                      zf_src = zf_src + '?' + utmPm + '=' + utmVal; //No I18N
                    }
                  }
                }
                if (zf_frame[i].src.length < zf_src.length) {
                  zf_frame[i].src = zf_src;
                }
              }
            }
          };

          ZFLead.prototype.zfutm_DHtmlSprt = function() {
            var zf_formsArr = document.forms;
            for (var frmInd = 0; frmInd < zf_formsArr.length; frmInd++) {
              var zf_form_act = zf_formsArr[frmInd].action;
              if (zf_form_act && zf_form_act.indexOf('formperma') > 0) {
                for (var prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
                  var utmPm = ZFLead.utmPNameArr[prmIdx];
                  var utmVal = this.zfutm_gC(ZFLead.utmPNameArr[prmIdx]);
                  if (typeof utmVal !== 'undefined') {
                    var fieldObj = zf_formsArr[frmInd][utmPm];
                    if (fieldObj) {
                      fieldObj.value = utmVal;
                    }
                  }
                }
              }
            }
          };

          ZFLead.prototype.zfutm_jsEmbedSprt = function(id) {
            document.getElementById('zforms_iframe_id').removeAttribute('onload');
            var jsEmbdFrm = document.getElementById('zforms_iframe_id');
            var embdSrc = jsEmbdFrm.src;
            for (var prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
              var utmPm = ZFLead.utmPNameArr[prmIdx];
              var utmVal = this.zfutm_gC(ZFLead.utmPNameArr[prmIdx]);
              if (typeof utmVal !== 'undefined') {
                if (embdSrc.indexOf('?') > 0) {
                  embdSrc = embdSrc + '&' + utmPm + '=' + utmVal; //No I18N
                } else {
                  embdSrc = embdSrc + '?' + utmPm + '=' + utmVal; //No I18N
                }
              }
            }
            jsEmbdFrm.src = embdSrc;
          };

          var zfutm_zfLead = new ZFLead();

          zfutm_zfLead.zfutm_ini();

          window.onload = function() {
            zfutm_zfLead.zfutm_iframeSprt();
            zfutm_zfLead.zfutm_DHtmlSprt();
          };
        `,
        }}
      /> */}
      {/* <Script
        id="cloudfront-loader"
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/89391abb-8927-4477-85f4-0f3b30e8185c-loader.js"
      /> */}
    </>
  );
}

export default BodyScripts;
