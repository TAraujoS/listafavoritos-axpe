import styled, { createGlobalStyle, css } from 'styled-components';
import media from 'styled-media-query';

import AxpeLogoSVG from 'assets/axpe-logo.svg';
import AxpeFullLogoSVG from 'assets/axpe-full-logo.svg';
import ChristiesLogoSVG from 'assets/christies-logo.svg';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight2};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;

  h1 {
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.light};
  }

  div[data-simplebar] {
    width: 100%;
  }

  ${media.lessThan('large')`
    transition: all 50ms ease;

    div[data-simplebar] {
      height: 70px;
    }

    .simplebar-height-auto-observer-wrapper,
    .simplebar-placeholder,
    .simplebar-track {
      display: none !important;
    }

    .simplebar-offset {
      position: relative;
      width: 100%;
    }

    .simplebar-mask,
    .simplebar-content-wrapper {
      overflow: visible !important;
    }
  `}

  .favoritos-menu-item .favorite-fill-icon,
  .favoritos-menu-item:hover .favorite-outline-icon {
    display: none;
  }

  .favoritos-menu-item:hover .favorite-fill-icon {
    display: flex;
  }

  ${media.greaterThan('large')`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 0;
  `}

  ${css`
    @media (min-width: 768px) and (max-height: 580px) {
      display: block;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 30px;

  ${media.lessThan('large')`
    height: 70px;
  `}

  ${media.greaterThan('large')`
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
    height: auto;
    padding: 10vh 30px 0;
  `}

  ${css`
    @media (min-width: 768px) and (max-height: 580px) {
      padding: 30px;
    }
  `}
`;

export const AxpeLogo = styled.div`
  display: block;
  width: 145px;
  margin-right: 20px;

  ${media.greaterThan('large')`
    width: 134px;
    margin: 0 0 40px 0;
  `}

  a {
    height: 70px;
    background: url(${AxpeFullLogoSVG}) no-repeat center;
    background-size: 130px 45px;

    ${media.greaterThan('large')`
      height: 53px;
      background-image: url(${AxpeFullLogoSVG});
      background-size: contain;
    `}
  }
`;

export const ChristiesLogo = styled.div`
  display: block;
  width: 108px;

  ${media.greaterThan('large')`
    width: 97px;
    margin: 0 auto 35px auto;
  `}

  a {
    background: url(${ChristiesLogoSVG}) no-repeat;
    background-size: contain;
  }
`;

export const Axpe20Years = styled.div`
  display: none;
  width: 108px;

  ${media.greaterThan('large')`
    display: block;
    width: 70px;
    margin: 0 auto 35px auto;
  `}

  a {
    height: 66px;
    margin: 0 auto;
    background: url(${AxpeLogoSVG}) no-repeat;
    background-size: contain;
  }
`;

export const LogoLink = styled.a`
  display: block;
  width: 100%;
  height: 22px;
  overflow: hidden;
  text-indent: -9999em;
  background-size: contain;
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: 145px;
  height: 34px;
  margin: 0 0 0 auto;
  margin-left: auto;
  font: 12px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ theme }) => theme.colors.green};
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  gap: 6px;
  
  ${media.greaterThan('large')`
    display: none;
  `}

  img {
    width: 18px;
    height: 18px;
    margin-bottom: 4px
  }
`;

export const ButtonToggle = styled.button`
  display: block;
  position: relative;
  width: 20px;
  height: 19px;
  margin: 0 0 0 20px;

  ${media.greaterThan('large')`
    display: none;
  `}

  i {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.green};
    transition: all 300ms ease;

    &:nth-child(2) {
      top: 8px;
    }

    &:nth-child(3) {
      top: 16px;
    }

    ${(props) =>
      props.navToggle &&
      css`
        &:nth-child(1) {
          top: 8px;
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          width: 0%;
        }

        &:nth-child(3) {
          top: 8px;
          transform: rotate(-45deg);
        }
      `}
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 50px 30px 50px;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};

  ${(props) => (props.navToggle ? `display: flex;` : `display: none;`)}

  flex-direction: column;
  justify-content: space-between;

  ${media.greaterThan('large')`
    display: flex;
    height: auto;
    position: relative;
    top: 0;
    overflow: none;
    padding: 0;
    background: transparent;
    flex-direction: column;
    justify-content: space-between;
  `}
`

export const NavMain = styled.nav`
  margin-bottom: 35px;

  ${media.greaterThan('large')`
    margin-bottom: 30vh;

  `}

  @media (max-height: 700px) {
    margin-bottom: 15vh;
  }

  @media (min-width: 1440px) and (max-height: 700px) {
    nav {
      margin-bottom: 15vh;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px
  }

  li {
    &:not(:last-child) {
      margin-bottom: 25px;

      ${media.greaterThan('large')`
        margin-bottom: 10px;
      `}
    }
  }
`;

export const NavMainButtonSearch = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 0px;

  i {
    display: block;
    width: 25px;
    min-width: 25px;
    text-align: center;
  }

  svg {
    display: block;
    width: 15px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    path,
    polyline {
      transition: all 300ms ease;
    }
  }

  span {
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    text-decoration: none;
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.green};
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
    }

    svg path,
    svg polyline {
      stroke: ${({ theme }) => theme.colors.green};
    }
  }

  ${(props) => props.active && NavMainButtonSearchActive}
