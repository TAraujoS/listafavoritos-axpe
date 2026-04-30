import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Gradient = styled.div`
  height: 392px;
  width: 100%;
  opacity: 0.86;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  position: absolute;

  ${media.greaterThan('medium')`
    height: 512px;
  `}

  ${media.greaterThan('1170px')`
    width: calc(100% - 200px);
  `}
`;

export const Header = styled.header`
  background-image: url('static/en-es.png');
  background-position: left;
  background-size: cover;
  height: 392px;

  ${media.greaterThan('medium')`
    height: 512px;
  `}
`;

export const GroupInfo = styled.div`
  position: absolute;
  padding: 0 30px;

  hr {
    width: 72px;
    margin: 0 0 27px 0;
  }

  ${media.greaterThan('medium')`
    padding: 0;
    margin: 0;
    width: calc(100% - 200px);
    height: 512px;

    hr {
      margin: 21px auto 33px auto;
    }
  `}
`;

export const Title = styled.h1`
  padding: 178px 0 29px 0;
  font: ${({ theme }) => theme.fontsWeight.bold} 32px/37px 'Bitter';
  color: ${({ theme }) => theme.colors.white};

  strong {
    color: ${({ theme }) => theme.colors.orangeLight2};
    font: ${({ theme }) => theme.fontsWeight.extraBold} 32px/37px 'Raleway';
  }

  ${media.greaterThan('medium')`
    padding: 0;
    margin: 262px auto 0 auto;
    text-align: center;
    font-size: 72px;
    line-height: 85px;

    strong {
      font-size: 72px;
      line-height: 85px;
    }
  `}
`;

export const GroupContact = styled.div`
  height: 96px;
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 406px;
    margin: auto;
    height: 39px;
  `}
`;

export const Contact = styled.a`
  margin-bottom: 16px;

  p {
    color: ${({ theme }) => theme.colors.white};
    font: 16px/19px 'Raleway';
  }
  p:nth-child(2) {
    font: ${({ theme }) => theme.fontsWeight.semiBold} 18px/19px 'Raleway';
  }

  svg {
    width: 18.57px;
    height: 19.29px;
    margin-right: 4.5px;
  }

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`;

export const Body = styled.div`
  padding: 40px 30px;

  strong {
    color: ${({ theme }) => theme.colors.orange};
  }

  h2 {
    font: 25px/30px 'Bitter';
    margin-bottom: 29px;

    strong {
      font: ${({ theme }) => theme.fontsWeight.extraBold} 25px/30px 'Bitter';
    }
  }

  p {
    font: 18px/28px 'Raleway';
    margin-bottom: 28px;
  }

  ${media.greaterThan('medium')`
    padding: 60px 5vw;
    padding-bottom: 55px;
    max-width: 70%;

    h2, h2 strong {
      font-size: 37px;
      line-height: 42px;
    }

    p {
      line-height: 25px;
      margin-bottom: 25px;
    }
  `}

  ${media.greaterThan('large')`
    max-width: 85%;
  `}
`;
