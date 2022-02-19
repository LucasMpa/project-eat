import React, { useEffect, useState } from 'react';
import Cart from '../Cart';
import {
  Menu,
  Root,
  ContainerOptions,
  CartIcon,
  CartIconContainer
} from './styles';

const Header: React.FC = () => {
  const [storage, setStorage] = useState<any>([]);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  useEffect(
    () => {
      const getStorage = localStorage.getItem('projectEats')
      if (getStorage !== null) {
        setStorage(JSON.parse(getStorage || ''))
      }
    }
    , [])

  const handleLength = () => {
    if (storage === null) {
      return <span >0</span>
    }
    if (storage.length === undefined) {
      return <span>1</span>
    }
    if (storage && storage.length > 1) return <span >{JSON.parse(storage.length)}</span>

    return
  }

  return (
    <>
      <Root>
        <Menu />
        <ContainerOptions>
          <CartIconContainer onClick={() => setModalVisibility(!modalVisibility)}>
            <CartIcon>
            </CartIcon>
            {handleLength()}
          </CartIconContainer>
        </ContainerOptions>
      </Root>
      <Cart
        visibility={modalVisibility}
        storage={storage ? storage : []}
        onClick={() => setModalVisibility(!modalVisibility)}
      />
    </>
  )
}

export default Header;