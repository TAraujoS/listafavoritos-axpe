import styled, { css, keyframes } from 'styled-components';
import Button from 'components/Button';
import media from 'styled-media-query';

const animateBalloonLeft = keyframes`
  0% { transform: scale(1); }
  2.5% { transform: scale(1.1); }
  12.5% { transform: scale(1.1); }
  15% { transform: scale(1); }
`;

const animateBalloonRight = keyframes`
  0% { transform: scale(1); }
  2.5% { transform: scale(1.1); }
  47.5% { transform: scale(1.1); }
  50% { transform: scale(1); }
`;

const animateBalloonDot = keyframes`
  0% { transform: translateY(0px); }
  3.5% { transform: translateY(-3px); }
  7% { transform: translateY(0.25px); }
  9.5% { transform: translateY(-0.75px); }
  11% { transform: translateY(0px); }

  18% { transform: translateY(0px); }
  21.5% { transform: translateY(-3px); }
  25% { transform: translateY(0.25px); }
  27.5% { transform: translateY(-0.75px); }
  29% { transform: translateY(0px); }
`;

export const Form = styled.form`
  max-width: 888px;
  margin: auto;

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grey2};
    border-radius: 4px;
    padding: 11px 20px;
    margin-bottom: 16px;
    ::placeholder {
      font-family: 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.regular};
      font-size: 16px;
      letter-spacing: 0px;
      vertical-align: middle;
      color: ${({ theme }) => theme.colors.grey2};
    }
  }

  label {
    background-color: transparent;
  }

  label[type='area'] {
    overflow: visible;
    height: 140px;
  }

  textarea {
    border: 1px solid ${({ theme }) => theme.colors.grey2};
    width: 100%;
    border-radius: 4px;
    resize: none;
    padding: 20px;
    height: 130px;
    ::placeholder {
      font-family: 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.regular};
      font-size: 16px;
      letter-spacing: 0px;
      vertical-align: middle;
      color: ${({ theme }) => theme.colors.grey2};
    }
  }

  .contact-whatsapp-button {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    border-radius: 4px;
    padding: 14px 0;
    margin-bottom: 16px;
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.orange};
  }

  .contact-whatsapp-button-green {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.green2};
    border-radius: 4px;
    padding: 14px 0;
    margin-top: 16px;
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    background-color: ${({ theme }) => theme.colors.green2};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FormGroupBasics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;
  justify-content: space-between;
`;

export const FormGroupName = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  max-width: 600px;
  gap: 10px;
  min-height: 45px; 

  > * {
    flex: 1;
  }
`;

export const FormGroupLang = styled(FormGroupBasics)`
  ${media.greaterThan('medium')`
    label {
      max-width: 282px;
    }
  `}
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  font-size: 20px;

  ${media.greaterThan('medium')`
    width: 100%;
  `}
`;

export const ButtonQuickCall = styled(Button)`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  font-size: 20px;
  margin-top: 16px;
  background: ${({ theme }) => theme.colors.green};

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export const ButtonStyle = css`
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 25px;
  width: 261px;
  height: 40px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 8px;
  right: 50%;
  z-index: 10;
  transform: translateX(50%);

  span {
    display: none;
  }

  div {
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin-left: 20px;
    color: white;

    span {
      font-size: 13px;
    }
  }

  ${media.greaterThan('large')`
    right: 25px;
    bottom: 20px;
    width: 256px;
    transform: unset;
    transition: all 300ms ease;

    &:hover {
      transform: scale(1.05);
      transition-duration: 200ms;
    }

    div span {
      display: block;
    }
  `}

  svg {
    display: block;
    width: 22px;
    height: 22px;

    .hollow-bg {
      fill: ${({ theme }) => theme.colors.orange};
    }

    .left-balloon {
      transform-origin: bottom left;
      animation: ${animateBalloonLeft} 8s 6.25s;
      animation-iteration-count: infinite;
    }

    .right-balloon {
      transform-origin: center;
      animation: ${animateBalloonRight} 8s 0s;
      animation-iteration-count: infinite;
    }

    .chat-dots {
      .chat-dot {
        transform-origin: center;
        animation-name: ${animateBalloonDot};
        animation-duration: 8s;
        animation-iteration-count: infinite;

        &:first-child {
          animation-delay: 1s;
        }

        &:nth-child(2) {
          animation-delay: 1.0625s;
        }

        &:nth-child(3) {
          animation-delay: 1.125s;
        }
      }
    }
  }
`;

