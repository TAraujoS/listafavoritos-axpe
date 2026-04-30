import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 110;
  background: rgba(38, 50, 56, 0.8);
  cursor: pointer;
  transition: all 300ms ease;
  ${({ theme }) => theme.hide};

  ${props => props.active && ContainerActive}
`;

export const ContainerActive = css`
  ${({ theme }) => theme.show};
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.white};
  cursor: default;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  h6 {
    font: 16px/19px 'Raleway';
    color: ${({ theme }) => theme.colors.green};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  button {
    display: block;
    width: 15px;
    height: 15px;
    position: relative;
    margin: 0;
    font-size: 0;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 15px;
      background: ${({ theme }) => theme.colors.green};
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SocialsButton = styled.a`
  display: block;
  width: 70px;
  font: 12px 'Raleway';
  text-align: center;
  color: ${({ theme }) => theme.colors.greenDark};
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  transition: all 300ms ease;

  &:not(:first-child) {
    margin-left: auto;
  }

  svg {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 10px auto;
    transition: all 300ms ease;
  }

  ${media.greaterThan('medium')`
    font-size: 14px;
  `}

  ${media.greaterThan('1024px')`
    &:hover {
      color: ${({ theme }) => theme.colors.greyDark};

      svg {
        transform: scale(.95);
      }
    }
  `}
`;

export const Copy = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.greyLight};
  border-radius: 4px;
  overflow: hidden;

  input {
    display: block;
    width: 100%;
    border: 0;
    padding: 0 20px;
    font: 14px/44px 'Raleway';
    text-align: left;
    background: transparent;
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    color: ${({ theme }) => theme.colors.greenDark};
  }

  button {
    min-width: 100px;
    font: 14px/44px 'Raleway';
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 4px;
  }

  ${props => props.copied && CopyCopied}
`;

export const CopyCopied = css`
  button {
    background: ${({ theme }) => theme.colors.orangeDark};
  }
`;
