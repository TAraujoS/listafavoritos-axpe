import React from 'react';
import { BaseMask } from '../styles';

export default function CPF(props) {
  return (
    <BaseMask
      mask="999.999.999-99"
      maskChar={null}
      {...props}
    />
  );
}
