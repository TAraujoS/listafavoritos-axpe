import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Wrapper = styled.div`
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  ${media.greaterThan('large')`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const Header = styled.header`
  padding: 30px 0;
  background: ${({ theme }) => theme.colors.green };
  color: ${({ theme }) => theme.colors.white};

  ${media.greaterThan('large')`
    padding: 70px 0;
  `}

  h2 {
    margin-bottom: 5px;
    font-weight: ${({ theme }) => theme.fontsWeight.black};
    font-size: 28px;
    color: ${({ theme }) => theme.colors.orange};

    ${media.greaterThan('large')`
      font-size: 41px;
      line-height: 49px;
    `}
  }

  h3 {
    font: ${({ theme }) => theme.fontsWeight.regular} 28px/33px 'Bitter';

    ${media.greaterThan('large')`
      font-size: 32px;
      line-height: 49px;
    `}

    &:after {
      content: '';
      display: block;
      width: 75px;
      height: 3px;
      margin-top: 15px;
      background: ${({ theme }) => theme.colors.orange};

      ${media.greaterThan('large')`
        height: 4px;
      `}
    }
  }
`;

export const Body = styled.div`
  padding: 35px 0;

  ${media.greaterThan('large')`
    padding: 60px 0;
  `}
`;

export const Box = styled.div`
  &:not(:last-child) {
    padding-bottom: 30px;
    border-bottom: 2px solid rgba(250, 100, 0, 0.4);
    margin-bottom: 30px;
  }

  ${media.greaterThan('large')`
    &:not(:last-child) {
      padding-bottom: 40px;
      margin-bottom: 50px;
    }
  `}
`;

export const BoxHeader = styled.header`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.green};

  h4 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('large')`
      font-size: 32px;
      line-height: 26px;
    `}
  }

  p {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.6px;
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('large')`
      font-size: 16px;
    `}
  }
`;

export const BoxWrapper = styled.div``;

export const ListItems = styled.ul`
  display: block;
  width: 100%;

  ${media.greaterThan('large')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}

  li {
    margin-bottom: 15px;
    width: 100%;

    ${media.greaterThan('large')`
      width: 48%;

      &:nth-child(2n+2) {
        margin-left: auto;
      }
    `}
  }

  a {
    font-size: 15px;
    letter-spacing: 0.6px;
    color: ${({ theme }) => theme.colors.black};

    ${media.greaterThan('large')`
      &:hover {
        text-decoration: underline;
      }
    `}
  }
`;

export const Letter = styled.article`
  &:not(:last-child) {
    padding-bottom: 30px;
    border-bottom: 1px solid #b8b8b8;
    margin-bottom: 30px;
  }
`;

export const LetterTitle = styled.h5`
  margin-bottom: 20px;
  text-transform: uppercase;
  font: ${({ theme }) => theme.fontsWeight.regular} 32px 'Bitter';
  color: ${({ theme }) => theme.colors.orange};

  ${media.greaterThan('large')`
    margin-bottom: 35px;
  `}
`;

export const LetterPlaces = styled.div`
  ${media.greaterThan('large')`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const LetterPlace = styled.article`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const LetterPlaceTitle = styled.h5`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ theme }) => theme.colors.green};
  letter-spacing: 0.6px;

  ${media.greaterThan('large')`
    margin-bottom: 20px;
  `}
`;
