import React, { useRef, useEffect } from 'react';
import { useDispatch, } from 'react-redux';

// actions
import { setMain } from 'store/modules/main/actions';

// styles
import { Background, FormContainer, Iframe, NewsletterContainer, NewsletterTextDesktop } from './styles';

function NewsletterFooter() {
  const dispatch = useDispatch();
  const refIframe = useRef(null);

  useEffect(() => {
    if (refIframe.current) {
      refIframe.current.onload = function() {
        const doc = this.contentDocument || this.contentWindow.document;
        const styleEl = doc.createElement('style');
        styleEl.innerHTML = `
          .form {
            display: block;
          }
          .form .form-group,
          .form .form-submit {
            max-width: 70%;
            margin-right: 0;
            margin-bottom: 10px;
          }
          .form .form-submit {
            display: block;
            text-align: center;
          }
          .form-submit input[type="submit"] {
            height: 35px;
            margin-bottom: 10px;
            text-transform: none;
            line-height: normal;
          }

          @media (min-width: 530px) {
            .form {
              display: flex;
              flex-wrap: wrap;
            }

            .form .form-group:nth-of-type(1),
            .form .form-group:nth-of-type(2) {
              flex: 1 1 50%;
              max-width: 40%;
              box-sizing: border-box;
              margin-right: 6px;
            }

            .form .form-group:nth-of-type(3),
            .form .form-submit {
              flex: 1 1 50%;
              max-width: 40%;
              box-sizing: border-box;
              margin-right: 6px;
            }
          }
        `;

        doc.head.appendChild(styleEl);
        const $success = doc.querySelector('.success-detect');

        if ($success) {
          dispatch(
            setMain({
              modalNewsletterSuccess: true
            })
          );
          
          refIframe.current.setAttribute('src', '/forms/newsletter/index.html');

          dispatch(
            setMain({
              modalNewsletter: false
            })
          );
        }
      };
    }
  }, []);

  return (
    <NewsletterContainer id="newsletter-footer-home">
      <Background />
      <NewsletterTextDesktop>
        <h4>Newsletter da Axpe</h4>
        <p>Aumente as chances de encontrar o imóvel que é sua alma gêmea.</p>

      <FormContainer>
        <Iframe
          ref={refIframe}
          src={`${process.env.config.siteUrl}/forms/newsletter/index.html?redirectUrl=${process.env.config.siteUrl}/forms/newsletter/sucesso.html`}
          border="none"
          title="Newsletter"
        />
      </FormContainer>
      </NewsletterTextDesktop>
    </NewsletterContainer>
  )
}


export default NewsletterFooter