import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 12px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary3};
`

export const LogoWrapper = styled.div`
  max-width: 50%;
  
  svg {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-weight: 100;
  font-size: clamp(20px, 3vw, 32px);
  text-align: right;
`

export const Strong = styled.strong``

