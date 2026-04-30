import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font: 16px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  box-shadow: none;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.green};
  }
`;
