import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import { ButtonStyle } from 'components/Button/styles';

export const Container = styled.section`
  .buildingsSeen + .buildingsForYou {
    > div {
      padding-top: 0;
    }
  }
  .buildingsForYou + .buildingsSeen {
    > div {
      padding-top: 0;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const GroupSlider = styled.div`
  max-width: 954px;
  margin: auto;
`;

export const Banner = styled.a`
  cursor: pointer;

  img {
    margin-bottom: 10px;

    ${props =>
      props.mq === 'mobile' &&
      media.greaterThan('medium')`
      display: none !important;
    `}

    ${props =>
      props.mq === 'desktop' &&
      media.lessThan('medium')`
      display: none !important;
    `}
  }
`;

export const Hero =  styled.div.attrs(() => ({
  tabIndex: -1,
}))`
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  min-height: 550px;

  ${media.lessThan('medium')`
    min-height: 650px;
  `}

  .slick-slider:before{
    content: inherit;
  }

  .slick-slider {
    overflow: hidden;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    width: 100% !important;
    display: flex !important;
  }

  .slick-slide {
    width: 100% !important;
    flex-shrink: 0;
  }

  .slick-prev{
    right: inherit!important;
    left: 20px!important;
  }

  .slick-arrow svg{
    width: 20px;
    height: 24px;
  }

  .slick-prev, .slick-next{
    position: absolute;
    top: 50%;    
  }

  .slick-next{
    right: 20px !important;
    left: inherit !important;
  }

  .slick-dots{
    bottom: 44px;
    width: auto;
    padding: 0 100px;
    display: flex !important;
    align-items: center;
    pointer-events: none;
  }

  .slick-dots li{
    width: auto;
  }

  .slick-dots li span{
    color: #fff;
    font-size: 14px;    
    font-family: 'Bitter', sans-serif;
  }

  ul.slick-dots li{
    display: none;
  }
   
  ul.slick-dots li.slick-active{
    display: block;    
  }

  @media (max-width: 991px){
    .slick-prev{
      left: -5px !important;
    }

    .slick-next{
      right: -5px !important;
    }

    .slick-dots{
      padding: 0 30px;
    }
  }

  .slick-slide.active {
    .hero-info {
      div, h2, p, span {
        transition-delay: 200ms;
        transition-duration: 300ms;
        transform: translateX(0);
        ${({ theme }) => theme.show};
      }

      div {
        transition-delay: 200ms;
      }

      h2 {
        transition-delay: 200ms;
      }

      p {
        transition-delay: 400ms;
      }

      span {
        transition-delay: 600ms;
      }
    }

    .hero-image {
      transition-delay: 1.5s;
      transform: scale(1.05);
      transition-duration: 7s;
      will-change: transform;
      contain: paint;
    }
  }
`;

export const HeroItem = styled.article`
  height: 550px;

  ${media.lessThan('medium')`
    height: 650px;
  `}
`;

export const HeroLink = styled.a`
  height: 100%;
`;

export const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 100ms 500ms ease;
  will-change: transform;
  contain: paint;

  ${props =>
    props.mq === 'mobile' &&
    media.greaterThan('medium')`
    display: none !important;
  `}

  ${props =>
    props.mq === 'desktop' &&
    media.lessThan('medium')`
    display: none !important; 
  `}
`;

export const HeroItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  ${media.greaterThan('medium')`
    max-height: 580px;
  `}

  .hero-image {
    position: relative;
    width: 100%;
    height: 100%;

    &.mobile {
      ${media.greaterThan('medium')`
        display: none !important;
      `}
    }

    &.desktop {
      aspect-ratio: 16 / 9;
      height: auto;
      ${media.lessThan('medium')`
        display: none !important;
      `}
    }
  }

  .hero-image.desktop img,
  .hero-image.mobile img {
    object-fit: cover !important;
  }

  ${props => props.hasContent && css`
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.01) -23.53%,
        rgba(0, 0, 0, 0.6) 100.96%
      );
      z-index: 2;
    }
  `}
`;

export const HeroItemInfo = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0 30px;
  z-index: 4;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.white};
  min-height: 300px;

  ${media.greaterThan('medium')`
    padding: 0 100px;
  `}

  div {
    display: inline-block;
    line-height: 35px;
    margin-bottom: 20px;

    img {
      display: inline-block;
      vertical-align: text-top;
    }
  }

  div, h2, p, span {
    transform: translateX(50px);
    transition: all 300ms 500ms ease;
    ${({ theme }) => theme.hide};
  }

  h2 {
    max-width: 400px;
    font: 32px/34px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};

    ${media.greaterThan('medium')`
      font-size: 41px;
      line-height: 40px;
    `}

    &.with-separator:after {
      content: '';
      display: block;
      width: 55px;
      height: 4px;
      margin-top: 25px;
      background: ${({ theme }) => theme.colors.orange};
    }

    & + p {
      margin-top: 25px;
    }
  }

  p {
    max-width: 240px;
    font: 18px/25px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};

    & + span {
      margin-top: 25px;
    }
  }

  span {
    ${ButtonStyle}
  }
`;

export const PlaceholderImageDesk = styled.div`
  width: 100%;
  height: auto;
  max-height: 720px;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const PlaceholderImageMob = styled.div`
  width: 100%;
  height: auto;
  max-height: 375px;

  ${media.greaterThan('medium')`
    display: none;
  `}
`;