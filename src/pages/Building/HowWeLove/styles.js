import styled from 'styled-components';
import media from 'styled-media-query';
import ICheck from 'assets/icons/checked-grey.svg';

export const Container = styled.div`
  width: 100vw;
  padding-bottom: 40px;
  background-color: #91a8ab;
  margin-bottom: 20px;

  ${media.greaterThan('medium')`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 50px;
    border-radius: 6px;
  `}
`;

export const Title = styled.h3`
  padding: 30px 40px;
  max-width: 420px;
  font: 40px/48px 'Bitter';

  span {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.green};
    font: 40px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }

  ${media.greaterThan('medium')`
    padding: 45px 0 53px 88px;
    line-height: 48px;
    width: 342px;
    height: 248.2px;
  `}
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin: 0 16px;
  margin-bottom: 20px;
  gap: 10px;

  ${media.greaterThan('medium')`
    width: 96%;
    max-width: 1060px;
    padding: 16px 20px;
    margin: 0 auto 12px;
  `}

  h2 {
    color: ${({ theme }) => theme.colors.orange};
    font: 18px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }

  .building-lovely-item {
    display: flex !important;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 4px;

    &:before {
      content: '';
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }

    h3,
    p {
      width: 100%;
    }

    h3 {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.green};
      font: 16px/18px 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
      height: 20px;
      display: flex;
      align-items: flex-start;
      align-items: center;
      position: relative;
      padding-left: 22px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 3px;
        width: 14px;
        height: 14px;
        background-image: url(${ICheck});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.green};
      font: 16px/18px 'Raleway';
    }
  }
`;

export const ContainerBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;

  p {
    color: ${({ theme }) => theme.colors.greenDark};
    font: 16px/19px 'Raleway';
  }
`;

export const CharacteristicItem = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 14px;
    height: 14px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.green};
    font: 16px/18px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    height: 20px;
    margin-left: 10px;
  }
`;

export const Reasons = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;

  ${media.greaterThan('medium')`
    width: 90%;
    overflow: visible;
  `}

  .slick-slider > button {
    &:first-of-type {
      left: -5px;

      ${media.greaterThan('medium')`
        left: -30px;
      `}
    }

    &:last-of-type {
      right: -5px;

      ${media.greaterThan('medium')`
        right: -30px;
      `}
    }
  }

  .building-lovely-item {
    position: relative;
    margin: auto;
    display: flex !important;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 260px;
    /* height: 270px; */
    padding: 30px 15px;

    ${media.greaterThan('medium')`
      width: 160px;
      /* height: 350px; */
      height: auto;
      padding: 14.02px 27.03px;
    `}

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 7px;
      background-color: ${({ theme }) => theme.colors.greyLight};
      z-index: 1;
      transform: translateX(-50%);

      ${media.greaterThan('medium')`
        width: calc(100% - 20px);
      `}
    }

    h3,
    p {
      position: relative;
      width: 100%;
      z-index: 2;
    }

    h3 {
      margin-bottom: 15px;
      color: ${({ theme }) => theme.colors.green};
      font: 16px/18px 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
      height: 40px;
      display: flex;
      align-items: flex-start;

      ${media.greaterThan('medium')`
        height: 50px;
      `}
    }

    p {
      color: ${({ theme }) => theme.colors.green};
      font: 16px/18px 'Raleway';

      ${media.greaterThan('medium')`
        /* display: block;
        display: -webkit-box;
        height: 240px;
        -webkit-line-clamp: 12;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; */
      `}
    }
  }
`;
