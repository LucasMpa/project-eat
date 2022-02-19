import React, { useCallback } from 'react';
import { formatPrice } from '../../utils/format';

import {
  Container,
  Content,
  Description,
  OrderContent,
  OrderTotalContent,
  Footer,
  CancelButtom,
  ConfirmButtom
} from './styles';

interface IProps {
  onClick: any;
  visibility: boolean;
  storage: any;
}


const Cart: React.FC<IProps> = (props) => {
  const { onClick, visibility, storage } = props


  const handleOrder = useCallback(
    () => {
      if (storage.length === 0) {
        return 'sem items'
      } else {
        return (
          <>
            <Content>
              {storage.length === undefined ? (
                <OrderContent>
                  <Description>{storage.title}</Description>
                  <Description>R$ {formatPrice(storage.price)}</Description>
                </OrderContent>)
                :
                (React.Children.toArray(
                  storage.map((data: any) => {
                    return (
                      <OrderContent>
                        <Description>{data.title}</Description>
                        <Description>R$ {formatPrice(data.price)}</Description>
                      </OrderContent>
                    )
                  })
                ))}
              <OrderTotalContent>
                <Description>Total</Description>
                <Description>{`R$ ${orderTotal()}`}</Description>
              </OrderTotalContent>
            </Content>
            <Footer>
              <ConfirmButtom onClick={() => onClick()}>Confirmar Pedido</ConfirmButtom>
              <CancelButtom onClick={() => cleanStorage()}> Limpar</CancelButtom>
            </Footer>
          </>
        )
      }
    }, [storage],
  );


  const cleanStorage = () => {
    localStorage.removeItem('projectEats');
    return window.location.reload();
  }

  const orderTotal = () => {
    if (storage.length !== undefined) {
      let total = 0;
      storage.forEach((data: any) => {
        total += data.price;
      })
      return formatPrice(total);
    }
    return formatPrice(storage.price)
  }
  return (
    <>
      {visibility &&
        <Container>
          {handleOrder()}
        </Container>
      }

    </>
  );
}

export default Cart;