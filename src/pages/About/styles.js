import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  gap: 12px;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const Wrapper = styled.div``;

export const Nav = styled.nav`
  width: 100%;
  height: 44px;

  ${media.greaterThan('medium')`
    overflow: inherit;
  `}

  ${media.greaterThan('medium')`
    height: 80px;
  `}

  div {
    position: fixed;
    top: 69px;
    left: 0;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.4);
    z-index: 5;

    ${media.greaterThan('medium')`

    `}

    ${media.greaterThan('large')`
      top: 0;
      left: 200px;
      width: calc(100% - 200px);
      overflow: inherit;
    `}
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0 20px;

    ${media.greaterThan('large')`
      justify-content: space-between;
      padding: 0;
      width: 90%;
    `}
  }

  a {
    display: block;
    position: relative;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    white-space: nowrap;
    font: ${({ theme }) => theme.fontsWeight.regular} 14px/44px 'Bitter';
    color: ${({ theme }) => theme.colors.green};

    ${media.greaterThan('medium')`
      height: 60px;
      padding: 0 20px;
      line-height: 60px;
      font-size: 16px;

      &:hover {
        &:after {
          height: 3px;
        }
      }
    `}

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      background: ${({ theme }) => theme.colors.orange};
      transition: all 300ms ease;
    }

    &.active {
      font-weight: ${({ theme }) => theme.fontsWeight.bold};

      &:after {
        height: 3px;
      }
    }
  }
`;

