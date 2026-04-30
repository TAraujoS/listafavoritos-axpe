import React from 'react';
import { BaseMask } from '../styles';

export default function Phone(props) {
  return (
    <BaseMask
      mask="(99) 99999-9999"
      maskChar={null}
      {...props}
    />
  );
}
