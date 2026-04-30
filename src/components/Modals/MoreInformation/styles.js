import styled from 'styled-components';
import media from 'styled-media-query';

export const ContainerModalMoreInformation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  z-index: 10;

  ${media.lessThan('medium')`
    z-index: 999;
  `}
`;

export const ContentModalMoreInformation = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex: 1;
  max-width: 450px;
  background: ${({ theme }) => theme.colors.white};

  ${media.lessThan('medium')`
    width: 100%;
    max-width: none;
  `}
`;

export const MoreInformationHeader = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.greenBorder};
  min-height: 130px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const MoreInformationHeaderTitle = styled.p`
  font-size: 22px;
  font-family: 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  max-width: 250px;
`;

export const MoreInformationSpeak = styled.p`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  color: ${({ theme }) => theme.colors.greenDark};
  font-family: 'Raleway', sans-serif;
  width: 100%;
  padding: 0 30px 16px;
`;

export const MoreInformationHeaderCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  padding: 0;
  right: 20px;
  top: 20px;
`;

export const MoreInformationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  padding: 0 30px;
  overflow-x: hidden;
  box-sizing: border-box;
  & > input:nth-child(3),
  & > input:nth-child(4),
  & > textarea,
  & > button {
    grid-column: span 2;
  }

  ${media.lessThan('small')`
    padding: 0 16px;
  `}
`;

export const MoreInformationInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 45px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 5px;
  font-size: 14px;
  margin: 0 !important;
  max-width: none;
`;

export const MoreInformationInputDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MoreInformationTextarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 5px;
  font-size: 14px;
  margin: 0 !important;
  max-width: none;
  min-height: 193px;
  font-family: 'Raleway', sans-serif;
`;

export const MoreInformationButtonSend = styled.button`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Raleway', sans-serif;
  background: ${({ theme }) => theme.colors.orange};
  width: 100%;
  height: 45px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreInformationButtonWhatsApp = styled.button`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  color: ${({ theme }) => theme.colors.orange};
  font-family: 'Raleway', sans-serif;
  background: transparent;
  width: 100%;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;