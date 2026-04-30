import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// assets
import ArrowIconSVG from 'assets/icons/arrow.svg';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.greyLight3};
  min-height: calc(100vh - 70px);

  ${media.greaterThan('medium')`
    padding-left: 24px;
    min-height: 100vh;
  `}

  ${media.greaterThan('large')`
    padding-left: 0;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 990px;
  padding: 0 0 30px 0;

  ${media.greaterThan('medium')`
    padding: 0 30px 60px 30px;
    margin: 0 auto;
    min-height: calc(100vh - 268px);
  `}

  ${media.greaterThan('1280px')`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const Header = styled.header`
  padding: 15px;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 15px;

  h3 {
    font: 25px/28px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    color: ${({ theme }) => theme.colors.green};

    strong {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  p {
    font: 13px 'Raleway';
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    color: ${({ theme }) => theme.colors.green};
    margin-top: 15px;

    ${media.lessThan('medium')`
      display: none;
    `}
  }

  ${media.greaterThan('medium')`
    padding: 50px 0 0;
    flex-direction: column;

    h3 {
      width: 60%;
      font-size: 40px;
      line-height: 50px;
    }
  `}

  ${media.greaterThan('medium')`
    margin-bottom: 30px;
  `}
`;

export const HeaderOrder = styled.div`
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  display: flex;
  gap: 16px;
  
  ${media.greaterThan('medium')`
    margin-left: auto;
    margin-bottom: 0;
  `}
`;

export const DisplayOrder =  styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 0;
    cursor: pointer;
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const MoreFiltersButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 38px;
  font: 10px 'Raleway';
  padding: 10px 24px;
  margin-right: 0;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ theme }) => theme.colors.green};
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  cursor: pointer;

  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export const HeaderOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font: 13px 'Raleway';
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  &:after {
    content: '';
    display: block;
    width: 13px;
    height: 13px;
    margin-left: 10px;
    background: url(${ArrowIconSVG}) no-repeat;
    background-size: contain;
    transform: rotate(90deg);
    transition: all 300ms ease;
  }

  ${media.lessThan('medium')`
    display: none;
  `}

  ${media.greaterThan('medium')`
    padding: 0 15px;
    border: 0;
    height: auto;
    line-height: 15px;
  `}

  ${media.greaterThan('large')`
    ${(props) =>
      props.active &&
      css`
        &:after {
          transform: rotate(270deg);
        }
      `}
  `}
`;

export const HeaderOrderList = styled.div`
  display: none;

  ${media.greaterThan('small')`
    display: block;
    position: absolute;
    top: 15px;
    right: 10px;
    padding: 10px 10px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 6px;
    ${({ theme }) => theme.hide};
    transition: all 300ms ease;

    ${(props) =>
      props.active &&
      css`
        top: 20px;
        ${({ theme }) => theme.show};
      `}
  `}
`;

export const HeaderOrderListButton = styled.button`
  display: block;
  width: 100%;
  padding: 5px 5px 5px 0;
  text-align: left;
  font: ${({ theme }) => theme.fontsWeight.regular} 13px 'Raleway';
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 700;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  }

  &:hover {
    background: transparent; 
    color: ${({ theme }) => theme.colors.orange}; 
  }
`;

export const ButtonBack = styled.button`
  display: none;

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 24px;
    height: calc(100%);
    background: ${({ theme }) => theme.colors.green};
    font-size: 0;
    z-index: 2;
    padding: 0px;

    svg {
      display: block;
      width: 24px;
      height: 24px;
      transform: rotate(180deg);

      rect {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  `}

  ${media.greaterThan('large')`
    left: 200px;
  `}
`;

export const Buildings = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 16px;
`;

export const BuildingsNotFound = styled.div`
  width: 100%;
  padding: 50px 30px;
  margin-bottom: 50px;

  h6 {
    margin-bottom: 20px;
    font: 30px/40px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    color: ${({ theme }) => theme.colors.orange};

    span {
      display: block;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  p {
    font: 30px/36px 'Bitter';
  }

  button {
    text-decoration: underline;
  }

  ${media.greaterThan('medium')`
    h6 {
      font-size: 45px;
      line-height: 55px;

      span {
        display: inline;
      }
    }

    p {
      line-height: 49px;
    }
  `}
`;

export const SearchBanner = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: calc(100vw - 32px);
  height: ${(props) =>
    props.useBtSchedule ? (props.hasDeleted ? '45px' : '386px') : '365px'};
  margin: ${(props) =>
    props.useBtSchedule ? 'auto auto 33px auto' : 'auto auto 20px auto'};
  overflow: hidden;
  border-radius: 6px;

  ${(props) =>
    props.hasDeleted &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 30px;
    `}

  p, h4 {
    color: ${({ theme }) => theme.colors.greenDark};
  }

  ${media.greaterThan('medium')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    ${(props) =>
      props.hasDeleted
        ? css`
            justify-content: flex-start;
            flex-direction: row;
            align-items: center;
          `
        : css`
            justify-content: space-between;
            flex-direction: row-reverse;
          `}
  `}

  ${media.greaterThan('large')`
    transition: all 300ms ease;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  `}
`;

export const Infos = styled.div`
  display: block;
  z-index: 5;
  position: relative;
  padding: 15px 20px;
  width: 85%;
  height: 525px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan('medium')`
    width: 100%;
    height: 376px;
    padding: 30px;
    margin: auto;
  `}

  ${media.greaterThan('1280px')`
    ${(props) =>
      props.releaseDelivery
        ? css`
            height: calc(100% - 35px);
            margin: 0;
            padding: 0 40px;
          `
        : css`
            padding: 30px 40px 30px 40px;
          `}
  `}

  h4 {
    font: 30px/35px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 15px;

    strong {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  ${media.greaterThan('medium')`
    h4 {
      width: 60%;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 30px;
    }
  `}

  a {
    display: inline-block;
    height: 45px;
    border-radius: 4px;
    font: 15px/44px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    padding: 0 25px;
    transition: all 300ms ease;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 1px;
  width: 100%;
  height: 100%;

  & > a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.8));
    z-index: 2;

    ${(props) =>
      props.hideOverlay &&
      css`
        display: none !important;
      `}

    ${(props) =>
      props.mq === 'mobile' &&
      media.greaterThan('medium')`
      display: none !important;
    `}

    ${media.greaterThan('medium')`
      background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.4));
    `}
  }
`;

export const Image = styled.img`
  display: block;
  z-index: 1;
  object-fit: cover;
  border-top: none;
  border-bottom: none;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.mq === 'mobile' &&
    media.greaterThan('medium')`
    display: none !important;
  `}

  ${(props) =>
    props.mq === 'desktop' &&
    media.lessThan('medium')`
    display: none !important;
  `}
`;

// Estilos para as imagens otimizadas do banner
export const BannerImageStyles = styled.div`
  .banner-image {
    display: block;
    z-index: 1;
    object-fit: cover;
    border-top: none;
    border-bottom: none;
    width: 100%;
    height: 100%;
  }

  .banner-image.mobile {
    ${media.greaterThan('medium')`
      display: none !important;
    `}
  }

  .banner-image.desktop {
    ${media.lessThan('medium')`
      display: none !important;
    `}
  }

  .banner-image.placeholder {
    background-color: #f0f0f0;
  }
`;

export const BuildingsLoadMore = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
