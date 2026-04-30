import React from 'react';
import Link from 'next/link';

// styles
import {
  Container,
  Wrapper,
  Copy,
} from './styles';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Copy>
          Todos os direitos reservados. Axpe. CRECI 19111J{' '}
          <span>
            |{' '}
            <Link href="/mapa-do-site" passHref>
              <a className="holos-footer-link" data-label="Mapa do site">Mapa do site</a>
            </Link>
          </span>{' '}
          <span>
            |{' '}
            <Link href="/politica-de-privacidade" passHref>
              <a className="holos-footer-link" data-label="Política de privacidade">Política de privacidade</a>
            </Link>
          </span>{' '}
          <span>
            |{' '}
            <Link href="/termos-de-uso" passHref>
              <a className="holos-footer-link" data-label="Termos de uso">Termos de uso</a>
            </Link>
          </span>
        </Copy>
      </Wrapper>
    </Container>
  );
}

export default Footer;
