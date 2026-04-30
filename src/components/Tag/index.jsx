import React from 'react';
import PropTypes from 'prop-types';

import IStar from 'assets/icons/star-blue.svg';
import ICheck from 'assets/icons/check.svg';
import ISofa from 'assets/icons/sofa.svg';

const ICONS = {
  star: IStar,
  check: ICheck,
  sofa: ISofa
};

import { Container } from './styles';

export default function Tag({ color, icon, label }) {
  return (
    <Container color={color} icon={icon}>
      {icon && <img src={ICONS[icon]} alt={label} />}
      {label}
    </Container>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([ 'star', 'check', 'sofa' ])
};
