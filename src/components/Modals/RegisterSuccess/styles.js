import styled from 'styled-components';
import { Success as SuccessModal } from 'components/Modals/styles';

export const Success = styled(SuccessModal)`
  h2 {
    span {
      font: 40px/48px 'Raleway';
      font-weight: ${({ theme }) => theme.fontsWeight.black};
      color: ${({ theme }) => theme.colors.greenLight};
    }
  }

  p {
    max-width: 190px;
    padding-bottom: 5px;
  }
`;
