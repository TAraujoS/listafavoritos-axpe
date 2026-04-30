import styled, { css } from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  small: "640px",
  medium: "768px",
  large: "1024px",
  huge: "1280px",
})

export const FavoriteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 52px;
  background: #E0DFDF;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const FavoriteHeaderTitle = styled.h3`
  color: #EE6900;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;


export const FavoriteHeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;

   ${media.lessThan("large")`
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    color: #EE6900;
    text-align: center;
    font-family: Bitter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;

    padding: 0 32px;

    svg {
      width: 30px;
      height: 28px;
    }
  `}
`;

export const ShareButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #37474F;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const RemoveList = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #37474F;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FavoriteOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ${media.lessThan("large")`
    justify-content: center;
    gap: 30px;
    padding: 24px 0 28px;
  `}
`;

export const FavoriteListName = styled.h3`
  display: flex;
  align-items: baseline;
  width: fit-content;

  ${media.lessThan("large")`
    width: 100%;
    justify-content: center;
    gap: 8px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);

    svg {
      position: relative;
      top: 6px;
    }
  `}

  p {
    color: #FF6200;
    font-family: Bitter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);

    ${media.lessThan("large")`
      color: #515F66;
      text-align: center;
      font-family: Bitter;
      font-size: 27px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      padding: 0;
      border: none;
    `}
  }
  
`;

export const FavoriteEditIcon = styled.button`
  margin-left: 8px;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const FavoriteListContainer = styled.div`
  padding: 74px 42px 122px;

  > span {
    width: 100%;
    min-width: 100%;
    background: #f5f3f0 !important;
  }

  span img,
  .bg-store-image {
    height: fit-content;
    opacity: 0.3;

    ${media.lessThan("large")`
      opacity: 1;
    `}
  }

  ${media.lessThan("large")`
    padding: 31px 0 0;
  `}

  ${media.greaterThan("large")`
    ${FavoriteHeaderTitleContainer},
    ${FavoriteOptions} {
      display: none;
    }
  `}
`

export const FavoriteListContext = styled.p`
  padding-top: 18px;
  max-width: 489px;
  color: #8C8C8C;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;

  ${media.lessThan("large")`
    text-align: center;
    padding: 0;
  `}
`
export const FavoriteListHeaderTexts = styled.div`
  padding: 0 0 68px 21px; 

  input {
    height: 40px;
    background: transparent;
    color: #FF6200;
    font-family: Bitter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    border: none;
    outline: none;

    ${media.lessThan("large")`
      color: #515F66;
      text-align: center;
      font-family: Bitter;
      font-size: 27px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      padding: 0;
      border: none;
    `}
  }

  ${media.lessThan("large")`
    padding: 24px 32px 22px;
  `}
`;
