import React from 'react';
import PropTypes from 'prop-types';

import WhatsappIconSVG from 'assets/icons/whats-white.svg';

import { Container } from './styles';

const LINKS = {
  tel: 'tel:+551130743600',
  whats: 'https://wa.me/5511932062653'
};

const NUMBERS = {
  tel: '(11) 3074-3600',
  whats: '(11) 3074-3600'
};

const ICONS = {
  tel: '',
  whats: WhatsappIconSVG
};

function Phone({ flag = 'tel', className, showIcon, ...props }) {
  return (
    <Container
      className={className}
      href={LINKS[flag]}
      {...props}
    >
      {showIcon && <img src={ICONS[flag]} alt={flag} />}
      {NUMBERS[flag]}
    </Container>
  );
}

Phone.propTypes = {
  phone: PropTypes.string
};

export default Phone;