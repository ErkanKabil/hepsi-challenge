import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgba(0,0,0,.3);
  z-index: 99;
`

export const DialogWrapper = styled.div`
  width: calc(100% - 30px);
  max-width: 400px;
  margin: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(228, 228, 228, 0.6);
  box-shadow: 0 6px 12px rgba(50, 50, 71, 0.07);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const CloseDialogButton = styled.button`
  width: 20px;
  margin: 10px 10px 0 auto;
`

export const DialogBody = styled.div`
  padding: 16px 20px;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
`

export const SelectedItem = styled.div`
  font-weight: bold;
  display: block;
  text-align: center;
  font-size: 22px;
  margin-top: 4px;
`

export const DialogFooter = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 4px;
  font-size: 18px;
  &:not(:first-child) {
    margin-left: 10px;
  }

  ${({ variant }) =>
          variant === "danger" &&
          css`
            background-color: ${({ theme }) => theme.colors.danger};	
          `}
`

