import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight};
  text-align: center;
  padding: 18px;

  ${media.greaterThan('medium')`
    display: none;
  `}

  p {
    color: ${({ theme }) => theme.colors.greenDark};

    a {
      color: ${({ theme }) => theme.colors.greenDark};
    }

    &:nth-child(1) {
      font: 18px/16px 'Bitter';
    }

    &:nth-child(2) {
      font: 20px/25px 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
    }

    &:nth-child(3) {
      font: 12px/12px 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.medium};
    }
  }
`;
