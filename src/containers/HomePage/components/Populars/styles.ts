import styled from 'styled-components'
import { Grid } from '@material-ui/core';

export const Root = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 26px;
  margin-bottom: 8px;
  font-weight: 600;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`