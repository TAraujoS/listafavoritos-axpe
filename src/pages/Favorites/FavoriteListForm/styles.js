import styled, { css } from "styled-components";

import media from "./media";

export const FavoriteSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  background: #F5F3F0;
  padding: 95px 0;

  ${media.lessThan("large")`
    padding: 49px 28px 95px;
  `}

  .search-component-favorite-fill-icon {
    width: 54px;
    height: 49px;
    
  }

  .search-component-favorite-title {
    max-width: 376px;
    color: #37474F;
    text-align: center;
    font-family: Raleway;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }

  .search-component-favorite-text {
    color: #37474F;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  .search-component-favorite-form {
    display: flex;
    align-items: center;
    flex-direction: column;

    ${media.lessThan("large")`
      width: 100%;
    `}  
  }

  .search-component-favorite-label {
    color: #37474F;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  .search-component-favorite-input {
    margin: 12px 0 32px;
    width: 359px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid #FF6200;
    background: #EEEBE7;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25) inset;
    outline: none;
    color: #515F66;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;

    ${media.lessThan("large")`
      width: 100%;
    `}
  }

  .search-component-favorite-submit-button {
    border-radius: 8px;
    border: 2px solid #FF6200;
    background: #FF6200;
    width: 162px;
    height: 42px;
    box-sizing: border;

    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;

    transition: .4s;
  }

  .search-component-favorite-submit-button:hover {
    background: #FFF;
    color: #FF6200;
  }
`;