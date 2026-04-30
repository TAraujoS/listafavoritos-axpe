import styled from 'styled-components';
import media from 'styled-media-query';

export const Button = styled.button`
  display: inline-block;
  position: absolute;
  bottom: 2px;
  right: 0;
  padding-left: 40px;
  font: 14px 'Raleway';
  line-height: 40px;
  text-transform: lowercase;
  text-decoration: underline;
  box-shadow: none;
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease;

  ${media.greaterThan('1024px')`
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  `}
`;
