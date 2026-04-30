import styled from 'styled-components';

export const GenericDiv = styled.div`
`

// MODAL ------------------------------------------------

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1060;
`

export const ModalBodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1060;
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 325px;
    background-color: #FFF;
`

export const ModalOverlay = styled.div`
    display: block;
    transition: all 0.2s ease-out;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1050;
    height: 100%;
    overflow-y: hidden;
    right: 0;
    visibility: visible;
    opacity: 1;
`

// HEADER
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #2F4447;
  padding: 20px 20px 15px 20px;
  position: relative;
`

export const ModalHeaderTitle = styled.div`
  color: #FFF;
  font-size: 22px;
`

export const ModalHeaderBtnClose = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
`

export const ModalHeaderBtnCloseImage = styled.button`
  
`

// LOCAL
export const ModalLocal = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 20px 10px 20px;
`

export const ModalLocalImage = styled.div`
    img {
      max-width: 130px;
    }
`

export const ModalLocalDescription = styled.div`
  padding: 0 0 0 10px;
`

export const ModalLocalTitle = styled.div`
  color: #EE6900;
  display: block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`

export const ModalLocalInfos = styled.div`
  color: #3F5A5E;
  font-size: 10px;
  font-weight: 500;
`

// FORM
export const ModalForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`

export const ModalFormGroupNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  width: 100%;
  div {
    width: 47.5%;
  }
  input {
    width: 100%;
      color: #C3CCCD;
      display: block;
      font-size: 16px;
      padding: 10px 20px  !important;
      border: 1px solid  #C3CCCD;
      border-radius: 4px;
  }
`

export const ModalFormGroup = styled.div`
  margin: 0 0 10px 0;
  width: 100%;
  input {
    color: #C3CCCD;
    display: block;
    font-size: 16px;
    padding: 10px 20px !important;
    border: 1px solid  #C3CCCD;
    width: 100%;
    border-radius: 4px;
  }
`

export const ModalInput = styled.div``

export const ModalSchedule = styled.div``

export const ModalScheduleTitle = styled.div`
  color: #3F5A5E;
  font-size: 16px;
  font-weight: 400;
`

export const ModalScheduleWrapper = styled.div`
  display: flex;
  width: 280px;
  overflow-x: auto;
  padding: 15px 0;
  margin: 0 0 15px 0;

  &::-webkit-scrollbar {
      width: 10px;
      height: 7px;
  }
  &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #9c9c9c;
      border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
      background: #3F5A5E;
      border-radius: 10px;
      transition: 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
      background:rgb(75, 112, 118);
  }
`

export const ModalScheduleItem = styled.div`
  display: block;
  min-width: 70px;
  margin: 0 10px 0 0;
`

export const ModalScheduleItemLine = styled.div`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #3F5A5E;
  //background: #ECEFEF;
  background-color: ${(props) => (props.selected ? '#ECEFEF' : '#FFF')};
`

export const ModalScheduleItemDay = styled.div`
  color: #3F5A5E;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`

export const ModalScheduleItemDayNumber = styled.div`
  color: #3F5A5E;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`

export const ModalScheduleItemMonth = styled.div`
  color: #3F5A5E;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`

export const ModalScheduleHour = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
`

export const ModalScheduleSelect = styled.select`
  width: 100%;
  color: #3F5A5E;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #3F5A5E;
  background: #FFF;
`

export const ModalFormGroupCheckbox = styled.div`
  width: 100%;
  margin: 10px 0 35px 0;
  display: flex;
  gap: 10px;

  input {
    -webkit-appearance: checkbox;
    accent-color: #3F5A5E;
    height: 20px;
    width: 30px;
  }

  label {
    text-align: center;
  }
`

export const ModalFormSubmit = styled.div`
    width: 100%;
`

export const ModalFormBtnSubmit = styled.div`
  color: #FFF;
  cursor: pointer;
  display: block;
  font-size: 16px;
  background-color: #EE6900;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`