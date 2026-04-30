import React from 'react';
import SVG from 'react-inlinesvg';
import { InputSelect } from '../styles';

import ArrowIconSVG from 'assets/icons/arrow.svg';

export default function Select({ items = [], ...props }) {
  return (
    <>
      <InputSelect {...props}>
        {items.map(i => (
          <option key={`option-${i.value}`} value={i.value}>
            {i.label}
          </option>
        ))}
      </InputSelect>
      <SVG src={ArrowIconSVG} uniquifyIDs style={{ pointerEvents: 'none' }} />
    </>
  );
}
