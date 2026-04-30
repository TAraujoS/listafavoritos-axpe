import React, { useRef } from 'react';
import { Input, ButtonFile } from '../styles';

export default function File(props) {
  const inputFile = useRef();

  return (
    <>
      <Input type="file" ref={inputFile} accept="image/*" {...props} />
      <ButtonFile
        type="button"
        onClick={() => inputFile.current.click()}
        className="holos-register-realty-select-photos"
      >
        Selecionar fotos
      </ButtonFile>
    </>
  );
}
