import styled from 'styled-components'


export const Form = styled.form`
`

export const FormTitle = styled.h2`
  font-size: clamp(22px,3.2vw, 28px);
  margin-bottom: 30px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  &:not(:first-child) {
    margin-top: 15px;
  }
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 5px;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.tertiary3};
  height: 36px;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.tertiary3};
  }
`

export const SubmitButton = styled.button`
  margin-left: auto;
  width: 120px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  padding: 6px;
  border-radius: 20px;
`
