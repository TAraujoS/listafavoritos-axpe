import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 10vmin 5vmin;
  text-align: center;

  ${media.greaterThan('medium')`
    padding: 7vmin 5vmin 0 5vmin;
  `}

  ${media.greaterThan('large')`
    padding: 80px 130px 0 130px;
  `}

  h1 {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.3rem;
    letter-spacing: 0.2vmin;
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    position: relative;
    margin-bottom: 3rem;

    ${media.greaterThan('large')`
      margin-bottom: 4rem;
    `}

    span {
      color: ${({ theme }) => theme.colors.greenDark};
      font-weight: ${({ theme }) => theme.fontsWeight.medium};
      margin-top: 1rem;
      display: block;
      font-size: 7.7vmin;
      font-family: 'Bitter';

      ${media.greaterThan('medium')`
          font-size: 6vmin;
        `}

      ${media.greaterThan('large')`
          font-size: 7.7vmin;
        `}
    }

    &:after {
      content: '';
      width: 200px;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.orange};
      position: absolute;
      top: 115%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    font-family: 'Raleway';
    font-size: 0.9rem;
    margin: 0 auto;

    ${media.greaterThan('large')`
      font-size: 1.1rem;
      max-width: 60%;
    `}
  }
`;

export const List = styled.main`
  padding: 0 5vmin 10vmin 5vmin;

  ${media.greaterThan('medium')`
      padding: 0 5vmin 7vmin 5vmin;
  `}

  ${media.greaterThan('large')`
    padding: 70px;
    text-align: left;
  `}

  h2 {
    color: ${({ theme }) => theme.colors.greenDark};
    font-size: 5vmin;
    max-width: 800px;
    line-height: 1.2;
    letter-spacing: 0.2vmin;
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    margin-bottom: 1rem;

    ${media.greaterThan('large')`
      margin-bottom: 4rem;
    `}

    span {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const Footer = styled.footer`
  padding: 0 50px 50px 50px;
  text-align: left;

  ${media.greaterThan('medium')`
    padding-bottom: 70px;
  `}

  ${media.greaterThan('large')`
    padding: 0 130px 80px 130px;
  `}

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.greenDark};
    line-height: 1.2;
    letter-spacing: 0.2vmin;
    font-family: 'Bitter';
    margin-bottom: 1rem;
  }

  .slick-arrow {
    height: auto;
    top: 45%;
    z-index: 2;

    &:before {
      color: ${({ theme }) => theme.colors.greenDark};
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
      font-size: 3rem;
      line-height: 3rem;
    }
  }

  .slick-prev {
    left: -5px;

    &:before {
      content: '‹';
    }
  }

  .slick-next {
    right: -5px;

    &:before {
      content: '›';
    }
  }

  .slick-slide {
    padding: 0 1.5rem;
  }

  .item {
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    min-height: 170px;
    border-radius: 4px;
    text-align: center;

    ${media.greaterThan('medium')`
      width: 30vw;
      min-height: 16vw;
    `}

    ${media.greaterThan('1024px')`
      width: 22.5vw;
      min-height: 16vw;
    `}

    ${media.greaterThan('large')`
      width: 20vw;
      min-height: 16vw;
    `}

    &:hover {
      h3 {
        margin-top: 40%;
        top: 1rem;
      }

      a:before {
        opacity: 0.5;
      }

      p {
        opacity: 1;
      }
    }

    a {
      display: flex;
      position: relative;
      z-index: 1;
      min-height: 170px;
      flex-flow: column;
      align-items: center;
      background-size: cover;
      background-position: center;
      box-shadow: inset 0 -50px 80px rgba(0,0,0,.5);

      ${media.greaterThan('medium')`
        min-height: 16vw;
      `}

      &:before {
        content: '';
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.orange};
        transition: all .2s linear;
        z-index: -1;
      }
    }

    h3 {
      color: white;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 35%;
      margin-bottom: 0.4rem;
      transition: all .15s linear;
      font-family: 'Bitter';
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
      position: relative;

      ${media.greaterThan('medium')`
        margin-top: 20%;
      `}

      ${media.greaterThan('1024px')`
        margin-top: 35%;
      `}

      ${media.greaterThan('large')`
        margin-top: 45%;
        top: 2.5rem;
      `}
    }

    p {
      color: white;
      font-size: .9rem;
      width: 90%;
      transition: all .2s linear;
      font-family: 'Bitter';
      font-weight: ${({ theme }) => theme.fontsWeight.medium};
      position: relative;

      ${media.greaterThan('medium')`
       font-size: .85rem;
     `}

      ${media.greaterThan('large')`
         opacity: 0;
         top: 1.3rem;
         font-size: .9rem;
     `}
    }
  }
`;

export const FooterListItemLink = styled.a``;
