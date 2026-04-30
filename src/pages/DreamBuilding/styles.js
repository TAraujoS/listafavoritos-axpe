import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.greyLight};

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 40px 30px;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  ${media.greaterThan('large')`
    padding: 20px 0;
  `}
`;

export const Header = styled.header`
  margin-bottom: 30px;

  ${media.greaterThan('medium')`
    margin-bottom: 20px;
  `}

  h2 {
    margin-bottom: 30px;
    font: 25px/30px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};

    ${media.greaterThan('medium')`
      margin-bottom: 15px;
      font-size: 40px;
      line-height: 48px;
    `}

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  p {
    font-size: 15px;
    line-height: 17px;

    ${media.greaterThan('medium')`
      font-size: 17px;
    `}
  }
`;

export const List = styled.ul`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
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
          transform: translateY(-20px);
        }

        p {
          transform: translateY(0);
          ${({ theme }) => theme.show};
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
  padding: 0 5px 30px 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};

  h3 {
    margin-bottom: 10px;
    font: 24px/30px 'Bitter';
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
