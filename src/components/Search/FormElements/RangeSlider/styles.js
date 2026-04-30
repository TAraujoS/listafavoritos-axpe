import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Slider = styled.div`
  width: 100%;

  &.noUi-horizontal {
    height: 12px;
    border: 0;
    background: transparent;
    box-shadow: none;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${({ theme }) => theme.colors.orange};
      opacity: 0.4;
      border-radius: 4px;
    }
  }

  .noUi-handle {
    display: block;
    width: 15px;
    height: 15px;
    top: 0px !important;
    right: -6px !important;
    border: 0;
    font-size: 0;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
    box-shadow: none;
    z-index: 5;
    cursor: pointer;

    &:before,
    &:after {
      display: none;
    }
  }

  .noUi-connect {
    position: absolute;
    background: ${({ theme }) => theme.colors.white};

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${({ theme }) => theme.colors.orange};
      border-radius: 4px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 10px;

  :first-child {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blueDark};
  gap: 4px;
  height: 40px;
`;

export const PrefixSpan = styled.span`
  font: 12px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  white-space: nowrap;
`;

export const SuffixSpan = styled.span`
  font: 12px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  white-space: nowrap;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font: 12px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  ::placeholder {
    color: ${({ theme }) => theme.colors.green};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.orange};
  }
`;

export const InputLabel = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  text-align: start;
  &.right {
    text-align: end;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const RangeButton = styled.button`
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  background: ${({ active, theme }) => (active ? theme.colors.green : 'transparent')};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.green)};
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`;
