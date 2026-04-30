import styled from 'styled-components';

export const BaseInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font: 12px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  border: 0;
  box-shadow: none;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.green};
  }
`;
