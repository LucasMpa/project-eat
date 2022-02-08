import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px;
  box-shadow: 10px 3px 44px -30px rgba(0,0,0,0.75);
  cursor: pointer;
  backgroun
  backg
`

export const ProductImage = styled.img`
 width: 72px;
`

export const Content = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column
`


export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`

export const Description = styled.div`
  color: #6D6D6D
`

export const Price = styled.div`
  display: flex;
  align-items: center;

  & > div {
    font-size: 24px;
    margin-left: 8px;
  }
`


