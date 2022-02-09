import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { formatPrice } from '../../../utils/format';
import { CountTypes, IProps } from './interfaces';
import { Container, Seletor, AddToCart, Add, Subtract } from './styles'

const Footer: React.FC<IProps> = (props) => {
  const route = useRouter();
  const price = Number(props.price)
  const [count, setCount] = useState<number>(1)

  const handlePrice = useCallback(
    () => {
      return price * count
    }, [price, count],
  );

  const handleSubmit = useCallback(
    () => {
      const payload = {
        price: Number(handlePrice().toFixed(2)),
        subtitle: props.subtitle,
        title: props.title,
        image: props.image,
      }
      const getOrders = localStorage.getItem('projectEats');

      if (getOrders === null || getOrders === '') {
        localStorage.setItem('projectEats', JSON.stringify(payload));
        return route.push('/');
      } else {
        const allOrders = JSON.parse(getOrders);

        //When 'allOrders' returns undefined it means there is only one order 
        if (allOrders.length === undefined) {
          let orders = [allOrders];
          orders.push(payload);
          localStorage.setItem('projectEats', JSON.stringify(orders));

          return route.push('/');
        }

        allOrders.push(payload);
        localStorage.setItem('projectEats', JSON.stringify(allOrders));

        return route.push('/');

      }

    }, [handlePrice]
  )

  const handleCount = (type: CountTypes) => {
    if (type == 'subtract') {
      count > 1 ? setCount(count - 1) : setCount(1)
    }

    if (type == 'sum') {
      setCount(count + 1)
    }
  }

  return (
    <Container>
      <Seletor>
        <Subtract onClick={() => handleCount('subtract')}>
          -
        </Subtract>
        {count}
        <Add onClick={() => handleCount('sum')}>
          +
        </Add>
      </Seletor>
      <AddToCart onClick={() => handleSubmit()}>
        Adicionar ao carrinho <span>R$ {formatPrice(handlePrice())}</span>
      </AddToCart>
    </Container>
  );
}

export default Footer;