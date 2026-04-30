import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 110;
  transition: all 300ms ease;

  ${props =>
    props.active ? ({ theme }) => theme.show : ({ theme }) => theme.hide}

  ${props => props.active && props.type === 'search' && ContainerSearch}

  svg {
    display: block;
    width: 83px;
    height: 40px;
    margin: auto;
    transition: all 300ms ease;
  }
`;

export const ContainerSearch = css`
  background: rgba(63, 90, 94, 0.8);
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.orange};
    border-radius: 100%;
  }

  &:before {
    z-index: 100;
    animation: spin 1s infinite;
  }

  &:after {
    border: 8px solid ${({ theme }) => theme.colors.white};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
