import styled from 'styled-components';
import media from 'styled-media-query';

// components
import Button from 'components/Button';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Form = styled.form`
  max-width: 650px;
  padding: 50px 30px;
  margin: auto;

  h1 {
    font: 24px 'Bitter';
    font-weight: ${({ theme }) => theme.fontsWeight.regular};
  }

  ${media.greaterThan('medium')`
    padding: 50px 0 0 0;

    h1 {
      font-size: 40px;
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
    }

    label[type='phone'],
    label[for='whoIndicated'] {
      max-width: 282px;
    }

    label {
      max-width: 600px;
    }
  `}
`;

export const FormGroupButton = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;

  ${media.greaterThan('medium')`
    max-width: 488px;
    margin-left: 112px;
    padding: 50px 0;
    flex-direction: row;
    margin: 0;

    span {
      max-width: 250px;
      font-size: 12px;
    }

    button {
      padding: 0 60px;
    }
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

export const FormGroupBrokerExperience = styled.div`
  ${media.greaterThan('medium')`
    max-width: 500px;
    display: flex;
    align-items: center;

    label {
      width: auto;
      margin-bottom: 0;
    }

    label:nth-child(1){
      width: 90px;
    }
    label:nth-child(2){
      width: 177px;
    }
    label:nth-child(3){
      width: 190px;
    }
  `}
`;

export const FormGroupBasics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;
  justify-content: space-between;
`;

export const FormGroupLang = styled(FormGroupBasics)`
  ${media.greaterThan('medium')`
    label {
      max-width: 282px;
    }
  `}
`;
