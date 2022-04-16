import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.tertiary2};
  cursor: pointer;
`

export const IconWrapper = styled.div`
  width: 62px;
  height: 62px;
  flex: 0 0 62px;
  background-color: ${({ theme }) => theme.colors.tertiary4};
  border: 1px solid ${({ theme }) => theme.colors.tertiary2};
  border-radius: 4px;
`

export const Text = styled.p`
  font-size: clamp(22px,3vw,32px);
  padding: 0 20px;
  letter-spacing: 2px;
  flex: 1;
  text-align: center;
`
