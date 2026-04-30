import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import GalleryHeaderbar from '../GalleryHeaderbar';
import SliderNew from 'components/SliderNew';

export const Container = styled(GalleryHeaderbar)`
  height: 100vh;
  top: 0;
  background-color: ${({ theme }) => theme.colors.greenDark};

  img {
    max-width: 100%;
    max-height: calc(100vh - 105px);
  }

  iframe {
    height: calc((100vw / 16) * 9);
  }

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: center;

    /* .slick-slide {
      width: 100% !important;
      max-width: 100% !important;
    } */

    img, iframe {
      margin-top: 0;
    }

    img {
      max-height: 80vh;
    }

    iframe {
      height: 80vh;
    }
  `}
`;

export const Images = styled(SliderNew)`
  height: calc(100vh - 66px);

  ${media.greaterThan('640px')`
    margin-top: 10%;
    height: calc(100vh - 40px);
  `}

  ${media.greaterThan('medium')`
    margin: 70px auto 0 auto;
    width: 80% !important;
    height: 80%;
    display: block !important;
  `};

  .slick-slide {
    max-width: 100% !important;
  }
`;

export const Slide = styled.div`
  height: calc(100vh - 70px);
  width: 100vw !important;
  display: table-cell !important;
  vertical-align: middle;
  overflow: hidden;

  ${css`
    @media (orientation: landscape) and (max-width: 767px) {
      height: 100vh;
    }
  `}

  ${media.greaterThan('medium')`
    height: calc(100vh - 150px);
  `}

  .react-transform-component {
    margin: 0px auto;
    overflow: unset;
    width: 100vw;
    height: 100%;

    img {
      margin: auto;
      width: auto;
      height: 100%;
      object-fit: contain;
    }

    .next-image {
      object-fit: contain !important;
    }
  }

  .react-transform-wrapper {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  iframe {
    width: 100%;

    ${media.greaterThan('medium')` 

      display: block;
      margin: 0 auto;
      width: calc((80vh / 9) * 16);
    `}
  }
`;