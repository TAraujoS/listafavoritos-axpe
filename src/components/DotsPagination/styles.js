import styled from 'styled-components';

export const DotsContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 4;
`;

export const DotItem = styled.li`
  margin: 0 5px;
`;

export const DotButton = styled.button`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: ${props =>
    props.active ? props.theme.colors.greenDark : props.theme.colors.grey2};
  opacity: 1;
  cursor: pointer;
  transition: background-color 0.3s, width 0.3s, height 0.3s;
`;