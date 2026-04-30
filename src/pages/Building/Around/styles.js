import styled from 'styled-components';
import media from 'styled-media-query';
import Section from 'components/Section';

export const Container = styled.div`
  max-width: 974px;
  margin: auto;
  padding: 0 15px;

  ${media.greaterThan('medium')`
    display: flex;
    border-radius: 6px;
    overflow: hidden;
  `}

  ${media.greaterThan('large')`
    padding: 0;
  `}
`;

export const Mapa = styled.div`
  width: 100%;
  height: 182px;
  background-color: #143643;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;

    .directions-card {
      display: none;
    }
  }

  ${media.greaterThan('medium')`
    max-width: 572px;
    height: 426px;
  `}
`;

export const Pin = styled.img`
  position: relative;
  display: ${props => (props.mq === 'desktop' ? 'none' : 'block')};
  width: 28px;
  margin: -20px 0 0 30px;

  ${media.greaterThan('medium')`
    display: ${props => (props.mq === 'mobile' ? 'none' : 'block')};
    margin: 0 -80px 0 0;
    z-index: 5;
  `}
`;

export const Text = styled(Section)`
  position: initial;
  width: auto;
  margin-top: -20px;
  padding: 20px;

  ${media.greaterThan('medium')`
    padding: 60px 30px 0 60px;
    width: 70%;
    margin: -1px 0 0 0;
    height: 428px;
  `}

  p {
    display: block !important;
    font-size: 18px;
    line-height: 20px;

    ${media.greaterThan('medium')`
      width: 100%;
      margin-top: 120px;
      line-height: 25px;
      font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    `}
  }
`;
