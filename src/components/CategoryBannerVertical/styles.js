import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  min-height: 560px;

  .slick-list,
  .slick-slide {
    font-size: 0;
  }

  ${props => props.type === 'vertical' && css`
    min-height: 560px;
    .slick-list {
      height: 100% !important;
    }
    .slick-track {
      display: flex;
      flex-direction: column;
    }

    .slick-slide {
      height: 100% !important;
    }
  `}

  .slick-slider {
    width: 100%;
  }

  .slick-track {
    min-width: 100%;
  }
`;

export const SliderVertical = styled(Container)`
  ${props => props.type === 'vertical' && css`
    min-height: 560px;
    .slick-list {
      height: 100% !important;
    }
    .slick-track {
      display: flex;
      flex-direction: column;
    }

    .slick-slide {
      height: 100% !important;
    }
  `}
`;

export const CategoryBannerContainer = styled.div`
  position: relative;
  padding: 14px;
  margin-bottom: 10px;
  font-family: 'Bitter', sans-serif;
  border-radius: 8px;

  h2 {
    position: absolute;
    top: 15%;
    left: 10%;
    z-index: 10;
    max-width: 400px;
    font: 20px 'Bitter';
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontsWeight.regular};

    ${media.greaterThan('medium')`
      font-size: 20px;
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
  }
`;

export const CategoryItem = styled.article``;

export const CategoryLink = styled.a``;

export const CategoryItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;

  .category-image {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      border-radius: 8px;
    }

    &.mobile {
      ${media.greaterThan('medium')`
        display: none !important;
      `}
    }

    &.desktop {
      ${media.lessThan('medium')`
        display: none !important;
      `}
    }
  }
`;

export const CategoryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;

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

export const TitleList = styled.ul`
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TitleItem = styled.li`
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 20px;
  transition: font-size 0.3s, color 0.3s;
  color: ${({ theme }) => theme.colors.grey};

  ${props => props.active && css`
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    color: ${({ theme }) => theme.colors.white};
  `}
`;