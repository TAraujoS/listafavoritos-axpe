import styled from 'styled-components';
import media from 'styled-media-query';
import Slider from 'components/Slider';

export const Container = styled(Slider)`
  max-width: 1000px;
  margin: auto;

  img,
  iframe {
    width: 100vw;
    height: 376px;
    object-fit: cover;

    ${media.greaterThan('medium')`
      max-width: 1000px;
      height: 385px;
    `}
  }
`;

export const Title = styled.h1`
  font: 22px/28px 'Bitter';
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;

  ${media.greaterThan('medium')`
    font: 20px/25px 'Bitter';
    margin-right: 60px;
  `}
`;

export const Text = styled.p`
  font: 18px/25px 'Raleway';
  color: ${({ theme }) => theme.colors.white};

  ${media.greaterThan('medium')`
    font: 16px/23px 'Raleway';
  `}
`;

export const GroupText = styled.div`
  background-color: ${({ theme }) => theme.colors.greenDark};
  padding: 20px 30px;

  ${media.greaterThan('medium')`
    display: flex;
  `}
`;
