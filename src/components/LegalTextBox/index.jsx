import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
// styles
import {
  Container,
  Header,
  Wrapper,
  ButtonClose,
  ButtonCloseLink,
  Body,
  Text
} from './styles';

function LegalTextBox({ title, content, onDemand, active, onClose }) {
  const router = useRouter();

  function handleClose() {
    if(typeof onClose === 'function') {
      router.back();
      onClose();
    }
  }

  return ((onDemand && active) || !onDemand) ? (
    <Container>
      <Wrapper>
        <Header>
          <h2>{ title }</h2>
          {onDemand ? (
            <ButtonClose type="button" onClick={handleClose}>
              Fechar
            </ButtonClose>
          ) : (
            <Link href="/" passHref>
              <ButtonCloseLink>Fechar</ButtonCloseLink>
            </Link>
          )}
        </Header>
        <Body>
          <Text>
            { content }
          </Text>
        </Body>
      </Wrapper>
    </Container>
  ) : null;
}

export default LegalTextBox;