import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// assests
import CheckedIconSVG from 'assets/icons/checked.svg';
import ArrowIconSVG from 'assets/icons/arrow.svg';

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 100%;
  display: block;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.green};
  transition: all 300ms ease;
  z-index: -1;

  ${({ theme }) => theme.hide};

  ${props => props.active && ContainerActive}

  ${media.greaterThan('medium')`
    left: 0;
    background: rgba(38, 50, 56, 0.8);
  `};

  ${media.greaterThan('large')`
    left: 200px;
    width: calc(100% - 200px);
  `};
`;

export const ContainerActive = css`
  left: 0%;
  z-index: 105;

  ${media.greaterThan('medium')`
    z-index: 99;
  `};

  ${({ theme }) => theme.show};
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100vh;

  ${media.greaterThan('medium')`
    overflow: visible;
    cursor: pointer;
  `};
`;

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;

  ${media.greaterThan('medium')`
    position: absolute;
    top: 0;
    width: 420px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.green};
    transform: translateX(-100%);
    z-index: 5;
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1.000);
    cursor: default;

    ${props => props.active && css`
      transform: translateX(0%);
      transition-duration: 300ms;
    `}
  `};

  .simplebar-content-wrapper {
    max-height: 100%
  }
`;

export const FormWrapperBox = styled.div`
  width: 100%;
  position: relative;
  padding: 30px 30px 0 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${media.greaterThan('medium')`
    padding: 100px 30px 0 30px;
  `};

  ${media.greaterThan('large')`
    padding-top: 80px;
  `};
`;

export const FormClose = styled.button`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  font-size: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 15px;
    background: ${({ theme }) => theme.colors.white};
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const FormHeader = styled.header`
  position: relative;
  width: 100%;
  padding-top: 10px;

  ${media.greaterThan('medium')`
    padding-top: 0;
  `}
`;

export const FormHeaderTitle = styled.h6`
  max-width: 90%;
  margin-bottom: 20px;
  font: 22px 'Raleway';
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

  ${media.greaterThan('medium')`
    max-width: 70%;
    font-size: 16px;
  `}
`;

export const FormGroup = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;

  ${props => props.type === 'reference' && FormGroupReference}
`;

export const FormGroupReference = css`
  input {
    padding-right: 50px;
  }

  svg {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    width: 11px;
    height: 14px;
    transform: translateY(-50%);
    pointer-events: none;

    & > g {
      stroke-width: 2px;
    }
  }
`;

export const FormButtonsFilter = styled.div`
  width: 100%;
  margin: 10px 0 0 0;

  ${media.greaterThan('medium')`
    border-bottom: 0;
    margin-bottom: 10px;
  `}
`;

export const FormButtonsFilterTitle = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
  font: 16px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const FormButtonsFilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;

export const FormButtonsFilterItemRadio = styled.label`
  display: block;
  width: 100%;
  position: relative;
  margin-bottom: 5px;
  cursor: pointer;

  &:before {
    content: 'OU';
    display: none;
    position: absolute;
    top: 50%;
    left: -40px;
    width: 40px;
    text-align: center;
    font: 12px 'Raleway';
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-50%);
  }

  input {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 2;
    cursor: pointer;
    opacity: 0;

    &:checked ~ span {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.green};
    }
  }

  span {
    display: block;
    width: 100%;
    height: 40px;
    text-align: center;
    font: 14px/36px 'Raleway';
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 3px;
    transition: all 300ms ease;
  }

  ${props => props.twoColumns && css`
    width: calc(50% - 20px);

    &:last-child {
      margin-left: 40px;

      &:before {
        display: block;
      }
    }
  `}

  ${props => !props.twoColumns && css`
    margin-bottom: 15px
  `}

  ${media.greaterThan('1024px')`
    &:hover {
      span {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.green};
      }
    }
  `}
`;

