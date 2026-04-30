import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.greyLight};
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 40px 30px;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: calc(100vh - 80px);
  `}

  ${media.greaterThan('large')`
    padding: 30px 0;
  `}
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 30px;

  ${media.greaterThan('medium')`
    margin-top: auto;
    margin-bottom: 40px;
  `}

  h2 {
    margin-bottom: 30px;
    font: 38px/38px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('medium')`
      font-size: 60px;
      line-height: 40px;
    `}

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.orange};

      ${media.greaterThan('medium')`
        display: inline-block;
      `}
    }
  }

  p {
    font-size: 16px;
    line-height: 20px;

    ${media.greaterThan('medium')`
      font-size: 18px;
      line-height: 25px;
    `}
  }
`;

export const List = styled.ul`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: auto;
  `}

  li {
    margin-bottom: 20px;

    ${media.greaterThan('medium')`
      width: 32%;

      &:nth-child(3n+2) {
        margin-left: 2%;
        margin-right: 2%;
      }
    `}
  }
`;

export const ListButton = styled.a`
  position: relative;
  width: 100%;
  display: block;
  border-radius: 4px;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
    transition: all 300ms ease;
  }

  &:after {
    background: rgba(0, 0, 0, 0.6);
    ${({ theme }) => theme.hide};
  }

  ${media.greaterThan('large')`
    &:hover {
      &:after {
        ${({ theme }) => theme.show};
      }

      div[class*='ListText'] {
        h3 {
          transform: translateY(-50px);
        }

        p {
          transform: translateY(0);
          ${({ theme }) => theme.show};
        }
      }

      &[href*='arquitetura'],
      &[href*='verde'] {
        div[class*='ListText'] {
          h3 {
            transform: translateY(-70px);
          }
        }
      }

      &[href*='especial'] {
        div[class*='ListText'] {
          h3 {
            transform: translateY(-30px);
          }
        }
      }
    }
  `}
`;

export const ListImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const ListText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  text-align: center;
  padding: 0 5px 20px 5px;
  color: ${({ theme }) => theme.colors.white};

  h3 {
    font: 18px/30px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    transition: all 300ms ease;
  }

  p {
    display: none;
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    padding: 0 20px;
    transform: translateY(20px);
    transition: all 300ms ease;

    ${media.greaterThan('large')`
      display: block;
      ${({ theme }) => theme.hide};
    `}
  }
`;
