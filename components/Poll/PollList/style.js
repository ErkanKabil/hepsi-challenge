import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`


export const SortDropdownWrapper = styled.div`
  margin-bottom: 10px;
  max-width: 225px;
`


export const RemoveButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: -10px;
  top: -10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0;
  pointer-events: none;
  transition: opacity .1s ease-in-out;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: calc(100% - 4px);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  
`

export const ListItem = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  border-radius: 4px;
  transition: background-color .1s ease-in-out;

  &:not(:first-child) {
    margin-top: 30px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    
    ${RemoveButton} {
      opacity: 1;
      pointer-events: all;
    }
  }
`


export const PointsWrapper = styled.div`
  width: 82px;
  height: 82px;
  flex: 0 0 82px;
  background-color: ${({ theme }) => theme.colors.tertiary4};
  border: 1px solid ${({ theme }) => theme.colors.tertiary2};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`
export const Point = styled.span`
  font-size: clamp(20px,3vw,26px);
  font-weight: bold;
`
export const PollInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  flex: 1;
`
export const PollName = styled.p`
  font-size: 18px;
  font-weight: bold;
  word-break: break-word;
`
export const PollLink = styled.a`
  font-size: 14px;
  font-weight: 100;
  width: fit-content;
  word-break: break-word;
  &:hover {
    text-decoration: underline;
  }
`
export const PollVoteWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`
export const VoteItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.tertiary4};
  cursor: pointer;
  width: fit-content;
  svg {
    margin-right: 5px;
    width: 20px;
    height: auto;
    fill: ${({ theme }) => theme.colors.tertiary4};
  }
`