`;

export const NavMainButtonSearchActive = css`
  svg path,
  svg polyline {
    stroke: ${({ theme }) => theme.colors.green};
  }

  span {
    color: ${({ theme }) => theme.colors.green};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
`;

export const NavMainButton = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  text-align: left;

  svg {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    ${(props) =>
      props.type == 'register'
        ? css`
            width: 22px;
            height: 18px;
          `
        : css`
            width: 24px;
            height: 16px;
          `}
  }

    &:hover {
      text-decoration: none;
      span {
        color: ${({ theme }) => theme.colors.green};
        font-weight: ${({ theme }) => theme.fontsWeight.bold};
      }

      svg path,
      svg polyline {
        stroke: ${({ theme }) => theme.colors.green};
      }
    }
`;

export const NavMainButtonText = styled.span`
  display: block;
  width: 100%;
  padding-left: 35px;
  text-transform: uppercase;
  text-align: left;
  font: 18px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  color: ${({ theme }) => theme.colors.green};
  transition: all 300ms ease;

  ${media.greaterThan('large')`
    font-size: 14px;
    line-height: 20px;
  `}
`;

export const NavBottomContainer = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;

  ${media.greaterThan('large')`
    margin-bottom: 20px;
  `}
`;

export const NavSecondary = styled.nav`
  margin-bottom: 30px;

  ${media.greaterThan('large')`
    margin-bottom: 14px;
  `}

  li {
    &:not(:last-child) {
      margin-bottom: 20px;

      ${media.greaterThan('large')`
        margin-bottom: 8px;
      `}
    }
  }
`;

export const NavSecondaryButton = styled.a`
  position: relative;
  text-transform: uppercase;
  font: 18px 'Raleway';
  color: ${({ theme }) => theme.colors.green};

  :hover{
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  ${media.greaterThan('large')`
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
  `}
`;

export const NavIconAlert = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 120px;
  width: 29px;
  height: 29px;
  background: ${({ theme }) => theme.colors.orange};
  transform: translateY(-50%);
  border-radius: 50%;

  ${media.greaterThan('large')`
    left: 90px;
    width: 27px;
    height: 27px;
  `}

  svg {
    display: block;
    width: 18px;
    height: 18px;

    ${media.greaterThan('large')`
      width: 16px;
      height: 16px;
    `}

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const NavLangs = styled.nav`
  margin-bottom: 25px;

  ul {
    width: auto;
    display: flex;
    align-items: center;
  }

  li {
    font: 14px 'Raleway';
    color: ${({ theme }) => theme.colors.green};
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

    &:nth-child(2),
    &:nth-child(4) {
      margin: 0 15px;

      ${media.greaterThan('large')`
        margin: 0 5px;
      `}
    }
  }

  ${media.greaterThan('large')`
    margin-bottom: 30px;
    height: 23px;
  `}
`;

export const NavLangsButton = styled.a`
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 120%;
    height: 2px;
    background: ${({ theme }) => theme.colors.green};
    transition: all 300ms ease;
    ${({ theme }) => theme.hide};
  }

  ${(props) =>
    props.active &&
    css`
      &:after {
        ${({ theme }) => theme.show};
      }
    `}
`;

export const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  width: 195px;
  font: 19px 'Raleway';
  color: ${({ theme }) => theme.colors.green2};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

  ${media.greaterThan('large')`
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  `}

  svg {
    display: block;
    width: 29px;
    min-width: 29px;
    height: 30px;
    margin-right: 6px;

    ${media.greaterThan('large')`
      width: 16px;
      min-width: 16px;
      height: 17px;
    `}
  }
`;

export const Whatsapp = styled.div`
  margin-bottom: 30px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 14px;
`;

export const SocialButton = styled.a`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Contact = styled.p`
  position: relative;
  padding: 20px;
  margin-bottom: 25px;
  font: 18px 'Bitter';
  color: ${({ theme }) => theme.colors.greenDark};
  text-align: center;
  background: ${({ theme }) => theme.colors.greyLight};

  ${media.greaterThan('large')`
    display: none;
    padding: 0;
    margin-bottom: 15px;
    background: transparent;
    font-size: 0;
    text-align: left;
  `}

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    background: ${({ theme }) => theme.colors.greyLight};

    ${media.greaterThan('large')`
      display: none;
    `}
  }

  &:before {
    left: -30px;
  }

  &:after {
    right: -30px;
  }

  a {
    display: block;
    font: 26px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    color: ${({ theme }) => theme.colors.greenDark};

    ${media.greaterThan('large')`
      font-size: 16px;
    `}
  }
`;

export const Newsletter = styled.div`
  margin-bottom: 20px;

  ${media.greaterThan('large')`
    margin-bottom: 12px;
  `}
`;

export const NewsletterButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  font: 14px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  padding-left: 0px;
  font-weight: ${({ theme }) => theme.fontsWeight.medium};

  :hover{
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
  
  ${media.greaterThan('large')`
    font-size: 13px;
    line-height: 18px;
  `}

  strong {
    display: block;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('large')`
    display: block;
  `}
`;

export const Creci = styled.p`
  font: 16px 'Raleway';
  color: ${({ theme }) => theme.colors.greenDark};
  font-weight: ${({ theme }) => theme.fontsWeight.medium};

  ${media.greaterThan('large')`
    font-size: 11px;
  `}
`;

export const ZohoFixWhatsModal = createGlobalStyle`
  .zf-backgroundBg {
    z-index: 999 !important;
  }
`;