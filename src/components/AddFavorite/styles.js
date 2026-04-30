import styled from 'styled-components'

// CONTAINER (centraliza corretamente)
export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%); /* 🔥 centralização correta */
  z-index: 9999;
`

// CAIXA DO TOAST
export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 420px;
  max-width: 520px;

  background: #F3F3F3;
  border-radius: 6px;
  padding: 14px 18px;

  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-12px); /* 🔥 só eixo Y */
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

// LADO ESQUERDO
export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: #F05A28;
    font-weight: 500;
  }
`

// LINK
export const ToastLink = styled.a`
  margin-left: 16px;
  font-size: 14px;
  color: #2F4447;
  text-decoration: underline;
  cursor: pointer;
`

// BOTÃO FECHAR
export const ToastClose = styled.button`
  background: none;
  border: none;
  margin-left: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
`