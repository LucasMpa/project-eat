import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Root = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 16px 0px 16px;
  justify-content: space-between;
  align-items: center;
`

export const Menu = styled(MenuIcon)`
 font-size: 32px;
 cursor: pointer;
`

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;

`

export const CartIconContainer = styled.div`
  position: relative;
  & > span {
    position: absolute;
    top: -8px;
    right: 10px;
    width: 20px;
    height: 20px;
    color: #FFF;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: red;
  }
`

export const CartIcon = styled(ShoppingCartIcon)`
 font-size: 30px;
 margin-right: 16px;
 cursor: pointer;

 
 
`