export const LinkFloat = styled.a`
  ${ButtonStyle}
`;

export const ButtonFloat = styled.button`
  ${ButtonStyle}
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.greyLight};
  z-index: 105;

  ${media.greaterThan('medium')`
    overflow: hidden;
    background: rgba(38, 50, 56, 0.8);
    cursor: pointer;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  ${media.greaterThan('medium')`
    ${({ isHome, theme }) =>
      isHome
        ? css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 440px;
            background: ${theme.colors.white};
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.15);
            height: auto;
            max-height: 630px;
            overflow-y: auto;
          `
        : css`
            position: absolute;
            top: 0;
            right: 0;
            overflow: hidden;
            overflow-y: auto;
            width: 343px;
            height: 100vh;
            background: ${theme.colors.white};
            cursor: default;
          `}
  `}
`;

export const Header = styled.header`
  position: relative;
  padding: 38px 69px 38px 35px;
  background: ${({ theme }) => theme.colors.greenDark};

  ${media.greaterThan('medium')`
    padding: 20px;
  `}

  h3 {
    width: 75%;
    font: 22px/100% 'Bitter';
    color: ${({ theme }) => theme.colors.white};

    strong {
      font-weight: ${({ theme }) => theme.fontsWeight.regular};
      color: ${({ theme }) => theme.colors.greenLight};
    }
  }

  ${(props) =>
    props.isBuilding &&
    css`
      background: ${({ theme }) => theme.colors.white};

      h3 {
        max-width: 210px;
        font-size: 14px;
        line-height: 21px;
        color: ${({ theme }) => theme.colors.greenDark};
      }
    `}
`;

export const ButtonClose = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  right: 30px;
  width: 24px;
  height: 24px;
  font-size: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 100%;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.white};

    ${(props) =>
      props.isBuilding &&
      css`
        background: ${({ theme }) => theme.colors.greenDark};
      `}
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const IframeContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

export const Iframe = styled.iframe`
  display: block;
  width: 100%;
  height: 100vh;
`;

export const Column = styled.div`
  padding: 20px;

  & > p {
    margin-bottom: 16px;
    font: 14px/18px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

    ${media.greaterThan('large')`
      margin-bottom: 16px;
    `}
  }
`;

export const List = styled.ul`
  display: block;

  li {
    &:not(:last-child) {
      margin-bottom: 30px;

      ${media.greaterThan('large')`
        margin-bottom: 10px;
      `}
    }
  }
`;

const ListButtonStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90px;
    height: 90px;
    background: ${({ theme }) => theme.colors.greyLight};

    ${media.greaterThan('large')`
      height: 70px;
    `}
  }

  svg {
    display: block;
    width: 30px;
    height: 30px;

    path,
    circle {
      fill: ${({ theme }) => theme.colors.orange};
    }
  }

  span {
    padding-left: 3px;
    font: 14px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    color: ${({ theme }) => theme.colors.orange};

    &.big {
      font-size: 16px;
    }
  }

  &.highlight {
    span {
      font-size: 20px;
      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }

    .no-fill {
      path,
      circle {
        fill: none;
      }
    }
  }

  strong {
    font-size: 20px;
    line-height: 24px;
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  ${media.greaterThan('large')`
    &:hover {
      background: ${({ theme }) => theme.colors.greyLight};
    }
  `}
`;

export const ListLink = styled.a`
  ${ListButtonStyle}
`;

export const ListButton = styled.button`
  ${ListButtonStyle}
`;
