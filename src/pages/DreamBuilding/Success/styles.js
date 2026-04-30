import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  padding: 30px;
  background: ${({ theme }) => theme.colors.greyLight};

  ${media.greaterThan('medium')`
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
  `}

`;

export const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 950px;

  ${media.greaterThan('medium')`
  `}

  h2 {
    margin-bottom: 20px;
    max-width: 830px;
    font: 34px/41px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('medium')`
      margin-bottom: 30px;
    `}

    ${media.greaterThan('large')`
      font-size: 50px;
      line-height: 61px;
    `}

    strong {
      color: ${({ theme }) => theme.colors.orange};
    }

    span {
      display: block;
      font-size: 22px;

      ${media.greaterThan('medium')`
        display: inline-block;
      `}
    }
  }

  p {
    max-width: 540px;
    font: 22px/26px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};

    ${media.greaterThan('large')`
      font-size: 27px;
      line-height: 38px;
    `}
  }
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 30px;
  font: 14px 'Raleway';
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ theme }) => theme.colors.orange};

  ${media.greaterThan('medium')`
    margin-top: 80px;
  `}
`;