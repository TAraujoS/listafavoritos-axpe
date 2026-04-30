import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// assets
import CheckedIconSVG from 'assets/icons/checked.svg';

const SizeBig = css`
  width: calc(100% - 5px);
  height: 50px;

  & + span {
    left: 0;
    right: 0;
    text-align: center;
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.green};

    & + span {
      color: ${({ theme }) => theme.colors.white};
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
    }
  }

  ${media.greaterThan('medium')`
    height: 45px;

    & + span {
      margin-top: 0;
    }
  `}
`;

const SizeSmall = css`
  width: 24px;
  height: 24px;

  &:checked {
    border: 1.6px solid ${({ theme }) => theme.colors.orange};
    background: url(${CheckedIconSVG}) no-repeat;
    background-size: contain;
    background-position: 2px;
  }

  & ~ span {
    top: 35% !important;
  }
`;

export const InputCheckbox = styled.input`
  border: 1.6px solid ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  position: initial;

  ${props => props.size === 'small' && SizeSmall};
  ${props => props.size === 'big' && SizeBig};
`;
