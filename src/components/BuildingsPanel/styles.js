import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  position: relative;
  padding-left: 4px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 40px 12px;
  margin-right: 16px;
  place-self: center;
  
  ${props => props.type === 'building' && css`
    max-width: 994px;
  `}

  ${media.greaterThan('large')`
    padding: 25px 50px;
  `}

`;

export const Header = styled.header`
  margin-bottom: 14px;

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
  `}

  h3 {
    font: 22px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    color: ${({ theme }) => theme.colors.green};
    text-align: start;

    ${media.greaterThan('medium')`
      font-size: 40px;
      line-height: 48px;
    `}

    strong {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  p {
    display: none;
    max-width: 280px;
    margin-left: 30px;
    padding-left: 30px;
    font-size: 16px;
    line-height: 19px;
    border-left: 2px solid ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontsWeight.light};

    ${media.greaterThan('medium')`
      display: block;
    `}

    ${media.greaterThan('large')`
      border-left-width: 4px
    `}
  }

  ${props => props.headerBig && css`
    h3 {
      text-align: left;
    }
  `}
`;

export const Items = styled.div`
  position: relative;
  width: 100%;

  ${media.greaterThan('medium')`
    ${props => props.layout && props.layout === 'vertical' && css`
      &[data-quantity="1"] {
        .slick-list {
          max-height: 292px;
        }
      }

      .slick-list {
        max-height: 584px;
      }
    `}
  `}

  .slick-track {
    display: flex;
    /* gap: 16px; */

    ${media.lessThan('medium')`
      gap: 0;

      > div {
        margin-right: 16px;
  
      }
    `}
  }

  .slick-slide {
    ${media.greaterThan('medium')`
      flex-shrink: 0;
      padding: 0 8px; 
    `}
  }

  .slick-dots {
    position: absolute;
    width: 100%;
    display: flex !important;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 5;
  }

  .slick-dots li {
    margin: 0 5px;
    width: 12px;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 12px !important;
    height: 12px !important;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.grey2};
    border: none;
    cursor: pointer;

    &::before {
      display: none
    }
  }

  .slick-dots li.slick-active button {
    background: ${({ theme }) => theme.colors.green};
  }
`;