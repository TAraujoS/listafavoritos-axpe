import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 6px 6px 0 0;
  background-color: black;
  opacity: 0.7;
  z-index: 9;

  ${props =>
    props.type == 'viewed' &&
    css`
      max-width: calc(100vw - 79px);
    `}

  svg {
    margin-left: auto;
    margin-right: 27px;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 27px;
    max-height: 48px;
  }

  p {
    margin: 75px 0 0 21px;
    width: 180px;
  }

  p,
  strong {
    font: 24px/25px 'Bitter';
    color: ${({ theme }) => theme.colors.white} !important;
  }

  strong {
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  ${media.greaterThan('medium')`
    /* width:208px;
    height: 206px; */
    border-radius: 6px;
  `}
`;
