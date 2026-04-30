import React from 'react';
import SVG from 'react-inlinesvg';

// assets
import ArrowSVG from 'assets/icons/arrow.svg';

// styles
import { Container, Wrapper, ButtonBack, ButtonClose } from './styles';

function Modal({
  active,
  children,
  onClose,
  showButtonBack,
  onClickButtonBack,
  themeColor = 'default',
  dataType = '',
  className
}) {
  return (
    <Container
      active={active}
      onClick={onClose}
      themeColor={themeColor}
      className={className}
    >
      <Wrapper
        onClick={event => event.stopPropagation()}
        themeColor={themeColor}
      >
        {showButtonBack && (
          <ButtonBack
            type="button"
            onClick={onClickButtonBack}
            className="holos-modal-close"
            data-type="Cadastro"
            aria-label='Fechar'
          >
            <SVG src={ArrowSVG} uniquifyIDs={true} aria-hidden="true"/> Fechar
          </ButtonBack>
        )}
        <ButtonClose
          type="button"
          className="holos-modal-close"
          data-type={dataType}
          onClick={onClose}
          themeColor={themeColor}
        >
          Fechar
        </ButtonClose>
        {children}
      </Wrapper>
    </Container>
  );
}

export default Modal;
