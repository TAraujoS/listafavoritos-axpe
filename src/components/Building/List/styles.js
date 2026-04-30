import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Button from 'components/Button';

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: calc(100vw - 32px);
  margin: ${props =>
    props.useBtSchedule ? 'auto auto 33px auto' : 'auto auto 20px auto'};
  overflow: hidden;
  border-radius: 6px;
  
  ${props =>
    props.hasDeleted &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 30px;
    `}

  p, h4 {
    color: ${({ theme }) => theme.colors.greenDark};
  }

  ${props =>
  props.page !== 'search' &&
  css`
    width: 100%;
    max-width: 435px;
    margin: 0 0 16px 0;
  `}

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    width: 100%;
    height: ${props =>
      props.useBtSchedule ? (props.hasDeleted ? '45px' : '386px') : '385px'};
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    ${props =>
      props.hasDeleted
        ? css`
            justify-content: flex-start;
            flex-direction: row;
            align-items: center;
          `
        : css`
            justify-content: space-between;
            flex-direction: row-reverse;
          `}
  `}

  ${props =>
    props.page === 'search' && media.greaterThan('large')`
    transition: all 300ms ease;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  `}
`;

export const SliderContainer = styled.div`
  height: 350px;
  position: relative;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    width: 60%;
    height: ${props => props.useBtSchedule ? '386px' : '365px'};
  `}
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  @media (min-width: 768px) {
    ${props =>
    props.page === 'search' && css `
    height: ${props => props.useBtSchedule ? '386px' : '365px'};
  `}}

  .next-image {
    object-fit: cover;
  }
`;

export const SliderItem = styled.article`
  width: 100%;
`;

export const LinkTag = styled.a`
  :hover{
    text-decoration: none;
  }
`;

export const Infos = styled.div`
  display: block;
  padding: 15px 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    padding: 30px;
    margin: auto;
  `}

  ${props =>
    props.page === 'search' && media.greaterThan('1280px')`
    ${props =>
      props.releaseDelivery
        ? css`
            height: calc(100% - 35px);
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 40px;
          `
        : css`
            padding: 30px 40px 30px 40px;
          `}
  `}
`;

export const CatLocGroup = styled.div`
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    align-items: flex-end;

    ${props =>
    props.page === 'search' && media.greaterThan('medium')`
      margin-top: 3px;
    `};

    div {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const CategoryRelease = styled.h4`
  font: 16px/19px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  text-transform: uppercase;
`;

export const Category = styled.h4`
  font: 22px/29px 'Bitter';
  letter-spacing: 1px;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    font-size: 24px;
    line-height: 32px;
  `};
`;

export const Local = styled.h4`
  color: ${({ theme }) => theme.colors.orange} !important;
  font: 18px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  text-transform: uppercase;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    font-size: 16px;
  `};
`;

export const Reference = styled.p`
  font: 14px 'Raleway';
  transform: translateY(-1px);

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    font-size: 12px;
  `};
`;

export const Description = styled.p`
  margin-top: 15px;
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 75px;
  max-height: 85px;
  font: 16px/18px 'Raleway';
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    height: 49px;
    -webkit-line-clamp: 3;
    font-size: 14px;
    line-height: 16px;
  `};

  ${props =>
    props.page === 'search' && media.greaterThan('large')`
    margin-top: 15px;
  `}
`;

export const ReleaseDelivery = styled.p`
  font: 14px 'Raleway';
  background-color: ${({ theme }) => theme.colors.grey};
  height: 35px;
  position: absolute;
  width: 40%;
  margin-top: ${props => (props.useBtSchedule ? '350px' : '330px')};
  margin-left: -60%;
  color: ${({ theme }) => theme.colors.greenDark};
  text-align: center;
  line-height: 35px;

  span {
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }
`;

const CenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CaracteristicsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  div {
    margin-top: 7px !important;
    height: 35px;
    flex: 0 50%;

    p {
      font-size: 16px;
    }
  }

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    div {
      margin-top: 20px;
      height: 31px;
      flex: 0 50%;
    }

    p{
      font-size: 14px !important;
      line-height: 18px !important;
    }
  `};
`;

export const ValuesFavGroup = styled.div`
  ${CenterBetween};
  margin-top: 15px;
  margin-bottom: 4px;

  p {
    letter-spacing: 0.46px;
    line-height: 18px !important;
  }

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    margin-top: 20px;
  `}

  ${props =>
    props.page === 'search' && media.greaterThan('large')`
    margin-top: 20px;
    margin-bottom: 15px;
  `}
`;

export const FavoriteButton = styled.button`
  width: 20px;
  transition: all 300ms ease;

  &:active {
    transform: scale(0.9);
  }

  svg {
    display: block;
    width: 20px;

    path {
      transition: all 300ms ease;
    }
  }

  ${props => props.active && css`
    svg path {
      stroke: ${({ theme }) => theme.colors.orange};
      fill: ${({ theme }) => theme.colors.orange};
    }
  `}

  ${props =>
    props.page === 'search' && media.greaterThan('large')`
    &:hover {
      svg path {
        stroke: ${({ theme }) => theme.colors.orange};
      }
    }
  `}
`;

export const Price = styled.p`
  width: 100%;
  font: 18px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  line-height: 28px;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    font-size: 16px;
  `};
`;

export const RemoveButton = styled(Button)`
  height: 27px;
  font-size: 11px;
  line-height: 27px;
  padding: 0 18px;
  position: absolute;
  border-radius: 0 0 0 6px;
  right: 0;
  margin-top: -259px;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    margin-top: 0;
    top: 0;
    right: 60%;
  `}
`;

export const ScheduleButton = styled(Button)`
  width: 100%;
  margin-top: 7px;
  line-height: 35px;
  height: 35px;
  padding: 0 10px;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    width: 190px;
  `}
`;

export const UndoButton = styled(Button)`
  width: 100%;
  line-height: 35px;
  height: 35px;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    padding: 0 40px;
    width: auto;
  `}
`;

export const MessageSuccess = styled.p`
  font: 18px 'Raleway';
  margin-bottom: 20px;

  ${props =>
    props.page === 'search' && media.greaterThan('medium')`
    font-size: 16px;
    margin-left: 67.5px;
    margin-right: 31.5px;
    margin-bottom: 0;
  `}
`;
