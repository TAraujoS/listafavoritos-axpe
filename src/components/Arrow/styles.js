import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import IArrowNext from 'assets/icons/arrow-next-white.svg';
import IArrowPrev from 'assets/icons/arrow-prev-white.svg';
import IArrowNextBlack from 'assets/icons/arrow-next-green.svg';
import IArrowPrevBlack from 'assets/icons/arrow-prev-green.svg';

const backgroundColorWhite = css`
  background-color: rgba(255, 255, 255, 0.5) !important;
  width: 35px;
  height: 35px;
`;

const positionCenterNext = css`
  top: 0;
  right: 10px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;
const positionCenterPrev = css`
  top: 0;
  left: 10px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

const positionInsideNext = css`
  right: 0;
`;
const positionInsidePrev = css`
  margin-left: 0;
`;

const positionOutsideNext = css`
  top: 0;
  bottom: 0;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;

  ${media.greaterThan('medium')`
    right: -35px;
  `}
`;
const positionOutsidePrev = css`
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;

  ${media.greaterThan('medium')`
    left: -35px;
  `}
`;

const galeriaImagensTexto = css`
  margin: 0;
  top: 181px;
`;

const galeriaShow3 = css`
  ${media.greaterThan('medium')`
    top: 252px;
    margin-right: auto;
    margin-left: 8%;
  `}

  ${media.lessThan('medium')`
    top: 176px;
  `}

  ${media.between('medium', '1202px')`
    margin-left: 15%;
  `}
`;

const galeriaShow3Next = css`
  ${media.greaterThan('medium')`
    right: 8%;
  `}

  ${media.lessThan('medium')`
    right: 0;
  `}

  ${media.between('medium', '1202px')`
    right: 15%;
  `}
`;

const typeTogether = css`
  padding: 2px 10px;

  ${media.lessThan('medium')`
    top: 400px;
    border: none;
  `}
`;

const typeTogetherPrev = css`
  top: 610px;
  left: 112px;
  border-right: 2px solid ${props => props.theme.colors[props.color]};
  padding-right: 20px;

  ${media.lessThan('medium')`
    top: 456px;
    ${props => props.position !== 'together' && positionCenterPrev}

    ${props =>
      props.position === 'together' &&
      css`
        left: 28px;
      `}
      
    ${props =>
      props.position === 'left' &&
      css`
        top: 175px;
      `}
    ${props =>
      props.position === 'right' &&
      css`
        top: 255px;
      `}
  `}
`;

const typeTogetherNext = css`
  top: 610px;
  left: 142px;
  border-left: 2px solid ${props => props.theme.colors[props.color]};
  padding-left: 20px;

  ${media.lessThan('medium')`
    left: auto;
    top: 456px;

    ${props => props.position !== 'together' && positionCenterNext}

    ${props =>
      props.position === 'together' &&
      css`
        left: 78px;
      `}

    ${props =>
      props.position === 'left' &&
      css`
        top: 175px;
      `}
    ${props =>
      props.position === 'right' &&
      css`
        top: 255px;
      `}
  `}
`;

const positionRightPrev = css`
  right: 299px;
  left: auto;

  ${media.between('1025px', '1169px')`
    right: 260px;
  `}
  ${media.between('1170px', '1279px')`
    right: 235px;
  `}
  ${media.greaterThan('1280px')`
    right: 255px;
  `}
  ${media.greaterThan('1440px')`
    right: 290px;
  `}
`;

const positionRightNext = css`
  right: 269px;
  left: auto;

  ${media.between('1025px', '1169px')`
    right: 230px;
  `}
  ${media.between('1170px', '1279px')`
    right: 205px;
  `}
  ${media.greaterThan('1280px')`
    right: 225px;
  `}
  ${media.greaterThan('1440px')`
    right: 260px;
  `}
`;

const positionLeftPrev = css`
  left: 15px;
  bottom: 40px;
  margin-bottom: 0;

  ${media.greaterThan('medium')`
    top: 610px ;
    left: 100px;
  `}

  ${media.between('1170px', '1279px')`
    left: 50px;
  `}
`;

const positionLeftNext = css`
  left: 78px;
  bottom: 40px;
  margin-bottom: 0;

  ${media.greaterThan('medium')`
    top: 610px;
    left: 130px;
  `}

  ${media.between('1170px', '1279px')`
    left: 80px;
  `}
`;

const Arrow = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 3;
  position: absolute;

  ${props => props.backgroundColor === 'white' && backgroundColorWhite}
  ${props => props.type === 'galeria-imagens-texto' && galeriaImagensTexto}
  ${props => props.type === 'gallery-show-3' && galeriaShow3}
  ${props => props.type === 'together' && typeTogether}
`;

export const ArrowNext = styled(Arrow)`
  background: url(${props =>
    props.color === 'white'
      ? IArrowNext
      : IArrowNextBlack}) center center no-repeat;

  ${props => props.position === 'center' && positionCenterNext}
  ${props => props.position === 'inside' && positionInsideNext}
  ${props => props.position === 'outside' && positionOutsideNext}
  ${props => props.type === 'together' && typeTogetherNext}
  ${props => props.type === 'gallery-show-3' && galeriaShow3Next}
  ${props => props.position === 'right' && positionRightNext}
  ${props => props.position === 'left' && positionLeftNext}
  ${props =>
    (props.position === 'large' || props.position === 'small') &&
    css`
      ${positionOutsideNext}
      right: -30px;
      top: -60px;

      ${media.greaterThan('medium')`
        top: 0;
        left: 945px;
      `}
      ${media.between('1025px', '1170px')`
        right: auto;
        left: 900px;
      `}
    `}
    
  ${props =>
    props.type === 'building' &&
    css`
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    `}
`;

export const ArrowPrev = styled(Arrow)`
background: url(${props =>
  props.color === 'white'
    ? IArrowPrev
    : IArrowPrevBlack}) center center no-repeat;

  ${props => props.position === 'center' && positionCenterPrev}
  ${props => props.position === 'inside' && positionInsidePrev}
  ${props => props.position === 'outside' && positionOutsidePrev}
  ${props => props.type === 'together' && typeTogetherPrev}
  ${props => props.position === 'right' && positionRightPrev}
  ${props => props.position === 'left' && positionLeftPrev}
  ${props =>
    (props.position === 'large' || props.position === 'small') &&
    css`
      ${positionOutsidePrev}
      left: -30px;
      top: -60px;

      ${media.greaterThan('medium')`
        top: 0;
        left: -32px;
      `}
      ${media.greaterThan('1170px')`
        left: -34px;
      `}
    `}
  ${props =>
    props.type === 'building' &&
    css`
      top: 50%;
      transform: translateY(-50%);
    `}
`;
