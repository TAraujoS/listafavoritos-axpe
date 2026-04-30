import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Body = styled.div`
  width: 100%;
  min-height: 70vh;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 990px;
  padding: 0 0 30px 0;

  ${media.greaterThan('medium')`
    padding: 0 30px 60px 30px;
    margin: 0 auto;
    min-height: calc(100vh - 268px);
  `}

  ${media.greaterThan('1280px')`
    padding-left: 0;
    padding-right: 0;
  `}
`;


export const Buildings = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: flex-start;
  `}

  article {
    width: 100%;
    margin-bottom: 30px;

    ${media.greaterThan('medium')`
      max-width: 300px;
    `}
  }
`;

export const Empty = styled.div`
  padding: 30px 0;
  height: calc(100vh - 110px);

  h4 {
    font: ${({ theme }) => theme.fontsWeight.regular} 38px 'Bitter';
    margin-bottom: 20px;
  }

  p {
    font: ${({ theme }) => theme.fontsWeight.medium} 18px/21px 'Raleway';
    max-width: 262px;
  }

  ${media.greaterThan('medium')`
    padding: 100px 20px 150px;
    height: auto;

    h4 {
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
      font-size: 31px;
      line-height: 42px;
      max-width: 471px;
      margin-bottom: 35px;
    }

    p {
      font-size: 16px;
      line-height: 19px;
      max-width: 350px;
    }
  `}
`;
