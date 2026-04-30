import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Slider from 'components/Slider';
import Button from 'components/Button';

export const ItemLink = styled(Button)`
  display: block !important;
  position: absolute;
  background-color: transparent !important;
  z-index: 9;
  height: 100%;
  padding: 0;
  width: 100%;

  ${props =>
    [ 'slick' ].includes(props.type) &&
    css`
      width: 100vw !important;
    `};

  ${media.greaterThan('medium')`
    height: 700px;

    ${props =>
      props.type === 'slickSmall' &&
      css`
        width: 304px !important;
      `};

    ${props =>
      [ 'slickGrid', 'slick', 'slickLeft' ].includes(props.type) &&
      css`
        width: calc(100vw - 200px) !important;
      `};

    ${props =>
      props.type === 'slickLarge' &&
      css`
        max-width: 954px;
        width: 100%;
        height: 258px;
      `};
  `}
`;

export const LinkTag = styled.a``;

const SlickLarge = media.greaterThan('medium')`
  .slick-track {
    max-height: 560px;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .slick-list {
    max-height: 560px;
  }

  .slick-slide.slick-active div {
    width: 100%;
  }
`;

const SlickLeft = css`
  ${media.greaterThan('medium')`
    button[type='together'][class*='__Arrow'] {
      left: 40px;

      &:last-child {
        left: 70px;
      }
    }
  `}

  ${media.greaterThan('large')`
    button[type='together'][class*='__Arrow'] {
      left: 90px;

      &:last-child {
        left: 120px;
      }
    }
  `}
`;

const SlickGrid = css`
  ${media.greaterThan('medium')`
    button[type='together'][class*='__Arrow'] {
      left: calc(60% + 40px);

      &:last-child {
        left: calc(60% + 70px);
      }
    }
  `}

  ${media.greaterThan('large')`
    button[type='together'][class*='__Arrow'] {
      left: calc(60% + 90px);

      &:last-child {
        left: calc(60% + 120px);
      }
    }
  `}
`;

export const Container = styled(Slider)`
  ${props =>
    props.type !== 'slick' &&
    media.greaterThan('medium')`
    margin-bottom: 10px;
  `}

  ${props =>
    props.type === 'slickLarge' && media.greaterThan('medium')`${SlickLarge}`}

  ${props => props.type === 'slickLeft' && SlickLeft}
  ${props => props.type === 'slickGrid' && SlickGrid}
`;

export const Slide = styled.div`
  ${props =>
    props.type === 'slickGrid' &&
    media.greaterThan('medium')`
      display: flex !important;
      height: 686px;
      justify-content: space-between;
  `}
  ${props =>
    props.type === 'slickLarge' &&
    media.greaterThan('medium')`
      display: flex !important;
      height: 258px;
      margin-bottom: 40px;
      max-width: 954px;
      width: auto !important;
    `}

  ${props =>
    props.type === 'slickLeft' &&
    media.greaterThan('medium')`
      display: flex !important;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
  `}

  ${props =>
    props.type === 'slickSmall' &&
    css`
      ${media.greaterThan('medium')`
        max-width: 304px;
        width: calc(100% + 40px);

        & + div {
          margin-left: 22px;
          margin-right: 22px;
        }
        
        a {
          width: calc(100% + 40px);
          max-width: 95%;
          height: 414px;
        }
      `}
    `}
`;

export const Image = styled.img`
  height: ${props => (props.mq === 'mobile' ? '70vw' : '700px')};
  display: block;
  object-fit: cover;
  
  ${props =>
    [ 'slickGrid' ].includes(props.type) &&
    media.lessThan('medium')`
      height: 0;
      padding-top: 66.64%;
  ` &&
    media.greaterThan('medium')`
      height: auto;
  `}
      
  ${props =>
    [ 'slick' ].includes(props.type) &&
    css`
      height: ${props => (props.mq === 'mobile' ? '70vw' : '700px')};
      min-height: 507px;
      margin-bottom: 9px;
    `}

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

  ${props =>
    props.type === 'slickLeft' &&
    css`
      width: 100%;
      max-width: 705px;
      min-width: 570px;
      max-height: 244px;
      margin-left: 0;
      margin-right: 2px;

      ${media.greaterThan('medium')`
        max-height: 680px;
      `}
    `}

  ${props =>
    props.type === 'slickLarge' &&
    media.greaterThan('medium')`
      width: 64%;
      max-width: 635px;
      height: 258px;
      border-radius: 6px 0 0 6px;
    `}

  ${props =>
    props.type === 'slickLarge' &&
    media.lessThan('medium')`
      height: 230px;
      border-radius: 6px 6px 0 0;
  `}

  ${props =>
    props.type === 'slickGrid' &&
    media.lessThan('medium')`
      max-height: 221px;
  `}

  ${props =>
    props.type === 'slickSmall' &&
    css`
      height: 230px;
      border-radius: 6px 6px 0 0;
    `}

  ${props =>
    props.type === 'slickSmall' &&
    media.greaterThan('medium')`
      max-width: 100%;
      border-radius: 6px 6px 0 0;
  `}
`;

