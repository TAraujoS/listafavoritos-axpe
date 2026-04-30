import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div``;

export const BuildingsContainer = styled.div`
  padding: 50px 0 30px 0;
  background: ${({ theme }) => theme.colors.greyLight};

  ${media.greaterThan('medium')`
    padding: 0 30px 60px 30px;
  `}

  ${media.greaterThan('1280px')`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const BuildingsWrapper = styled.div`
  width: 100%;
  max-width: 954px;

  ${media.greaterThan('medium')`
    margin: 0 auto;
    min-height: calc(100vh - 268px);
  `}
`;