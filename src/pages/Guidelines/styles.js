import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  margin-bottom: 20px;

  h1, h2, h3, h4, h5, h6 {
    font: 34px 'Bitter';

    strong {
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  h1 {
    margin-bottom: 20px;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 22px;
  }

  h6 {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
  list-style: inside;

  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.greenDark};

    ${media.greaterThan('large')`
      &:hover {
        text-decoration: underline;
      }
    `}
  }
`
