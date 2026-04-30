import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const ButtonStyle = css`
  display: inline-block;
  height: 45px;
  border-radius: 4px;
  font: 15px/45px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  text-align: center;
  background-color: ${(props) =>
    !props.color ? props.theme.colors.orange : props.theme.colors[props.color]};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 25px;
  transition: all 300ms ease;

  &[disabled] {
    opacity: 0.2;
    cursor: default;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${media.greaterThan('1024px')`
    &:hover {
      opacity: 0.7;
    }
  `}

  ${(props) => props.size === 'small' && ButtonSmall}
  ${(props) => props.color === 'orange' && ButtonOrange}
`;

export const ButtonSmall = css`
  height: 32px;
  padding: 0 10px;
  line-height: 32px;
`;

export const ButtonOrange = css`
  ${media.greaterThan('1024px')`
    &:hover {
      /* background: black; */
    }
  `}
`;

export const ButtonContainer = styled.button`
  ${ButtonStyle};
`;

export const ButtonLinkContainer = styled.a`
  ${ButtonStyle};
`;
