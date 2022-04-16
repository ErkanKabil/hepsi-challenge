import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageButton = styled.button`
  width: 20px;
  
  svg {
    width: 100%;
    height: auto;
  }
  
`
export const Pages = styled.div`
  display: flex;
  align-items: center;
`
export const PageNumber = styled.button`
  font-weight: bold;
  font-size: 18px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  
  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  ${({ isActive }) =>
    isActive &&
    css`
            outline: 1px solid ${({ theme }) => theme.colors.primary};
		`};
`
