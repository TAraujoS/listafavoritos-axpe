import React, { useState } from 'react';

// image
import EyeSVG from 'assets/icons/eye.svg';

// styles
import { Input, ButtonEye, SVGEye } from '../styles';

export default function Password({ useEye, type, ...props }) {
  const [ showPass, setShowPass ] = useState(false);
  return (
    <>
      {useEye && (
        <ButtonEye type="button" active={showPass} onClick={() => setShowPass(!showPass)}>
          <SVGEye src={EyeSVG} />
        </ButtonEye>
      )}
      <Input type={showPass ? 'text' : 'password'} {...props} />
    </>
  );
}
