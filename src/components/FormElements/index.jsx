import React from 'react';
import Area from './Area';
import Checkbox from './Checkbox';
import Email from './Email';
import Phone from './Phone';
import Select from './Select';
import Text from './Text';
import CPF from './CPF';
import CEP from './CEP';
import File from './File';
import Password from './Password';
import Currency from './Currency';

import { Label, Span, Message } from './styles';

const TYPE_FIELD = {
  area: Area,
  checkbox: Checkbox,
  checkboxLink: Checkbox,
  radio: Checkbox,
  email: Email,
  emailmask: Email,
  phone: Phone,
  select: Select,
  text: Text,
  number: Text,
  cpf: CPF,
  cep: CEP,
  file: File,
  password: Password,
  currency: Currency
};

const Field = ({
  type,
  component: Component,
  error,
  label,
  message,
  themeColor,
  ...props
}) => {
  if (type === 'file') return <Component type={type} {...props}></Component>;
  return (
    <>
      <Label
        type={type}
        htmlFor={props.id ? props.id : props.name}
        themeColor={themeColor}
        error={error}
      >
        <Component type={type} {...props}></Component>
        {!!label && (
          <Span
            size={props.size}
            onClick={
              [ 'checkbox', 'checkboxLink', 'radio' ].includes(type)
                ? props.onChange
                : function(e) {
                    e.currentTarget.parentElement.children[props.name].focus();
                  }
            }
          >
            {label}
          </Span>
        )}
      </Label>
        {!!error && <Message>{error}</Message>}
    </>
  );
};

export default function FormElements({ type = 'text', ...props }) {
  return (
    <Field
      component={TYPE_FIELD[type]}
      type={type}
      {...props}
    />
  );
}
