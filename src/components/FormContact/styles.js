import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Phone from 'components/Phone';
import Button from 'components/Button';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Body = styled.div`
  ${media.greaterThan('medium')`
    margin: 0;
    display: flex;
  `}
`;

export const BlockForm = styled.div`
  padding-top: 30px;

  ${media.greaterThan('medium')`
    width: 50%;
    padding: 60px 30px 30px 30px;
  `}

  ${media.greaterThan('large')`
    padding-left: 5vw;
    padding-right: 5vw;
  `}

  ${props =>
    media.greaterThan('medium') &&
    !props.showHeader &&
    css`
      padding-top: 0 !important;
    `}
`;

export const Message = styled.p`
  font: 14px/22px 'Raleway';
  font-weight: 500;
  padding: 30px;

  ${media.greaterThan('medium')`
    padding: 30px 75px 30px 0;
  `}

  ${props =>
    media.greaterThan('medium') &&
    !props.showHeader &&
    css`
      padding-top: 0 !important;
    `}
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 30px;

  ${media.greaterThan('large')`
    padding-left: 5vw;
    padding-right: 5vw;
  `}
`;

const Phones = css`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 10px;

  ${media.greaterThan('medium')`
    margin-top: 2px;
  `}
`;

export const Tel = styled(Phone)`
  ${Phones}
  margin-right: 40px;
`;

export const Whats = styled(Phone)`
  ${Phones}
`;

export const PhoneNumber = styled.div`
  font: 16px/19px 'Raleway';

  &:last-child {
    margin-left: 10px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  ${media.greaterThan('large')`
    &:last-child {
      margin-left: 20px;
    }
  `}
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: flex-start;

  ${media.greaterThan('medium')`
    justify-content: flex-start;
    margin: auto;
  `}
`;

export const IframeContainer = styled.div`
  padding: 0 30px;

  ${media.greaterThan('medium')`
    padding: 0;
  `}
`;

export const Iframe = styled.iframe`
  display: block;
  width: 100%;
  height: 760px;
`;

export const Form = styled.form`
  padding: 0 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto 30px;

  ${media.greaterThan('medium')`
    padding: 0;
    margin: 0;
  `}
`;

export const FormGroupButton = styled.div`
  width: 100%;
  margin: 15px 0 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const ButtonContainer = styled(Button)`
  width: 100%;
  margin-top: 28px;

  ${media.greaterThan('medium')`
    width: auto;
    margin-top: 0;
  `}
`;

export const Mapa = styled.div`
  width: 100%;
  height: 652px;

  ${media.greaterThan('medium')`
    width: 50%;
    height: 1336px;
  `}
`;

export const Rec = styled.div`
  width: 3px;
  height: 19.93px;
  background: #ee6900;
  border-radius: 1.5px;
`;

export const Circle = styled.div`
  width: 15px;
  height: 13px;
  background: #ee6900;
  border-radius: 50%;
  margin-top: -30px;
  margin-left: -5px;
`;

export const Pin = styled.div``;

export const Balloon = styled.div`
  width: 318px;
  height: 117px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: -150px;
  margin-left: -232px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.160836);
  position: absolute;

  div {
    width: 26px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    transform: rotate(45deg);
    margin-top: 96px;
    margin-left: 211px;
    box-shadow: 7px 3px 6px rgba(0, 0, 0, 0.160836);
  }

  h4 {
    font: 16px/26px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  p,
  a {
    font: 16px/26px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  a {
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
  }
`;
