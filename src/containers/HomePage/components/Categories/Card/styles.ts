import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  width: 120px;
  height: 200px;
  background-color  ${props => props.color || '#FFF'};
  align-items: flex-end;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`