export const FormButtonFilter = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 60px;
  min-height: 60px;
  font: 12px 'Raleway';

  span,
  strong {
    width: 100%;
    padding-right: 30px;
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
  }

  strong {
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 0.5px;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    transition: all 300ms ease;
  }

  span {
    margin-top: 2px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.5px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  svg {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 24px;
    min-width: 24px;
    height: 24px;
    transform: translateY(-50%);

    rect {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  ${media.greaterThan('medium')`
    display: block;
    border-bottom: 0;
    padding: 5px 0;
    margin-bottom: 10px;
    height: auto;
    min-height: 30px;
    text-align: left;

    &:last-of-type {
      margin-bottom: 0;
    }

    strong {
      display: block;
      width: 100%;
      font-size: 16px;
    }

    span {
      margin-top: 5px;

      &:before {
        display: inline-block;
        content: 'Selecionado(s):';
        margin-right: 5px;
      }
    }
  `}

  ${props => props.active && FormButtonFilterActive}
  ${props => props.filled && FormButtonFilterFilled}
`;

const FormButtonFilterActive = css`
  strong {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const FormButtonFilterFilled = css`
  min-height: 60px;

  ${media.greaterThan('medium')`
    min-height: 60px;
  `}
`;

export const FormTab = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease;

  ${media.greaterThan('medium')`
    left: 0;
    width: 335px;
    z-index: 3;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
    cursor: default;
    ${({ theme }) => theme.hide}
  `}

  ${props => props.active && FormTabActive}

  .simplebar-content-wrapper {
    max-height: 100%
  }
`;

export const FormTabWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 30px 0 80px;

  ${media.greaterThan('medium')`
    padding: 150px 30px 30px;
  `}

  ${media.greaterThan('large')`
    padding-top: 80px;
  `}
`;

export const FormTabActive = css`
  left: 0%;

  & > button:first-child {
    left: 0%;
  }

  footer[class*='FormTabFooter'] {
    right: 0;
  }

  ${media.greaterThan('medium')`
    left: 420px;
    ${({ theme }) => theme.show}
  `}
`;

export const FormTabButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 100%;
  width: 50px;
  height: 100%;
  font-size: 0;
  background: ${({ theme }) => theme.colors.green};
  transition: all 300ms ease;
  z-index: 2;

  ${media.greaterThan('medium')`
    display: none;
  `}

  svg {
    display: block;
    width: 24px;
    height: 24px;
    transform: rotate(180deg);

    rect {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const FormTabClose = styled.button`
  display: none;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
  font-size: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 30px;
    background: ${({ theme }) => theme.colors.green};
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  ${media.greaterThan('medium')`
    display: block;
    top: 90px;
  `};

  ${media.greaterThan('large')`
    top: 30px;
  `};
`;

export const FormTabTitle = styled.h3`
  margin-bottom: 30px;
  font: 18px 'Raleway';
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};

  ${media.greaterThan('medium')`
    font-size: 16px;
  `}
`;

export const FormTabContent = styled.div`
  ${media.lessThan('medium')`
    padding: 0 10px;
    ${props => props.hasFooter && css`
      padding-bottom: 100px;
    `}
  `}

  &:not(:last-of-type) {
    padding-bottom: 50px;
  }

  ul {
    ul {
      margin-bottom: 25px;
    }
  }

  li {
    margin-bottom: 10px;
  }
`;

export const FormTabFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: -100%;
  width: calc(100% - 50px);
  padding: 50px 20px 20px 20px;
  z-index: 2;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1) 30%);
  transition: all 300ms ease;

  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export const FormTabListItemTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font: 18px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    margin-left: auto;
    background: url(${ArrowIconSVG}) no-repeat;
    background-size: contain;
    transform: rotate(90deg);
    transition: all 300ms ease;
  }

  ${props => props.active && css`
    &:after {
      transform: rotate(0deg);
    }
  `}

  ${media.greaterThan('medium')`
    font-size: 13px;
  `}
`;

export const FormTabListItemButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding-right: 30px;
  text-align: left;
  font: 18px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  transition: all 300ms ease;

  &.location-button {
    margin-bottom: 30px;
  }

  ${props => props.format && css`
    .icon {
      display: block;
      border-radius: 60px;
      padding: 14px 0;
      margin: 0 auto 10px;
      background-color: white;
      width: 60px;
      height: 60px;

      img {
        height: 32px;
        width: 75%;
        margin: 0 auto;
      }

      svg {
        height: 32px;
        width: 75%;
        margin: 0 auto;

        &:hover {
          filter: invert(51%) sepia(65%) saturate(4688%) hue-rotate(9deg) brightness(99%) contrast(105%);
        }
      }
    }

    .label {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      white-space: nowrap;
    }

    &:before {
      display: none !important;
    }

    font: 14px 'Raleway';
    text-align: center;
    padding: 0px;
    color: white;

  `}

  ${props => props.active && FormTabListItemButtonActive}
  ${props => props.active && css`font-weight: 700;`}

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 22px;
    height: 22px;
    background: url(${CheckedIconSVG}) no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    transition: all 300ms ease;
    ${({ theme }) => theme.hide};
  }

  ${media.greaterThan('medium')`
    font-size: 13px;
  `}

  ${media.greaterThan('1024px')`
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  `};
`;

export const FormTabListItemButtonActive = css`
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.orange};
  svg {
    filter: invert(51%) sepia(65%) saturate(4688%) hue-rotate(9deg) brightness(99%) contrast(105%);
  }

  &:before {
    ${({ theme }) => theme.show};
  }
`;

export const FormTabSlider = styled.div`
  width: 100%;
  margin: 20px 0;

  & > div {
    touch-action: none;
  }
`;

export const FormTabListContainer = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const FormTabListItemContainer = styled.li`
  flex: 1;
  text-align: center;
  opacity: 0.5;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }

  ${props => props.active && css`
    opacity: 1;

    img {
      filter: invert(51%) sepia(65%) saturate(4688%) hue-rotate(9deg) brightness(99%) contrast(105%);
    }
  `}
`;

export const FormTabSliderTitle = styled.h4`
  font: 14px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 10px;
`;

export const FormFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;

  ${media.greaterThan('medium')`
    padding-top: 30px;
  `};
`;

export const FormButtonSubmit = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
  font: 16px 'Raleway';
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  text-align: center;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.orange};
  padding: 14px 16px;
  
  &[disabled] {
    opacity: 0.2;
    cursor: default;
  }
`;

export const FormAlert = styled.div`
  position: relative;
`;

export const FormAlertTooltip = styled.div`
  display: block;
  position: absolute;
  top: -80px;
  left: -8px;
  width: 210px;
  padding: 15px;
  font: 12px/15px 'Raleway';
  background: ${({ theme }) => theme.colors.yellowLight};
  border-radius: 1px;
  transition: all 300ms ease;
  ${({ theme }) => theme.hide}

  ${props => props.active && FormAlertTooltipActive}

  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.yellowLight};
  }

  p {
    font-size: 12px;
  }

  strong {
    display: block;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }
`;

export const FormAlertTooltipActive = css`
  top: -90px;
  ${({ theme }) => theme.show}
`;

export const FormButtonAlert = styled.button`
  display: flex;
  align-items: center;
  font: 15px 'Raleway';
  text-decoration: underline;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease;

  svg {
    display: block;
    margin-right: 10px;
    width: 24px;
    min-width: 24px;
    height: 23px;

    path {
      fill: ${({ theme }) => theme.colors.white};
      transition: all 300ms ease;
    }
  }

  &[disabled] {
    opacity: 0.2;
    cursor: default;
  }

  ${props => props.isLoading && css`
    opacity: 0.2;
    cursor: default;
  `}

  ${media.greaterThan('medium')`
    font-size: 12px;

    svg {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
  `};

  ${media.greaterThan('1024px')`
    &:not([disabled]):hover {
      color: ${({ theme }) => theme.colors.orange};

      svg path {
        fill: ${({ theme }) => theme.colors.orange};
      }
    }
  `}

  ${props => props.active && FormButtonAlertActive}
`;

export const FormButtonAlertActive = css`
  svg path {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;

export const FormButtonClear = styled.button`
  display: block;
  margin-left: auto;
  font: 14px 'Raleway';
  text-decoration: underline;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease;

  &[disabled] {
    opacity: 0.2;
    cursor: default;
  }

  ${media.greaterThan('medium')`
    font-size: 12px;
  `};

  ${media.greaterThan('1024px')`
    &:not([disabled]):hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  `}
`;
