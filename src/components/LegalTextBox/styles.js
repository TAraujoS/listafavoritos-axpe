import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 101;
  background: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease;

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(38, 50, 56, 0.8);
    overflow: visible;
  `}
`;

export const Wrapper = styled.div`
  position: relative;

  ${media.greaterThan('medium')`
    width: 100%;
    max-width: 760px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1) 10%);
  `}
`;

export const Header = styled.header`
  position: relative;
  padding: 30px;
  background: ${({ theme }) => theme.colors.green};

  ${media.greaterThan('medium')`
    padding: 20px 30px;
    border-radius: 10px;
    overflow: hidden;
  `}

  h2 {
    font: 24px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    color: ${({ theme }) => theme.colors.white};
    max-width: 240px;

    ${media.greaterThan('medium')`
      max-width: 100%;
      font-size: 36px;
    `}

    strong {
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
      color: ${({ theme }) => theme.colors.greenLight};

      ${media.greaterThan('medium')`
        font-weight: ${({ theme }) => theme.fontsWeight.extraBold};
      `}
    }
  }
`;

const ButtonCloseCSS = css`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 26px;
  height: 26px;
  font-size: 0;
  z-index: 2;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 26px;
    background: ${({ theme }) => theme.colors.white};
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const ButtonClose = styled.button`
  ${ButtonCloseCSS};
`;

export const ButtonCloseLink = styled.a`
  ${ButtonCloseCSS};
`;

export const Body = styled.div`
  padding: 30px;
`;

export const Text = styled.div`
  position: relative;
  width: 100%;
  padding-right: 30px;
  height: calc(100vh - 178px);
  overflow: hidden;
  overflow-y: auto;

  ${media.greaterThan('medium')`
    height: 40vh;
  `}

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: ${({ theme }) => theme.colors.grey};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.greyLight};
  }

  h2 {
    font: 24px/30px 'Raleway';
    margin-bottom: 20px;
  }

  p {
    font: 16px/24px 'Raleway';

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.greenDark};
    text-decoration: underline;
  }

  ul {
    font: 16px/24px 'Raleway';
    margin-bottom: 20px;
  }

  li {
    position: relative;
    padding-left: 25px;
    list-style-type: circle;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &::before {
      width: 5px;
      height: 5px;
      content: "";
      display: block;
      border-radius: 50%;
      background-color: #000;
      position: absolute;
      top: 7px;
      left: 10px;
    }
  }
`;