export const Hero = styled.div`
  margin-bottom: 30px;
  height: 500px;
  background-color: #E1DFDF;
  width: 100%;

  ${media.lessThan('medium')`
    height: 400px;
  `}

  figure {
    display: block;
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;

    ${media.greaterThan('medium')`
      height: auto;
    `}

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
      z-index: 2;

      ${media.greaterThan('medium')`
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
      `}
    }
  }

  img {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    width: auto;
    height: 100%;
    transform: translateX(-50%);

    ${media.greaterThan('medium')`
      position: relative;
      left: auto;
      width: 100%;
      height: auto;
      transform: none;
    `}
  }

  h2 {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    padding: 0 20px;
    z-index: 4;
    text-align: center;
    font: ${({ theme }) => theme.fontsWeight.regular} 50px 'Bitter';
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 2.5px;

    ${media.greaterThan('medium')`
      bottom: 80px;
      font-size: 61px;
      letter-spacing: 3px;
    `}

    &:after {
      content: '';
      display: block;
      width: 100%;
      max-width: 200px;
      height: 4px;
      margin: 25px auto 0 auto;
      background: ${({ theme }) => theme.colors.orange};
    }
  }

    div {
      width: 100%;
      height: 100%;
      max-width: 400px;
      margin: 0 auto;
      position: relative;

      ${media.greaterThan('medium')`
        max-width: 1120px;
      `}

      p {
        position: absolute;
        top: 20%;
        width: 95%;
        font-size: 48px;
        line-height: 100%;
        padding: 16px;
        color: ${({ theme }) => theme.colors.white};
        font-weight: ${({ theme }) => theme.fontsWeight.normal};
        max-width: 370px;

        strong {
          color: ${({ theme }) => theme.colors.orange};
          font-weight: ${({ theme }) => theme.fontsWeight.normal};
        }
    
        ${media.greaterThan('medium')`
          font-size: 45px;
          width: 100%;
          max-width: none;
        `}

        ${media.greaterThan('medium')`
          top: 20%;
          left: 10%;
          width: 60%;
          font-size: 90px;
          line-height: 100%;
        `}
      }
    
       span {
        position: absolute;
        top: 70%;
        padding: 16px;
        width: 85%;
        font-size: 24px;
        color: #676767;

        ${media.greaterThan('medium')`
          top: 60%;
          right: 10%;
          width: 35%;
          font-size: 36px;
        `}
      }
    }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font: ${({ theme }) => theme.fontsWeight.regular} 28px 'Raleway';
  color: ${({ theme }) => theme.colors.greenDark};

  ${media.greaterThan('medium')`
    font-size: 37px;
    line-height: 42px;
  `}

  span {
    white-space: nowrap;
  }
  
  strong {
    font-weight: ${({ theme }) => theme.fontsWeight.normal};
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Text = styled.div`
  ${media.greaterThan('medium')`
    min-width: 560px;
  `}
    
  p {
    font-size: 18px;
    line-height: 25px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const Block = styled.article`
  position: relative;
  margin-bottom: 0px;
  max-width: 1040px;

  ${media.lessThan('767px')`
    display: flex;
    flex-direction: column-reverse;

    ${props => props.dataTemplate === '5_full' && css`
        padding-top: 200px;
    `}
  `}

  ${media.greaterThan('medium')`
    display: flex;
    padding: 20px 10% 0px 0;

    &:before {
      content: '';
      display: block;
      position: absolute;
      background: ${({ theme }) => theme.colors.greyLight};
    }

    ${props => props.dataTemplate === '1' && BlockTemplate1}
    ${props => props.dataTemplate === '2' && BlockTemplate2}
    ${props => props.dataTemplate === '2_inverted' && BlockTemplate2Inverted}
    ${props => props.dataTemplate === '3' && BlockTemplate3}
    ${props => props.dataTemplate === '4' && BlockTemplate4}
    ${props => props.dataTemplate === '5' && BlockTemplate5}
    ${props => props.dataTemplate === '5_inverted' && BlockTemplate5Inverted}
    ${props => props.dataTemplate === '5_diff' && BlockTemplate5Diff}
    ${props => props.dataTemplate === '5_full' && BlockTemplate5Full}
  `}
`;

export const BlockTemplate1 = css`
  align-items: flex-start;
  padding-left: 10%;

  /* &:before {
    top: 0;
    left: 0;
    width: 65%;
    height: 85%;
  } */

  div[class*='BlockCol'] {
    &:first-child {
      width: 100%;
      margin-right: 10%;
    }

    &:last-child {
      width: 100%;
    }
  }
`;

export const BlockTemplate2 = css`
  align-items: flex-start;
  flex-direction: row-reverse;

  &:before {
    top: 0;
    right: 10%;
    width: 65%;
    height: 180px;
  }

  div[class*='BlockCol'] {
    &:first-child {
      width: 40%;
      margin-left: 10%;
    }

    &:last-child {
      width: 50%;
    }
  }

  h3[class*='Title'] {
    margin-bottom: 80px;
  }

  div[class*='Text'] {
    padding-right: 30px;
  }
`;

export const BlockTemplate2Inverted = css`
  ${BlockTemplate2}

  flex-direction: row;

  &:before {
    right: auto;
    left: 0;
  }

  div[class*='BlockCol'] {
    &:first-child {
      width: 45%;
      margin-right: 15%;
    }

    &:last-child {
      width: 40%;
    }
  }
`;

export const BlockTemplate3 = css`
  align-items: center;
  padding-left: 10%;

  &:before {
    bottom: 0;
    left: 0;
    width: 65%;
    height: 80%;
  }

  div[class*='BlockCol'] {
    &:first-child {
      width: 45%;
      margin-right: 10%;
    }

    &:last-child {
      width: 45%;
    }
  }
`;

export const BlockTemplate4 = css`
  align-items: flex-start;
  flex-direction: row-reverse;

  &:before {
    top: 0;
    right: 10%;
    width: 65%;
    height: 80%;
  }

  div[class*='BlockCol'] {
    &:first-child {
      width: 40%;
      margin-left: 5%;
    }

    &:last-child {
      width: 55%;
    }
  }

  h3[class*='Title'] {
    margin-bottom: 80px;
  }

  div[class*='Text'] {
    padding-right: 40px;
  }
`;

export const BlockTemplate5 = css`
  flex-direction: column-reverse;

  &:before {
    bottom: 0;
    left: 0;
    width: 90%;
    height: 75%;
  }

  div[class*='BlockCol'] {
    &:first-child {
      width: 90%;
      display: flex;
      margin-left: 10%;
    }

    &:last-child {
      width: 80%;
      margin: 0 0 40px 20%;
      transform: translateX(60px);
    }
  }

  h3[class*='Title'] {
    width: 40%;
    margin-right: 10%;
  }

  div[class*='Text'] {
    width: 50%;
    margin-top: 50px;
    padding-right: 40px;

    &:after {
      content: '';
      display: block;
      width: 70px;
      height: 4px;
      margin-top: 20px;
      background: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const BlockTemplate5Inverted = css`
  ${BlockTemplate5}

  div[class*='BlockCol'] {
    &:last-child {
      width: 80%;
      margin: 0 0 40px 0;
      transform: none;
    }
  }

  h3[class*='Title'] {
    width: 35%;
  }

  div[class*='Text'] {
    width: 55%;
    padding-right: 120px;
  }
`;

export const BlockTemplate5Diff = css`
  ${BlockTemplate5Inverted}

  div[class*='BlockCol'] {
    &:last-child {
      width: 90%;
    }
  }

  h3[class*='Title'] {
    width: 35%;
    margin-left: 10%;
  }

  div[class*='Text'] {
    width: 45%;
  }
`;

export const BlockTemplate5Full = css`
  ${BlockTemplate5}
  padding-right: 0;

  &:before {
    bottom: 0;
    left: 0;
    width: 55%;
    height: 50%;
  }

  div[class*='BlockCol'] {
    &:first-child {
      width: 100%;
      margin: 0;
      padding: 0 10%;
    }

    &:last-child {
      width: 100%;
      margin: 0 0 40px 0;
      transform: none;
    }
  }

  h3[class*='Title'] {
    width: 45%;
    margin-right: 20%;
  }

  div[class*='Text'] {
    width: 35%;
    padding-right: 0;
  }
`;

export const BlockCol = styled.div`
  ${media.lessThan('767px')`
    ${props => props.dataType === 'text' && css`
      padding: 0 30px;
    `}
  `}

  ${media.greaterThan('medium')`
    position: relative;
    z-index: 2;
  `}
`;

export const BlockTitle = styled(Title)`
  display: flex;
  width: 75%;
  max-width: 250px;
  padding: 30px 30px 10px 00px;
  flex-direction: ${({ isLast }) => (isLast ? 'row' : 'column')};
  margin-bottom: 0;
  gap: ${({ isLast }) => (isLast ? ' 8px' : '0px')};

  ${media.greaterThan('767px')`
    width: 50%;
    max-width: 500px;
  `}
`;

export const BlockImage = styled.figure`
  display: block;

  ${media.lessThan('767px')`
    margin-bottom: 40px;
  `}
`;



