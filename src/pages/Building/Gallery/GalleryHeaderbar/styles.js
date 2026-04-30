import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Headerbar from 'components/Headerbar';

export const Header = styled(Headerbar)`
  ${media.greaterThan('medium')`
    display: none;
  `}

  ${css`
    @media (orientation: landscape) and (max-width: 767px) {
      display: none;
    }
  `}
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 67px);
  z-index: 110;
  overflow: hidden;
  height: 100vh;
`;

export const ButtonClose = styled.button`
  position: fixed;
  top: 23px;
  right: 30px;
  z-index: 10;

  span {
    display: none;
  }

  i {
    display: block;
    position: relative;
    width: 15px;
    height: 15px;

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

      ${css`
        @media (orientation: landscape) and (max-width: 767px) {
          background: ${({ theme }) => theme.colors.white};
        }
      `}
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    background: none;
    width: auto;

    span {
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      display: block;
    }

    i {
      &:before,
      &:after {
        background: ${({ theme }) => theme.colors.white};
      }
    }

    ${props => props.planta && css`
      top: 5px;
      right: 15px;
      margin: 30px 0 20px auto;

      span {
        display: none;
      }

      i {
        width: 35px;
        height: 35px;

        &:before,
        &:after {
          width: 3px;
          height: 35px;
        }
      }
    `}

    ${props => !props.planta && css`
      top: 5%;
      right: 10%;
      margin: 0;
      font: 14px 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
      transform: translateY(-50%);

      i {
        margin-left: 5px;

        &:before,
        &:after {
          width: 2px;
        }
      }
    `}
  `}

  ${media.greaterThan('1130px')`
    ${props => props.planta && css`
      right: auto;
      left: 50%;
      transform: translateX(515px);
    `}
  `}
`;
