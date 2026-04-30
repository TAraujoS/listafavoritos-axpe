import styled, { css } from 'styled-components';
import media from 'styled-media-query';

// components
import Button from 'components/Button';
import FormElements from 'components/FormElements';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Body = styled.div`
  padding: 30px;
`;

export const Form = styled.form`
  ${media.greaterThan('medium')`
    max-width: 888px;
    margin: auto;
  `}
`;

export const FormRow = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    div {
      flex-basis: 49%;
    }

    label {
      margin-bottom: 0;
    }

    h2 {
      &.minheight {
        min-height: 42px;
      }
    }
  `}
`;

export const FormGroupRow = styled(FormRow)`
  flex-basis: 120% !important;
`;

export const FormGroupTwo = styled.div`
  display: flex;
  height: 35px;
`;

export const FormGroupValues = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 560px;

    label {
      width: 270px;
      margin-bottom: 30px;
    }

    p {
      position: absolute;
      margin-top: 50px;

      &:nth-child(4){
        margin-left: 295px;
      }
    }
  `}
`;

export const FormGroupValuesSub = styled.div`
  margin-top: 30px;
  width: 100%;

  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

export const FormGroupFlex = styled.div`
  label {
    &[for='SingleLine5'],
    &[for='SingleLine12'] {
      margin-bottom: 5px;
      background: none;
    }
  }

  ${(props) =>
    props.layout === 'userdata' &&
    css`
      label {
        height: 50px;
        margin-bottom: 16px;
      }
    `}

  ${media.greaterThan('medium')`
    display: flex;

    label {
      height: 50px;

      &[for='SingleLine5'] {
        background: none;
      }
    }

    ${(props) =>
      !props.layout &&
      css`
        label + label {
          margin-left: 26px;
        }
      `}

    ${(props) =>
      props.layout === 'userdata' &&
      css`
        flex-wrap: wrap;

        & > label {
          width: 49%;
          margin: 0 0 20px 0;

          &:nth-child(2n + 2) {
            margin-left: 2%;
          }
        }
      `}
  `}
`;

export const FormGroupAddress = styled.div`
  p {
    margin-top: 10px;
  }

  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    p {
      margin-top: -5px;
      margin-left: 65%;
    }
  `}
`;

export const FormGroupPhotos = styled.div`
  small{
    display: inline-block;
    font-size: 12px;
    padding-top: 5px;
  }
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
  `}
`;

export const Description = styled.p`
  font: 14px/18px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  margin-bottom: 30px;

  ${media.greaterThan('medium')`
    max-width: 530px;
    margin-right: 29px;
    margin-bottom: 0;
  `}
`;

export const FormGroupFooter = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 50px 0 100px 0;

    div {
      order: 1;
    }

    label {
      order: 2;
      margin: 0;
    }

    button {
      order: 3;
    }
  `}
`;

export const CheckLinkTerms = styled(FormElements)`
  margin: 30px 0;

  ${media.lessThan('medium')`
    input {
      width: 40px;
      height: 40px;

      &:checked {
        background-size: initial;
        background-position: 10px;
      }
    }

    span {
      margin-top: 9px;
      max-width: initial;
    }
  `}

  ${media.greaterThan('medium')`
    min-width: 250px;
    width: 250px;

    span {
      font-size: 10px;
    }
  `}
`;

export const GroupImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const GroupImage = styled.div`
  svg {
    position: absolute;
    width: 29px;
    height: 31px;
    margin-top: 28px;
    margin-left: calc(100% - 105px);

    ${media.greaterThan('medium')`
      width: 7px;
      height: 8px;
      margin-left: 168px;
      margin-top: 23px;
    `}
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 4px;
  height: 202px;
  width: calc(100vw - 60px);
  margin: 15px 0;

  ${media.greaterThan('medium')`
    width: 183px;
    height: 100px;
    margin: 16px 16px 0 0;
  `}
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
  margin-top: 20px;

  ${media.greaterThan('medium')`
    width: 180px;
  `}
`;
