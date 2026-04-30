import { css } from 'styled-components';
import media from 'styled-media-query';

// Otimizado: apenas breakpoints necessários
const breakpoints = [ 'small', 'medium', 'large' ];

const createTailwindClasses = () => {
  let classesCSS = '';

  // Otimizado: apenas classes mais usadas
  const essentialClasses = ['hidden', 'block', 'flex', 'grid'];

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];

    essentialClasses.forEach(className => {
      classesCSS += `
        ${media.greaterThan(breakpoint)`
          .${breakpoint}\\:${className} {
            display: ${className === 'hidden' ? 'none' : className};
          }
        `}
      `;
    });
  }

  return css`
    ${classesCSS.replace(/,/gi, '')}
  `;
};

export default css`
  /* Classes essenciais apenas */
  .hidden {
    display: none;
  }

  .block {
    display: block;
  }

  .flex {
    display: flex;
  }

  .grid {
    display: grid;
  }

  ${createTailwindClasses()}
`;
