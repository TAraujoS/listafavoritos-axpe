import styled, { css } from 'styled-components';
import SliderNew from 'components/SliderNew';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
`;

export const Images = styled.div`
  position: relative;
  padding-bottom: 75%;

  ${media.greaterThan('large')`
    padding-bottom: 56.25%;
  `}
`;

export const ImagesItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  a {
    position: relative;
    display: block;
    width: 100%;

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      z-index: 2;
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(0, 0, 0, 0.3) 50%
      );
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    &.desktop {
      display: none;
    }

    ${media.greaterThan('large')`
      &.mobile {
        display: none;
      }

      &.desktop {
        display: block;
      }
    `}
  }
`;

export const Items = styled.div`
  width: 100%;

  .slick-slider:before {
    ${media.greaterThan('large')`
      left: 50%;
      bottom: 5px;
      margin-left: -1px;
    `}
  }

  button.slick-arrow.slick-prev,
  button.slick-arrow.slick-next {
    left: 50%;
    transform: translateX(-50%);
    border-color: ${({ theme }) => theme.colors.greenDark};

    ${media.greaterThan('large')`
      bottom: 0;
      border-color: ${({ theme }) => theme.colors.white};

      &:hover {
        transform: translateX(-50%);
      }
    `}

    svg rect {
      fill: ${({ theme }) => theme.colors.greenDark};

      ${media.greaterThan('large')`
        fill: ${({ theme }) => theme.colors.white};
      `}
    }
  }

  button.slick-arrow.slick-prev {
    margin-left: -20px;

    ${media.greaterThan('large')`
      &:hover {
        margin-left: -25px;
      }
    `}
  }

  button.slick-arrow.slick-next {
    margin-left: 20px;

    ${media.greaterThan('large')`
      &:hover {
        margin-left: 25px;
      }
    `}
  }

  ${media.greaterThan('large')`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 30px;
    z-index: 10;
  `}
`;

export const ItemsCarousel = styled(SliderNew)`
  position: relative;
`;

export const Item = styled.div`
  position: relative;
  padding: 30px 0 100px 0;
  text-align: center;

  ${media.greaterThan('large')`
    padding: 0 0 100px;
  `}

  a {
    color: ${({ theme }) => theme.colors.greenDark};

    ${media.greaterThan('large')`
      color: ${({ theme }) => theme.colors.white};
    `}
  }

  h3 {
    font: 22px/32px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    &:after {
      content: '';
      display: block;
      margin: 15px auto 0 auto;
      width: 50px;
      height: 4px;
      background: ${({ theme }) => theme.colors.orange};
    }

    ${media.greaterThan('large')`
      font-size: 32px;
      line-height: 34px;
    `}
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 19px;
    font-weight: ${({ theme }) => theme.fontsWeight.regular};

    ${media.greaterThan('large')`
      font-size: 18px;
    `}
  }
`;
