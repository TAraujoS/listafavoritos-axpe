import React from 'react';

import { StyledCurrency } from '../styles';

export default function Currency(props) {
  return (
    <StyledCurrency
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      {...props}
    />
  );
}
