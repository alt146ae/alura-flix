import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalZoom = ({onClose}) => {
  return (
    <ModalContainer onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <h2>Contenido del Modal</h2>
      <button onClick={onClose}>Cerrar</button>
    </ModalContent>
  </ModalContainer>
  )
}

export default ModalZoom
