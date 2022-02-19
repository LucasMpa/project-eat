import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 90vh;
  padding: 16px;
  border-top: 5px solid #1C6EA4;
  background-color: #FFF;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.div`
  
`

export const Description = styled.div`
  

`


export const OrderContent = styled.div`
  display: flex;
  justify-content: space-between;

`

export const OrderTotalContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 20px;

`

export const Footer = styled.div`
  position: relative;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  height: 45px;
`

export const ConfirmButtom = styled.div`
  display: flex;
  width: 60%;
  border-radius: 8px;
  background-color: green;
  color: #FFF;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  `

export const CancelButtom = styled.div`
  display: flex;
  width: 20%;
  border-radius: 8px;
  background-color: red;
  color: #FFF;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
`

