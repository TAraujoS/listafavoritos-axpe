import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Slider from 'components/Slider';
import GalleryHeaderbar from '../GalleryHeaderbar';

export const Container = styled(GalleryHeaderbar)`
  top: 0;
  background-color: ${props =>
    props.planta ? props.theme.colors.greyLight : props.theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.greenDark};
  }

  i {
    &:after,
    &:before {
      background: ${({ theme }) => theme.colors.greenDark};
    }
  }

  ${media.greaterThan('medium')`
    background-color: ${({ theme }) => theme.colors.greenDark};
  `}

  ${props => props.planta && css`
    overflow: scroll;
  `}
`;

export const Body = styled.div`
  ${media.greaterThan('medium')`
    position: relative;
    background-color: ${({ theme }) => theme.colors.greyLight};
    max-width: 1127px;
    margin: auto;
    height: calc(100% - 50px);
  `}
`;

export const BodySlider = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 100vw;
  width: 90vw;

  img {
    max-height: 90vw;
    max-width: 90vw;
    margin: auto;
    display: block !important;
  }

  iframe {
    width: 90vw;
    height: 90vw;
  }

  ${media.greaterThan('1024px')`
    height: calc(100vh - 170px);
  `}
`;

export const SliderNav1 = styled(Slider)`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vw;

  ${media.greaterThan('1024px')`
    position: absolute;
    top: 93px;
    left: 40%;
    width: calc(60% - 60px);
    max-height: calc(100vh - 170px);

    button {
      width: 50px;
      height: 50px;
      background-size: 50px;

      &:nth-child(1) {
        margin-left: -20px;
      }

      &:nth-child(3) {
        margin-right: -20px;
      }
    }

    img {
      object-fit: contain;
      max-width: 550px;
      max-height: calc(100vh - 170px);
    }
  `}

  ${media.greaterThan('1078px')`
    bottom: 55px;
    top: unset;

    img {
      width: 637px;
      height: 607px;
    }
  `}
`;

export const ImagesSecundary = styled.div`
  height: 112px;
  overflow-x: scroll;
  display: flex;

  img {
    object-fit: cover;
    height: 100px;
    min-width: 100px;
    margin: 6px;
  }

  .active {
    border: 3px solid ${({ theme }) => theme.colors.orange};
  }

  ${media.greaterThan('medium')`
    width: 25%;
    height: 336px;
    flex-wrap: wrap;
    margin-left: 70px;
    overflow-x: unset;
    overflow-y: auto;
    align-items: flex-end;
    align-content: flex-end;
    position: absolute;
    bottom: 50px;

    img {
      width: 28%;
      margin-right: 2%;
      min-width: 0;
      height: 60px;
    }
  `}

  ${media.between('medium', '1024px')`
    margin-left: 40px;
  `}
`;

// Estilos para as imagens otimizadas do GalleryNav
export const OptimizedImageStyles = styled.div`
  .tour-360-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .placeholder {
    background-color: #f0f0f0;
  }
`;

export const InfoPlanta = styled.div`
  margin: 25px 22px;

  hr {
    width: 60px;
    margin: 18px 0 20px 0;
  }

  hr:nth-child(3) {
    display: none;
  }

  ${media.greaterThan('medium')`
    padding: 93px 0 0 60px;

    hr:nth-child(3) {
      display: block;
    }

    div hr {
      display: none;
    }
  `}

  ${media.between('medium', '1024px')`
    padding: 93px 0 0 30px;
  `}
`;

export const Category = styled.p`
  font: 37px 'Bitter';

  ${media.greaterThan('medium')`
    padding-bottom: 38px;
  `}
`;

export const Title = styled.p`
  font: 18px 'Raleway';
  margin: 20px 0;
`;

export const Info = styled.div`
  p {
    font: 16px/19px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
`;
