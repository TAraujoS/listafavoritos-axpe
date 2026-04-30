import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Gallery from './Gallery';

export const Images = styled(Gallery)`
  margin-bottom: 2px;

  ${media.greaterThan('medium')`
    padding-top: 20px;
  `}
`;

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Alert = styled.div`
  max-width: 974px;
  margin: auto;
  padding: 20px;

  p {
    color: ${({ theme }) => theme.colors.greenDark};
    text-align: center;
    font: 12px 'Bitter';
  }
`;

export const Module = styled.div`
  margin-bottom: 30px;

  ${props => props.type === 'plantas' && css`
    ${media.greaterThan('medium')`
      margin-bottom: 60px;
    `}
  `}
`;

export const SimilarBuildings = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '1060px')};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      span img {
        opacity: 1;
      }
    `}
`;

export const SimilarBuildingsHeader = styled.header`
  margin-bottom: 20px;
  ${media.greaterThan('medium')`
    padding-left: 16px;
  `}
  
  h3 {
    font: 22px/26px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('large')`
      font-size: 41px;
      line-height: 49px;
    `}
  }
`;

export const SimilarBuildingsList = styled.div`
  ${media.greaterThan('medium')`
    width: 100%;
    display: flex;
    gap: 16px;
  `}
`;
