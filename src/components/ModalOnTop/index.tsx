import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 9999999999999999;
  margin: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`

export const MiddleModal = styled.div`
  background-color: white;
  height: 60%;
  width: 30%;
  border-radius: 4rem;
  z-index: 10;
`
