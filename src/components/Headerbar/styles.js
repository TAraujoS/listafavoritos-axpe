import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Button from 'components/Button';

export const Container = styled.div`
  min-height: 64px;
  background: ${({ theme }) => theme.colors.white};
  
  h1,h3 {
    font: 18px/28px 'Bitter';
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontsWeight.regular};

    &:first-letter {
      text-transform: uppercase;
    }
  }

  h4 {
    font: 14px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  ${media.greaterThan('large')`
  display: flex;
  justify-content: space-between;
    h4 {
      margin-left: 30px;
    }
  `}

  ${media.lessThan('large')`
    display: none;
  `}

  ${props =>
    (props.type === 'building' || props.type === 'modal') &&
    ContainerBuildingPage}

  ${props => props.type === 'building' && ContainerBuilding}
  ${props => props.type === 'modal' && ContainerModal}

  ${props => props.type === 'search' &&
    media.lessThan('medium')`
      display: none;
  `}
`;

export const ContainerBuildingPage = css`
  h3 {
    color: ${({ theme }) => theme.colors.green};
  }

  h4 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
`;

export const ContainerBuilding = css`
  ${media.greaterThan('large')`
    & > div {
      padding: 15px 52px;

      & > button {
        display: flex;
        align-items: center;
        width: auto;
        position: relative;
        top: 0;
        left: 0;
        margin-right: 20px;
        font: 14px 'Raleway';
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.orange};
        font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
        transform: none;

        svg {
          margin-right: 5px;
          width: 14px;
          height: 14px;

          rect {
            fill: ${({ theme }) => theme.colors.orange};
          }
        }
      }
    }

  `}
`;

export const ContainerModal = css`
  & > div {
    top: 0;
  }

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 46px;
  padding: 10px 30px 10px 60px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 10;
  transition: all 50ms ease;

  ${media.greaterThan('large')`
    display: flex;
    width: auto;
    padding: 15px 30px;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Column = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-end;
  transform: translateY(-50%);

  ${media.greaterThan('large')`
    position: relative;
    top: auto;
    right: auto;
    margin-left: auto;
    transform: none;
  `}
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 0;
  transform: translateY(-50%);

  svg {
    display: block;
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const ButtonIcon = styled.button`
  position: relative;

  svg {
    display: block;
    margin-left: 5px;

    path {
      transition: all 300ms ease;
    }
  }

  &.btn-alert {
    margin-right: 15px;

    svg {
      width: 20px;
      height: 24px;
    }

    path {
      fill: ${({ theme }) => theme.colors.green};
    }

    ${media.greaterThan('large')`
      &:hover {
        svg path {
          fill: ${({ theme }) => theme.colors.orange};
        }
      }
    `}
  }

  &.btn-share {
    svg {
      width: 22px;
      height: 22px;
    }

    ${media.greaterThan('large')`
      &:hover {
        svg path {
          stroke: ${({ theme }) => theme.colors.orange};
        }
      }
    `}
  }

  ${props => props.isLoading && css`
    opacity: 0.2;
    cursor: default;
  `}
`;

export const ButtonContact = styled(Button)`
  margin-left: 20px;

  ${media.lessThan('1169px')`
    display: none;
  `}
`;

export const ButtonAlertMessage = styled.div`
  display: block;
  position: absolute;
  top: 35px;
  right: -9px;
  width: 210px;
  padding: 15px;
  font: 12px/15px 'Raleway';
  background: ${({ theme }) => theme.colors.yellowLight};
  border-radius: 1px;
  transition: all 300ms ease;
  ${({ theme }) => theme.hide}

  ${props => props.active && ButtonAlertMessageActive}

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: 10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.yellowLight};
  }

  p {
    font-size: 12px;
  }

  strong {
    display: block;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }
`;

const ButtonAlertMessageActive = css`
  ${({ theme }) => theme.show}
`;

export const Text = styled.p`
  font: 14px/28px 'Raleway';

  ${media.lessThan('1169px')`
    display: none;
  `}

  ${media.greaterThan('large')`
    margin-left: 20px;
  `}
`;

const ButtonLikeActive = css`
  svg path {
    stroke: ${({ theme }) => theme.colors.orange};
    fill: ${({ theme }) => theme.colors.orange};
  }
`;

const ButtonLikeHover = css`
  svg path {
    stroke: ${({ theme }) => theme.colors.orange};
  }
`;

export const ButtonLike = styled.button`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font: 14px 'Raleway';
  transition: all 300ms ease;

  &:active {
    transform: scale(.9);
  }

  svg {
    display: block;
    width: 27px;
    height: 25px;
    margin-left: 5px;

    path {
      transition: all 300ms ease;
    }
  }

  ${props => props.active && ButtonLikeActive}

  ${media.lessThan('1169px')`
    font-size: 0;
  `}

  ${media.greaterThan('large')`
    margin-left: 20px;

    svg {
      width: 18px;
      height: 16px;

      g {
        stroke: ${({ theme }) => theme.colors.greenDark};
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.orange};

      ${ButtonLikeHover}
    }
  `}
`;

export const ButtonMoreInformation = styled(Button)`
  ${media.lessThan('1169px')`
    display: none;
  `}

  ${media.greaterThan('large')`
    margin-left: 20px;
  `}
`;

export const PhoneContact = styled.a`
  font: 15px 'Raleway';
  color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

  ${media.lessThan('1169px')`
    display: none;
  `}

  ${media.greaterThan('large')`
    margin-left: 10px;

    &:hover {
      opacity: 0.6;
    }
  `}
`;
