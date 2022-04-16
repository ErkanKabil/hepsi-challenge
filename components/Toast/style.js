import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.success};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const ToastMessage = styled.p`
    color: ${({ theme }) => theme.colors.white};
  font-size: clamp(20px, 2.5vw, 26px);
`
