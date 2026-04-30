import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// assets
import ArrowIconSVG from 'assets/icons/arrow.svg';

// styles
import { FormGroup } from 'components/FormElements/styles';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.greyLight};
  min-height: calc(100vh - 79px);
`;

export const Wrapper = styled.div`
  padding: 30px;
  max-width: 940px;
  margin: 0 auto;

  ${media.greaterThan('large')`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const Breadcrumb = styled.div`
  margin-bottom: 20px;
  font-size: 18px;

  a,
  span {
    font-family: 'Bitter';
    color: ${({ theme }) => theme.colors.greenDark};
  }

  span {
    margin: 0 10px;
  }

  strong {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
`;

export const Header = styled.header`
  h2 {
    margin-bottom: 30px;
    font: 25px/30px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('medium')`
      margin-bottom: 15px;
      font-size: 40px;
      line-height: 48px;
    `}

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const Form = styled.form`
  padding-bottom: 30px;
`;

export const FormGroupContainer = styled(FormGroup)`
  ${props => props.mq === 'desktop' && css`
    display: none;

    ${media.greaterThan('medium')`
      display: block;
    `}
  `}

  h2 {
    letter-spacing: 1px;

    ${media.greaterThan('medium')`
      margin-bottom: 25px;
    `}

    strong {
      display: block;
      margin-top: 5px;
      font-size: 16px;
      text-transform: none;
      letter-spacing: 0;
      font-weight: ${({ theme }) => theme.fontsWeight.regular};

      ${media.greaterThan('medium')`
        font-weight: ${({ theme }) => theme.fontsWeight.bold};
      `}
    }
  }
`;

export const FormList = styled.ul`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;

    ${props => props.styleType === 'praiacampo' && css`
      margin-top: 20px;
    `}
  `}
`;

export const FormListItem = styled.li`
  line-height: 0;

  ${media.greaterThan('medium')`
    width: 25%;
    /* width: auto;
    padding-right: 60px;
    input {
      display: inline-block;
      vertical-align: middle;
    }
    input ~ span {
      top: unset;
      display: inline-block;
      position: unset;
      transform: unset;
      vertical-align: middle;
    } */
  `}

  input {
    margin: 0;
  }

  label {
    min-height: 0 !important;
    cursor: pointer;

    &[for*="Radio1"] {
      background: transparent;
    }
  }

  span {
    top: 50% !important;
  }
`;

export const FormListItemStatic = styled(FormListItem)`
  ${media.greaterThan('medium')`
    width: auto;
    padding-right: 60px;
    input {
      display: inline-block;
      vertical-align: middle;
    }
    input ~ span {
      top: unset;
      display: inline-block;
      position: unset;
      transform: unset;
      vertical-align: middle;
    }
  `}
`;

export const ButtonLocals = styled.button`
  display: block;
  width: 100%;
  position: relative;
  padding: 15px 0;
  font: 18px/21px 'Raleway';
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greenDark};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;

  ${media.greaterThan('medium')`
    display: none;
  `}

  &:after {
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    position: absolute;
    top: 50%;
    right: 0;
    background: url(${ArrowIconSVG}) no-repeat;
    background-size: contain;
    transform: translateY(-50%);
  }

  strong {
    display: block;
    text-align: left;
    margin-top: 5px;
    font-size: 16px;
    text-transform: none;
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }
`;

export const LocalsModal = styled.div`
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 60px 30px 30px 80px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.greyLight};
  transition: all 300ms ease;

  ${media.greaterThan('medium')`
    display: none;
  `}

  ${props => props.active && css`
    left: 0%;
  `}
`;

export const LocalsModalClose = styled.button`
  position: fixed;
  top: 0;
  left: 100%;
  width: 50px;
  height: 100%;
  background: ${({ theme }) => theme.colors.greenDark};
  transition: all 300ms ease;

  ${props => props.active && css`
    left: 0%;
  `}

  svg {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    transform: translate(-50%, -50%) rotate(180deg);

    rect {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const LocalsModalHeader = styled.header`
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }

  p {
    font-size: 18px;
  }
`;

export const LocalsModalList = styled.div`
  label {
    margin-bottom: 16px;
  }
`;


export const FormCols = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const FormCol = styled.div`
  margin-bottom: 25px;

  ${props => props.noMarginBottom && css`
    margin-bottom: 0;
  `}

  ${media.greaterThan('medium')`
    width: 48%;

    ${props => props.layout === 'half' && css`
      width: 100%;
    `}

    ${props => props.last && css`
      margin-left: 4%;
    `}
  `}

  ${media.greaterThan('large')`
    width: 22%;

    ${props => props.layout === 'half' && css`
      width: 48%;
    `}

    ${props => props.layout === 'bedrooms' && css`
      margin-left: 4%;
    `}
  `}

  h3 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 18px;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    letter-spacing: 1px;
  }
`;

export const ButtonSubmitContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  ${media.greaterThan('medium')`
    display: flex;
    justify-content: flex-end;
  `}

  button {
    ${media.greaterThan('medium')`
      width: 180px;
    `}
  }
`;