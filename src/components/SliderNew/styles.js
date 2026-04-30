import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;

  .slick-list {
    ${props => props.buildingsSlider && css`
      ${media.lessThan('medium')`
        padding-left: 10%; 
      `}
    `}
  }

  .slick-slide {
    font-size: 0;
  }

  .slick-slider {
    width: 100%;

    ${props => props.hasVerticalBar && css`
      ${media.greaterThan('large')`
        &:before {
          content: '';
          display: block;
          position: absolute;
          bottom: 64px;
          left: 134px;
          width: 2px;
          height: 25px;
          z-index: 10;
          background: ${({ theme }) => theme.colors.white};
        }
      `}
    `}
  }

  .slick-track {
    min-width: 100%;
    display: flex;
    align-items: stretch;
  }

  .slick-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    width: 35px;
    height: 35px;
    transform: none;
    z-index: 5;
    font-size: 0;
    transition: all 300ms ease;

    &:before {
      display: none;
    }

    svg {
      display: block;
      width: 22px;
      height: 22px;
      margin: auto;

      ${props => props.arrowsColor && css`
        rect {
          fill: ${({ theme }) => theme.colors[props.arrowsColor]};
        }
      `}
    }

    &.slick-prev {
      svg {
        transform: rotate(-180deg);
      }
    }

    &.slick-disabled,
    &[disabled] {
      opacity: 0.2;
      cursor: default;
    }
  }

  ${props => props.type === 'normal' && ContainerNormal}
  ${props => props.type === 'full' && ContainerFull}
  ${props => props.type === 'gallery' && ContainerGallery}
`;

const ContainerNormal = css`
  .slick-arrow {
    top: 35%;
    transform: translateY(-50%);

    ${media.lessThan('medium')`
      top: 40%;
    `}

    &.slick-prev {
      left: 0px;

      ${media.greaterThan('large')`
        left: 10px;
      `}
    }

    &.slick-next {
      right: 20px;

      ${media.lessThan('medium')`
        right: 0px;
      `}

      ${media.greaterThan('large')`
        right: 10px;
      `}
    }
  }
`;

const ContainerFull = css`
  .slick-arrow {
    bottom: 40%;

    &.slick-prev {
      left: auto;
      right: 70px;

      ${media.greaterThan('medium')`
        right: auto;
        left: 95px;
      `}

      ${media.greaterThan('large')`
        &:hover {
          transform: translateX(-2px);
        }
      `}
    }

    &.slick-next {
      right: 20px;

      ${media.greaterThan('medium')`
        right: auto;
        left: 140px;
      `}

      ${media.greaterThan('large')`
        &:hover {
          transform: translateX(2px);
        }
      `}
    }
  }
`;

const ContainerGallery = css`
  .slick-arrow {
    top: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%);
    
    ${media.greaterThan('medium')`
      &:hover {
        background: rgba(255, 255, 255, 0.7);
      }
    `}

    &.slick-prev {
      left: 0;
    }

    &.slick-next {
      right: 10px;
    }
  }
`;