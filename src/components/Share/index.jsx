import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

// assets
import WhatsappRoundedIconSVG from 'assets/icons/whatsapp-rounded.svg';
import FacebookRoundedIconSVG from 'assets/icons/facebook-rounded.svg';
import TwitterRoundedIconSVG from 'assets/icons/twitter-rounded.svg';
import LinkedinRoundedIconSVG from 'assets/icons/linkedin-rounded.svg';

// styles
import {
  Container,
  Wrapper,
  Header,
  Socials,
  SocialsButton,
  Copy
} from './styles';

function Share({ active, path, title, onClose }) {
  const [ url, setUrl ] = useState('');
  const [ copied, setCopied ] = useState(false);
  const inputRef = useRef(null);

  function handleClose() {
    onClose();
  }

  useEffect(() => {
    if (!active) return;

    const buildUrl = () => {
      const base =
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env?.config?.siteUrl ||
        (typeof window !== 'undefined' ? window.location.origin : '');

      const cleanPath = path?.startsWith('/') ? path : `/${path ?? ''}`;

      try {
        return new URL(cleanPath, base).toString();
      } catch {
        return `${base}${cleanPath}`;
      }
    };

    setUrl(buildUrl());
  }, [ active, path ]);

  async function handleCopy() {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      // execCommand é legado, usado só como fallback
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  }

  const encUrl = encodeURIComponent(url || '');
  const encTitle = encodeURIComponent(title || '');

  return (
    <Container active={active} onClick={handleClose}>
      <Wrapper onClick={event => event.stopPropagation()}>
        <Header>
          <h6>Compartilhar</h6>
          <button type="button" onClick={handleClose}>
            Fechar
          </button>
        </Header>

        <Socials>
          <SocialsButton
            href={`https://api.whatsapp.com/send?text=${encUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="holos-account-favorite-share-network"
            data-label="Whatsapp"
          >
            <SVG src={WhatsappRoundedIconSVG} uniquifyIDs aria-hidden="true" /> Whatsapp
          </SocialsButton>

          <SocialsButton
            href={`https://www.facebook.com/sharer.php?u=${encUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="holos-account-favorite-share-network"
            data-label="Facebook"
          >
            <SVG src={FacebookRoundedIconSVG} uniquifyIDs aria-hidden="true" /> Facebook
          </SocialsButton>

          <SocialsButton
            href={`https://twitter.com/share?text=${encTitle}&url=${encUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="holos-account-favorite-share-network"
            data-label="Twitter"
          >
            <SVG src={TwitterRoundedIconSVG} uniquifyIDs aria-hidden="true" /> Twitter
          </SocialsButton>

          <SocialsButton
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encUrl}&title=${encTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="holos-account-favorite-share-network"
            data-label="Linkedin"
          >
            <SVG src={LinkedinRoundedIconSVG} uniquifyIDs aria-hidden="true" /> Linkedin
          </SocialsButton>
        </Socials>

        <Copy copied={copied}>
          {/* readonly para permitir seleção no fallback sem edição acidental */}
          {url && (
            <input
              ref={inputRef}
              type="text"
              id="url"
              name="url"
              defaultValue={url}
              readOnly
            />
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="holos-account-favorite-share-network"
            data-label="Copiar Link"
            aria-live="polite"
          >
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
        </Copy>
      </Wrapper>
    </Container>
  );
}


Share.propTypes = {
  active: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Share;
