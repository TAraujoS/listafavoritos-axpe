import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.greenDarker};
  color: ${({ theme }) => theme.colors.white};

	font-weight: 500;
	font-size: 18px;
  text-align: left;

	position: fixed;
  width: 100vw;
  padding: 30px 30px;
	bottom: 0;
	right: 0px;
  z-index: 99;

	transition: transform .2s, opacity .2s;

	&:not(.active) {
		opacity: 0;
		transform: translateY(100%);
	}

  ${media.greaterThan('medium')`
    border: none;
    width: calc(100% - 200px);
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.orange};
	color: ${({ theme }) => theme.colors.white};
	height: 45px;
	border-radius: 6px;
	display: block;
	padding: 0 40px;
	text-transform: uppercase;
	
	margin: 20px auto 0;

  ${media.greaterThan('large')`
		margin: 0 0 0 20px;
	`}
`;