// Estilos para as imagens otimizadas do SlickSection
export const OptimizedImageStyles = styled.div`
  .slickGrid.desktop,
  .slick.desktop,
  .slickLeft.desktop,
  .slickLarge.desktop,
  .slickSmall.desktop {
    height: 700px;
    display: block;
    object-fit: cover;
    
    ${media.lessThan('medium')`
      display: none !important;
    `}
  }

  .slickGrid.mobile,
  .slick.mobile,
  .slickLeft.mobile,
  .slickLarge.mobile,
  .slickSmall.mobile {
    height: 70vw;
    display: block;
    object-fit: cover;
    
    ${media.greaterThan('medium')`
      display: none !important;
    `}
  }

  .slickGrid.desktop {
    ${media.lessThan('medium')`
      height: 0;
      padding-top: 66.64%;
    `}
    
    ${media.greaterThan('medium')`
      height: auto;
    `}
  }

  .slick.desktop,
  .slick.mobile {
    min-height: 507px;
    margin-bottom: 9px;
  }

  .slickLeft.desktop {
    width: 100%;
    max-width: 705px;
    min-width: 570px;
    max-height: 244px;
    margin-left: 0;
    margin-right: 2px;

    ${media.greaterThan('medium')`
      max-height: 680px;
    `}
  }

  .slickLarge.desktop {
    ${media.greaterThan('medium')`
      width: 64%;
      max-width: 635px;
      height: 258px;
      border-radius: 6px 0 0 6px;
    `}
  }

  .slickLarge.mobile {
    ${media.lessThan('medium')`
      height: 230px;
      border-radius: 6px 6px 0 0;
    `}
  }

  .slickGrid.mobile {
    ${media.lessThan('medium')`
      max-height: 221px;
    `}
  }

  .slickSmall.desktop,
  .slickSmall.mobile {
    height: 230px;
    border-radius: 6px 6px 0 0;

    ${media.greaterThan('medium')`
      max-width: 100%;
    `}
  }

  .placeholder {
    background-color: #f0f0f0;
  }
`;

export const GreenBlock = styled.div`
  width: 100%;
  height: 102px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font: 22px 'Bitter';
    width: 238px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  ${media.greaterThan('medium')`
    min-width: 331px;
    width: 331px;
    height: 277px;
    border: 3.5px solid ${({ theme }) => theme.colors.white};

    p {
      font-size: 37px;
      text-align: left;
    }
  `}
`;

export const Row1 = styled.div`
  display: flex;
  img {
    width: 520px;
    height: 277px;
    min-width: 310px;
  }
`;

export const Row2 = styled.div`
  display: flex;
  img {
    height: 403px;
  }
  img:nth-child(1) {
    width: 331px;
    min-width: 331px;
  }

  img:nth-child(2) {
    width: 520px;
    min-width: 310px;
  }
`;

export const ImagesGrid = styled.div`
  display: block;

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    width: 60vw;
    position: relative;
    overflow: hidden;

    img {
      border: 3.5px solid ${({ theme }) => theme.colors.white};
    }
  `}

  ${media.greaterThan('1280px')`
    width: auto;
  `}
`;

export const Gradient = styled.div`
  width: 100vw;
  height: 507px;
  position: absolute;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.01) -23.53%,
    rgba(0, 0, 0, 0.6) 100.96%
  );
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  opacity: 0.6;

  ${media.greaterThan('medium')`
    background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.0001) 21.8%,
      #000000 100.96%
    );
    width: calc(100vw - 200px);
    height: 700px;
  `}
`;
