import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.a`
  display: flex;
  font: 13px/18px 'Raleway';
  color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

  img {
    width: 20px;
    margin-right: 5px;
  }

  ${media.greaterThan('370px')`
    font-size: 15px;
  `}
`;
