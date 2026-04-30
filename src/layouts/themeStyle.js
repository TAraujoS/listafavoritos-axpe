import { keyframes } from 'styled-components';

const theme = {
  /* Variables */
  colors: {
    white: '#fff',
    greyLight: '#F5F5F0',
    greyLight2: '#ECEFF1',
    greyLight3: '#F5F3F0',
    greyLight4: '#EDEDE3',
    greyLight5: '#F4F4F5',
    grey: '#CFD8DC',
    grey2: '#C3CCCD',
    greyDark2: '#A5A5A5',
    greyDark: '#979797',
    black: '#000',
    orange: '#EE6900',
    orange2: '#FF5E28',
    orangeDark: '#B14F02',
    orangeLight: '#ffbc86',
    orangeLight2: '#ff9a4a',
    greenLight: '#39B999',
    green: '#3F5A5E',
    green2: '#2CB743',
    green3: '#4F7055',
    greenDark: '#37474F',
    greenDarker: '#263238',
    greenBorder: '#374E52',
    greenLight2: '#89D4AA',
    blueLight: '#77D0DD',
    blueDark: '#1C282A',
    yellowLight: '#FFDBA8',
    error: '#FF0000',
  },

  fontsWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },

  /* Mixins */
  hide: `
    opacity: 0;
    visibility: hidden;
  `,
  show: `
    opacity: 1 !important;
    visibility: visible !important;
  `,

  /* Keyframes */
  fadeInOpacity: keyframes`
   0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px)
    }
  `,

  /* Functions */
  fontFace: (name, url) => `
    @font-face {
      font-family: ${name};
      src: url(${url}) format("truetype");
    }
  `
};

export default theme;
