import styled from 'styled-components';
import media from 'styled-media-query';
import ArrowIconSVG from 'assets/icons/arrow.svg';

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.searchTab ? '100%' : '50%'};
  
  ${props =>
    !props.searchTab &&
    media.greaterThan('medium')`
      display: none;
    `}
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${props => props.searchTab ? 'space-between' : 'space-evenly'};
  width: 100%;
  height: 38px;
  font: ${props => props.searchTab || props.searchFilter ? '12px' : '14px'} 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ searchTab, theme }) => searchTab ? theme.colors.orange : theme.colors.green};
  text-align: left;
  background: ${({ searchTab, theme }) => searchTab ? theme.colors.white : 'transparent'};
  cursor: pointer;
  padding: 10px;
  border-radius: ${props => props.searchTab ? '4px' : props.searchFilter ? '4px' : '0px'}; ;
  text-transform: ${props => props.searchTab || props.searchFilter ? 'uppercase' : 'capitalize'};

  border: ${({ searchFilter, theme }) =>
    searchFilter
      ? `1px solid ${theme.colors.green}`
      : `none`};

  border-bottom: ${({ searchFilter, theme }) =>
    searchFilter ? `1px solid ${theme.colors.green}` : `1px solid ${theme.colors.green}`};

  ${({ searchFilter, theme, searchTab, open }) =>
    !searchFilter &&
    `
    &:after {
      content: '';
      display: block;
      width: 13px;
      height: 13px;
      margin-left: 10px;
      mask: url(${ArrowIconSVG}) no-repeat center;
      mask-size: contain;
      background-color: ${searchTab ? theme.colors.orange : theme.colors.green};
      transform: ${open ? 'rotate(270deg)' : 'rotate(90deg)'};
      transition: all 300ms ease;
    }
  `}
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  list-style: none;
  margin-top: 2px;
  padding: 0;
  z-index: 10;
`;

export const OptionItem = styled.li`
  padding: 10px 16px;
  font: ${props => props.searchTab ? '12px' : '14px'} 'Raleway';
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  
  &:hover {
    background: transparent; 
    color: ${({ theme }) => theme.colors.orange}; 
  }
`;