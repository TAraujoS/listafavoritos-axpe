import styled from 'styled-components';
import media from 'styled-media-query';

// components
import GalleryHeaderbar from './GalleryHeaderbar';

export const Container = styled.div`
  /* margin: auto; */
  position: relative;
  /* max-width: 1160px; */

  & > .slick-slider .slick-slide {
    width: calc(100vw - 400px);
    /* max-width: 1040px; */
  }

  /* Corrigir layout shift do slick-track */
  /* .slick-track {
    display: flex !important;
    align-items: stretch;
    width: 100% !important;
    min-width: 100% !important;
  } */

  /* .slick-slide {
    width: calc(100vw - 400px) !important;
    max-width: 1040px !important;
    flex-shrink: 0;
  } */

  /* Evitar layout shift durante carregamento */
  .slick-list {
    overflow: hidden;
    width: 100%;
  }
`;

export const Tour360 = styled(GalleryHeaderbar)`
  height: 100vh;
  top: 0;
  background-color: ${({ theme }) => theme.colors.greenDark};

  iframe {
    height: 80%;
    margin: auto;
    width: 80%;
    display: block;
    margin-top: 6%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  /* border: 2.5px solid ${({ theme }) => theme.colors.white}; */
  border-top: none;
  border-bottom: none;
  height: 470px;

  @media (min-width: 768px) {
    height: 525px;
  }

  .next-image {
    width: 100%;
    height: 100%;
    ${props => props.isVertical ? 'object-fit: contain;' : 'object-fit: cover;'}
  }
`;

export const PlayButton = styled.img`
  position: absolute;
  max-width: 18%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5));
  opacity: 1;
  transition: transform .15s;

  ${media.greaterThan('large')`
    max-width: 13.5%;
  `}

  &:hover {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.15);
  }
`;

export const SliderButton = styled.button`
  position: relative;
  cursor: pointer;

  ${media.greaterThan('large')`
    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
      transition: all 300ms ease;
      z-index: 2;
      ${({ theme }) => theme.hide};
    }

    &:hover {
      &:before {
        ${({ theme }) => theme.show};
      }
    }
  `}
`;

export const Button360 = styled.div`
  position: absolute;
  right: 20px;
  width: 53px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 100%;

  img {
    width: 32px;
  }

  ${media.greaterThan('medium')`
    width: 66px;
    height: 66px;
    right: unset;
    margin-left: 64%;
    margin-top: 15px;

    img {
      width: 40px;
    }
  `}

  ${media.greaterThan('large')`
    margin-left: calc(100% - 81px);
  `}
`;

export const SizeGallery = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 35px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: sticky;
  margin-top: -62px;
  margin-left: calc(100vw - 45px);

  span {
    font: 10px 'Bitter';
    color: ${({ theme }) => theme.colors.grey};
  }

  img {
    width: 24px;
    margin-top: 7px;
  }

  ${media.greaterThan('medium')`
    display: none;
  `}
`;
