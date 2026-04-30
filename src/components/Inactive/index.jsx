import React from 'react';
import SVG from 'react-inlinesvg';

// styles
import { Container } from './styles';

// images
import EmojiIconSVG from 'assets/icons/emoji.svg';

export default function Inactive({ type, className }) {
  return (
    <Container type={type} className={className}>
      <SVG src={EmojiIconSVG} uniquifyIDs={true} />
      <p>
        <strong>Ops!</strong>
        <br />
        Esse imóvel não está mais disponível
      </p>
    </Container>
  );
}
