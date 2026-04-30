import React from 'react';

// styles
import { ArrowNext, ArrowPrev } from './styles';

export const NextArrow = ({
  type = '',
  color = 'white',
  position = '',
  backgroundColor= '',
  onClick = () => {}
}) => {
  return (
    <ArrowNext
      color={color}
      position={position}
      type={type}
      onClick={onClick}
      aria-label='Próximo'
    />
  );
};

export const PrevArrow = ({
  type = '',
  color = 'white',
  position = '',
  backgroundColor= '',
  onClick = () => {}
}) => {
  return (
    <ArrowPrev
      color={color}
      position={position}
      type={type}
      onClick={onClick}
      aria-label='Anterior'
    />
  );
};
