import styled from 'styled-components';
import media from 'styled-media-query';
import Button from 'components/Button';
import Phone from 'components/Phone';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vw;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99;

  ${media.greaterThan('medium')`
    border: none;
    width: calc(100% - 200px);
    top: 0;
  `}
`;

export const MoreInfo = styled(Button)`
  height: 32px;
  font-size: 13px;
  line-height: 32px;
`;

export const NumberPhone = styled(Phone)`
  width: auto;
  margin-left: 10px;
`;

export const Category = styled.p`
  font: 18px/32px 'Bitter';

  ${media.greaterThan('medium')`
    margin-right: 20px;
  `}
`;

export const Local = styled.p`
  font: 14px/28px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;
`;

export const InfoLeft = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;

    ${media.greaterThan('medium')`
      flex-direction: row;
      align-items: center;
    `}
  }
`;

export const InfoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.greaterThan('medium')`
    justify-content: space-between;
  `};

  ${media.lessThan('medium')`
    span, button, a {
      display: none;
    }
  `};
`;

export const Reference = styled.span`
  font: 14px 'Bitter';
  margin-right: 30px;
`;

export const FavoriteMobile = styled.img`
  ${media.greaterThan('medium')`display: none;`}
  width: 25px;
`;

export const FavoriteDesktop = styled.div`
  ${media.lessThan('medium')`display: none;`}

  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font: 13px/15px 'Bitter';
  }

  img {
    width: 20px;
    margin-left: 2px;
  }
`;

export const BackMobile = styled.button`
  ${media.greaterThan('medium')`display: none;`}
`;
export const BackDesktop = styled.button`
  ${media.lessThan('medium')`display: none;`}

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;

  span {
    font: 14px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    color: ${({ theme }) => theme.colors.orange};
    text-transform: uppercase;
  }
  img {
    height: 16px;
  }
`;
