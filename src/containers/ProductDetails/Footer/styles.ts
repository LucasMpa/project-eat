import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`

export const Seletor = styled.div`
  display: flex;
  width: 30%;
  height: 52px;
  align-items: center;
  justify-content: space-around;
  font-size: 36px;
  font-weight: 600;
  background-color: #DEDEDE;
  border-radius: 8px;
`

export const Add = styled.div`
  font-size: 36px;
`

export const Subtract = styled.div`
  font-size: 36px;
 `


export const AddToCart = styled.div`
  display: flex;
  width: 65%;
  height: 52px;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  background-color: #000;
  color: #FFF;
  font-size: 14px;
  border-radius: 8px;
  padding: 16px;
`
