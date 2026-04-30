import styled from "styled-components"
import media from "./media"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(55, 71, 79, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background: #F5F3F0;
  border-radius: 12px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);

  ${media.lessThan("large")`
    margin: 0 16px;
  `}
`

export const ModalTitle = styled.h3`
  color: #EE6900;
  font-family: Raleway;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`

export const ModalText = styled.p`
  color: #37474F;
  text-align: center;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ModalInput = styled.input`
  margin: 12px 0 24px;
  width: 100%;
  height: 42px;
  border-radius: 12px;
  border: 1px solid #FF6200;
  background: #EEEBE7;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.25);
  outline: none;

  color: #515F66;
  text-align: center;
  font-family: Raleway;
  font-size: 18px;
`

export const ModalButton = styled.button`
  border-radius: 8px;
  border: 2px solid #FF6200;
  background: #FF6200;
  width: 100%;
  height: 42px;

  color: #FFF;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 700;

  transition: .4s;

  &:hover {
    background: #FFF;
    color: #FF6200;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`