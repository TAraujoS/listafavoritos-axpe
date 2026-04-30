import React from 'react';
import { InputCheckbox } from './styles';

export default function Checkbox(props) {
  const { name, type, size = 'small', ...others } = props;
  return (
    <InputCheckbox
      name={name}
      type={type === 'radio' ? 'radio' : 'checkbox'}
      size={size}
      {...others}
    />
  );
}
