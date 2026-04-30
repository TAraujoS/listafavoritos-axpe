import styled from 'styled-components';
import media from 'styled-media-query';
import Slick from '../Slider';

export const SectionContainer = styled.section`
  padding: 18px 14px 0;
  min-height: 560px;
  
  ${media.greaterThan('medium')`
    padding: 40px 50px;
  `}
`;

export const Container = styled(Slick)`
  position: relative;
  width: 100%;


  .slick-slide {
    > div {
      /* margin-left: 10px; */
      ${media.greaterThan('medium')`
        /* margin-left: 20px; */
      `}
 
      &:last-child {
        /* padding-right: 5px; */

      ${media.greaterThan('medium')`
        /* padding-right: 10px; */
      `}
      }
    }
  }
`;

export const Slide = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 4px;

  ${media.greaterThan('medium')`
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
  `}
`;


export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 20px;
  width: 80%;
  max-width: 375px;

  ${media.greaterThan('medium')`
    width: 40%;
  `}

  h4 {
    font: 28px 'Bitter';

    ${media.greaterThan('medium')`
      font-size: 40px;
    `}
  }

  hr {
    width: 50px;
    margin: 25px 0;
  }

  p {
    font: 18px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    margin-bottom: 25px;
  }

  a {
    width: 165px;
    border-radius: 8px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    width: 55%;
    max-width: 480px;
    justify-content: center;
    align-items: center;
  `}
`;
