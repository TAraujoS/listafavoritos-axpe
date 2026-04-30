import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  z-index: 101;
  background: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease;
  ${({ theme }) => theme.hide};

  ${media.greaterThan('1024px')`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(38, 50, 56, 0.8);
    overflow: visible;
  `}

  ${props => props.active && ContainerActive}
  ${props => props.themeColor === 'green' && ContainerGreen}
`;

const ContainerActive = css`
  ${({ theme }) => theme.show};
`;

const ContainerGreen = css`
  background: ${({ theme }) => theme.colors.green};
`;

export const Wrapper = styled.div`
  ${media.greaterThan('1024px')`
    position: relative;
    width: 880px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
  `}

  ${props => props.themeColor === 'green' && WrapperGreen}
`;

const WrapperGreen = css`
  ${media.greaterThan('1024px')`
    background: ${({ theme }) => theme.colors.green};
  `}
`;

export const ButtonBack = styled.button`
  position: absolute;
  top: 25px;
  left: 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font: 14px 'Raleway';
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  z-index: 2;

  svg {
    display: block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    transform: rotate(180deg);

    rect {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  ${media.greaterThan('1024px')`
    left: auto;
    right: 200px;
    color: ${({ theme }) => theme.colors.greenDark};

    svg rect {
      fill: ${({ theme }) => theme.colors.greenDark};
    }
  `}
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  font-size: 0;
  z-index: 2;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 30px;
    background: ${({ theme }) => theme.colors.white};
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  ${media.greaterThan('1024px')`
    &:before,
    &:after {
      background: ${({ theme }) => theme.colors.greenDark};
    }
  `}

  ${props => props.themeColor === 'green' && ButtonCloseGreen}
`;

const ButtonCloseGreen = css`
  ${media.greaterThan('1024px')`
    &:before,
    &:after {
      background: ${({ theme }) => theme.colors.white};
    }
  `}
`;

export const Texts = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.green};

  .slick-arrow {
    display: none !important;
  }

  .slick-slider {
    button[class*='styles__Arrow'] {
      bottom: 20px;
      left: 25px;

      &:last-of-type {
        left: 50px;
      }
    }
  }

  ${media.greaterThan('1024px')`
    width: 65%;
    border-radius: 8px 0 0 8px;

    .slick-slider {
      button[class*='styles__Arrow'] {
        bottom: -40px;
        left: 0;
        opacity: 0.4;
        transition: all 300ms ease;

        &:last-of-type {
          left: 25px;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
  `}
`;

export const Text = styled.div`
  padding: 60px 30px;

  h2 {
    width: 100%;
    margin-bottom: 20px;
    font: 30px/36px 'Bitter';
    color: ${({ theme }) => theme.colors.white};

    span {
      color: ${({ theme }) => theme.colors.orange};
    }

    strong {
      color: ${({ theme }) => theme.colors.greenLight};
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
    }
  }

  p {
    width: 100%;
    max-width: 410px;
    font: 16px/23px 'Raleway';
    color: ${({ theme }) => theme.colors.white};
  }

  ${media.greaterThan('1024px')`
    min-height: 535px;
    display: flex !important;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 60px 20px 80px;

    h2 {
      font-size: 40px;
      line-height: 48px;

      &.big {
        font-size: 58px;
        line-height: 70px;
      }
    }

    p {
      line-height: 19px;
      font-weight: ${({ theme }) => theme.fontsWeight.medium};
    }
  `}
`;

export const TextWrapper = styled.div`
  ${media.greaterThan('1024px')`
    margin: auto 0;
  `}
`;

export const Column = styled.div`
  padding: 20px 30px;

  ${media.greaterThan('1024px')`
    width: 35%;
  `}
`;

export const ColumnTitle = styled.h3`
  margin-bottom: 5px;
  font: 18px/30px 'Raleway';
  color: ${({ theme }) => theme.colors.green};

  span {
    color: ${({ theme }) => theme.colors.green};
  }

  ${media.greaterThan('1024px')`
    margin-bottom: 10px;
    font-family: 'Bitter';
    line-height: 20px;

    span {
      display: block;
    }
  `}
`;

export const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: 100vh;

  h2 {
    margin-bottom: 30px;
    font: 30px/36px 'Bitter';
    color: ${({ theme }) => theme.colors.white};

    strong {
      color: ${({ theme }) => theme.colors.greenLight};
    }
  }

  p {
    font: 18px/23px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    margin-top: 20px;
  }

  ${media.greaterThan('1024px')`
    flex-direction: row;
    padding: 0;
    height: auto;
    min-height: 480px;

    h2 {
      margin-bottom: 0;
      font-size: 40px;
      line-height: 48px;
    }

    p {
      max-width: 170px;
      font-size: 16px;
      line-height: 19px;
    }

    ${props =>
      props.size === 'big' &&
      css`
        p {
          max-width: 260px;
        }

        & > div {
          max-width: 460px;
        }
      `}
  `}
`;

export const SuccessColumn = styled.div`
  width: 100%;

  &:first-child {
    margin-top: auto;
  }

  &:last-child {
    margin-bottom: auto;

    p {
      margin-bottom: 10px;
    }
  }

  ${media.greaterThan('1024px')`
    width: auto;
    max-width: 300px;
    padding: 0 30px;

    &:first-child,
    &:last-child {
      margin: 0;
    }
  `}
`;
