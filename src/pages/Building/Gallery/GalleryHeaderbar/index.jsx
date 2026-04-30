import React from 'react';

// styles
import { Container, ButtonClose, Header } from './styles';

function GalleryHeaderbar({
  close = () => {},
  children,
  className,
  category,
  local,
  planta
}) {
  return (
    <Container className={className}>
      <Header type="modal" title={category} subtitle={local} />
      <ButtonClose
        planta={planta}
        onClick={close}
      >
        <span>Fechar</span>
        <i></i>
      </ButtonClose>

      {children}
    </Container>
  );
}

export default GalleryHeaderbar;