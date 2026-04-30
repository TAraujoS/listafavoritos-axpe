import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Button from 'components/Button';

const ContainerContact = css`
  padding: 0;
  min-height: auto;
  margin: auto;

  ${media.greaterThan('medium')`
    justify-content: flex-start;
  `}
`;

const ContainerContactWork = css`
  padding: 30px;

  ${media.greaterThan('medium')`
    justify-content: flex-start;
    border-radius: 8px;
    width: 100%;

    p {
      max-width: 280px;
    }
  `}
`;

const ContainerLanding = css`
  p {
    max-width: 275px;
  }

  ${media.greaterThan('medium')`
    p {
      max-width: 330px;
    }
  `}
`;

const ContainerRegisterProperty = css`
  padding: 40px 30px;
  min-height: auto;
  margin: auto;

  ${media.greaterThan('medium')`
    padding: 139px 119px;
    height: 451px;
    margin: 0;
    justify-content: flex-start;
  `}
`;

const ContainerRegisterPropertyWhite = css`
  background: none;
  min-height: 170px;
  width: 80%;
  margin: auto;
  padding: 30px 0;

  ${media.greaterThan('1024px')`
    padding: 60px 0 66px 10px;
    max-width: 955px;
    width: 100%;
  `}
`;

const ContainerVisitedBuildings = css`
  background: none;
  min-height: inherit;
  width: 100%;
  padding: 30px;

  hr {
    max-width: 55px;
    margin: 0;
  }

  ${media.greaterThan('medium')`
    justify-content: flex-start;
    padding: 60px 50px;
  `}

  ${media.greaterThan('1024px')`
    padding: 60px 30px;
  `}

  ${media.greaterThan('large')`
    padding: 60px 80px;
  `}
`;

const ContainerPlanta = css`
  ${media.greaterThan('medium')`
    max-width: 1000px;
    margin: auto;
    border-radius: 8px;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 152px;
  padding: 40px 20px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.blueDark};

  div {
    margin-top: 10px;
  }

  p {
    max-width: ${({ type }) => (type === 'dream' ? '225px' : '170px')};
    font: 13px 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 24px;
  }

  ${media.greaterThan('medium')`
    justify-content: center;
    flex-direction: row;
    align-items: center;
  `}

  ${(props) => props.type === 'contact' && ContainerContact}
  ${(props) => props.type === 'contactWork' && ContainerContactWork}
  ${(props) => props.type === 'landing' && ContainerLanding}
  ${(props) => props.type === 'registerProperty' && ContainerRegisterProperty}
  ${(props) =>
    props.type === 'visitedBuildings' && ContainerVisitedBuildings}
  ${(props) => props.type === 'planta' && ContainerPlanta}
  ${(props) =>
    props.type === 'registerPropertyWhite' && ContainerRegisterPropertyWhite}
  ${(props) =>
    props.type === 'notfound' &&
    media.greaterThan('medium')`
    margin-top: 60px;
  `}

  ${(props) =>
    [ 'notfound', 'landing', 'registerPropertyTransform' ].includes(props.type) &&
    css`
      background-color: ${({ theme }) => theme.colors.greenDark};
    `}
`;

const ContactHome = css`
  width: 100%;
  max-width: 180px;

  span {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};

    &:nth-child(3) {
      color: ${({ theme }) => theme.colors.orange};
      font-family: 'Bitter';
      font-weight: ${({ theme }) => theme.fontsWeight.black};
    }
  }
`;

const Contact = css`
  width: 100% !important;
  margin: 0 !important;

  hr {
    width: 55px;
    margin: 30px 0;
  }

  span {
    font-size: 22px;
    line-height: 28px;

    ${media.greaterThan('medium')`
      font-size: 41px;
      line-height: 49px;
    `}

    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.greenLight};
      font-family: 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.black};
    }

    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.white};
      font-family: 'Bitter';
      font-weight: ${({ theme }) => theme.fontsWeight.regular};
    }
  }

  ${media.greaterThan('large')`
    max-width: 780px;
    margin: 0;
  `}
