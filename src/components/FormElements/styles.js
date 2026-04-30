import styled, { css } from 'styled-components';
import media from 'styled-media-query';
// import MaskedInput from 'react-input-mask';
import SVG from 'react-inlinesvg';

// components
import Button from 'components/Button';
import ReactInputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';

export const Label = styled.label`
  display: block;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: 100%;
  transition: all 300ms ease;
  cursor: pointer;

  input ~ span {
    position: absolute;
    top: 50%;
    margin-top: 0;
    transform: translateY(-50%);
    transition: top 0.2s ease;
  }

  ${(props) =>
    props.children[1] &&
    css`
      input::placeholder {
        opacity: 0;
      }
    `}

  ${(props) =>
    props.type === 'select' &&
    props.children[0].props.placeholder &&
    css`
      select {
        padding-top: 10px;
      }

      span {
        top: 10%;
        font-size: 10px;
      }
    `}


  ${(props) =>
    props.type === 'area' &&
    css`
      height: 100px;
    `}


  ${(props) =>
    [ 'checkboxLink', 'checkbox' ].includes(props.type) &&
    css`
      padding-left: 0;
      background: none;

      span {
        position: initial;

        a,
        button {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.orange};
        }
      }

      input {
        cursor: pointer;
      }
    `}


  ${(props) =>
    props.type === 'radio' &&
    css`
      input {
        cursor: pointer;
      }
    `}


  ${(props) =>
    props.type === 'checkboxLink' &&
    css`
      span {
        padding-left: 11px;
        max-width: 230px;
        line-height: 14px;

        ${media.greaterThan('medium')`width: calc(100% - 47px);`}
      }

      input {
        width: 27px;
        height: 27px;
      }
    `}

  ${(props) =>
    props.themeColor === 'dark' &&
    css`
      background: ${({ theme }) => theme.colors.grey};

      input {
        background: transparent;
      }
    `}

  ${(props) =>
    props.error &&
    props.type !== 'checkbox' &&
    css`
      background: ${({ theme }) => theme.colors.white} !important;
    `}
  
  ${(props) =>
    props.error &&
    props.type === 'checkbox' &&
    css`
      input {
        border-color: ${({ theme }) => theme.colors.orange} !important;
      }
      span {
        color: ${({ theme }) => theme.colors.orange} !important;
      }
    `}
`;

export const Span = styled.span`
  font: 14px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.green};
  padding-left: 12px;
  ${({ size }) =>
    size === 'big' &&
    `
    width: calc(100% - 5px);
    margin-left: 5px;
  `}
`;

export const Message = styled.p`
  font: 12px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  color: ${({ theme }) => theme.colors.error};
  margin-top: -12px;
  margin-bottom: 10px;
`;

const BaseInput = css`
  position: absolute;
  top: 0;
  min-height: 25px;
  height: 100%;
  width: 100%;
  padding: 0 12px;
  border: none;
  color: ${({ theme }) => theme.colors.green};
  font: 14px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  background: none;
  cursor: text;
  -webkit-appearance: none;

  &:not(select) {
    padding: 10px 12px 0;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:not(:placeholder-shown) + span,
  &:not(select):focus ~ span {
    top: 25%;
    font-size: 10px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.greyDark2};
    font: 14px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
  }

  &:focus {
    outline: 0;

    &::placeholder {
      opacity: 1;
    }
  }
`;

export const FormGroupYesNo = styled.div`
  ${media.greaterThan('medium')`
    max-width: 175px;
    display: flex;
    align-items: center;

    label {
      width: auto;
      margin-bottom: 0;
      width: 90px;
    }
  `}
`;

export const FormGroup = styled.div`
  width: 100%;

  label {
    margin-bottom: 16px;
    min-height: 45px;
  }

  h2 {
    font: 16px/21px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    text-transform: uppercase;
    width: 100%;
    margin: 30px 0 17px 0;

    ${media.greaterThan('medium')`
      font-size: 18px;
    `}
  }
`;

export const BaseMask = styled(ReactInputMask)`
  ${BaseInput}
`;

export const StyledCurrency = styled(NumericFormat)`
  ${BaseInput}
`;

export const Input = styled.input`
  ${BaseInput}

  &[type='file'] {
    display: none;
  }
`;

export const InputSelect = styled.select`
  ${BaseInput}

  height: 45px;
  top: 0;
  width: 100%;
  appearance: none;
  z-index: 2;
  cursor: pointer;

  & + svg {
    transform: rotate(90deg);
    margin-left: calc(100% - 31px);
    position: absolute;
    margin-top: 12px;
    width: 16px;
  }
`;

export const InputTextArea = styled.textarea`
  ${BaseInput}

  height: 90px;
  top: 8px;
`;

export const ButtonFile = styled(Button)`
  width: 100%;

  ${media.greaterThan('medium')`
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
    background: none;
    width: 145px;
    text-transform: initial;
    padding: 0;
  `}
`;

export const ButtonEye = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 23px;
  height: 15px;
  z-index: 9;

  ${(props) =>
    props.active &&
    css`
      svg path {
        fill: ${({ theme }) => theme.colors.orange};
      }
    `}
`;

export const SVGEye = styled(SVG)`
  path {
    transition: all 300ms ease;
  }
`;

export const FormFeedback = styled.p`
  margin-top: 10px;
  font: 14px 'Raleway';
  color: ${({ theme }) => theme.colors.orange};

  ${(props) =>
    props.themeColor &&
    css`
      color: ${({ theme }) => theme.colors[props.themeColor]};
    `}
`;
