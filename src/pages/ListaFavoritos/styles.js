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