`;

const ContactWork = css`
  width: 300px;

  span {
    font-size: 24px;
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
    color: ${({ theme }) => theme.colors.white};
    line-height: 28px;

    ${media.greaterThan('medium')`
      font-size: 40px;
      line-height: 47px;
    `}
  }

  strong span {
    color: ${({ theme }) => theme.colors.orange};
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.black};
  }

  div a div {
    width: 192px;
  }
`;

const NotFound = css`
  width: 100%;
  max-width: 300px;

  span {
    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.white};
      font-family: 'Bitter';
      font-weight: ${({ theme }) => theme.fontsWeight.regular};
    }

    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.orange};
      font-family: 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.black};
    }
  }
`;

const Planta = css`
  width: 257px;
  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
  strong span {
    color: ${({ theme }) => theme.colors.greenLight};
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
  }
`;

const Dream = css`
  font-size: 40px;
  line-height: 47px;
  ${media.greaterThan('medium')`margin-right: 125px;`}

  span {
    display: block;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.orange};
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }

  p {
    font-size: 0.95rem;
  }
`;

const Landing = css`
  width: 290px;
  font-size: 40px;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  strong {
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.black};
    color: ${({ theme }) => theme.colors.greenLight};

    &:last-of-type {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const RegisterProperty = css`
  width: 100%;
  max-width: 316px;

  span {
    color: ${({ theme }) => theme.colors.white};
    font: 22px/27px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  strong span {
    color: ${({ theme }) => theme.colors.greenLight};
    font-weight: ${({ theme }) => theme.fontsWeight.black};
    font-family: 'Raleway';
  }

  hr {
    width: 55px;
    margin: 30px 0;
  }

  ${media.greaterThan('medium')`
    max-width: 497px;
    margin: 0;

    span {
      font-size: 41px;
      line-height: 49px;
    }

    strong span {
      color: ${({ theme }) => theme.colors.white};
    }
  `}
`;

const RegisterPropertyWhite = css`
  span,
  p {
    color: ${({ theme }) => theme.colors.greenDark};
    font: 22px/26px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  strong {
    color: ${({ theme }) => theme.colors.orange};
  }

  span:nth-child(1) {
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
    font-size: 25px;
    line-height: 30px;
    padding-bottom: 10px;
    display: block;
  }

  ${media.greaterThan('medium')`
    width: 100%;
    margin: 0;

    span {
      font-size: 28px;
      line-height: 30px;
      width: 50%;
      display: block;
    }

    span:nth-child(1) {
      width: 100%;
      line-height: 54px;
      font-size: 41px;
    }
  `}
`;

const RegisterPropertyTransform = css`
  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  strong span {
    color: ${({ theme }) => theme.colors.orange};
    font-family: 'Raleway';
    font-weight: ${({ theme }) => theme.fontsWeight.black};
  }

  ${media.greaterThan('medium')`
    width: 300px;
  `}
`;

export const Link = styled(Button)`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 10px 24px;
  border-radius: 4px;

  :hover{
    text-decoration: none;
  }
`;

const BaseHighlighted = css`
  text-align: left;

  span {
    font-size: 40px;
    line-height: 110%;
  }

  ${media.greaterThan('medium')`margin-right: 30px;`}
`;

export const HighlightedH1 = styled.h1`${BaseHighlighted}
  ${(props) => props.type === 'contact' && Contact}
  ${(props) => props.type === 'registerProperty' && RegisterProperty}
  ${(props) => props.type === 'visitedBuildings' && RegisterPropertyWhite}
  ${(props) => props.type === 'registerPropertyWhite' && RegisterPropertyWhite}
  ${(props) =>
    props.type === 'registerPropertyTransform' && RegisterPropertyTransform}
`;

export const HighlightedH4 = styled.h4`
  ${BaseHighlighted}
  ${(props) => props.type === 'contactWork' && ContactWork}
  ${(props) => props.type === 'contactHome' && ContactHome}
  ${(props) => props.type === 'notfound' && NotFound}
  ${(props) => props.type === 'planta' && Planta}
  ${(props) => props.type === 'landing' && Landing}
  ${(props) => props.type === 'dream' && Dream}
`;
