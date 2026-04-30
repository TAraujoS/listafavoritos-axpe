import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  text-align: center;
  font-family: 'Bitter';
  padding: 30px;
  padding-bottom: 70px;

  ${media.greaterThan('large')`
    padding: 30px;
  `}

  a {
    color: ${({ theme }) => theme.colors.green};
    font-weight: ${({ theme }) => theme.fontsWeight.light};
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Copy = styled.p`
  margin-bottom: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fontsWeight.light};

  ${media.greaterThan('large')`
    margin: 0 auto;

    span {
      display: inline-block;
    }
  `}
`;
