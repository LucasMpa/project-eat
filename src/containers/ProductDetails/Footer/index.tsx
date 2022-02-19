import React, { useCallback, useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/format';
import { CountTypes } from './interfaces';
import { Container, Seletor, AddToCart, Add, Subtract } from './styles'

interface IProps {
  price: any;
}

const Footer: React.FC<IProps> = (props) => {
  const price = Number(props.price)
  const [count, setCount] = useState<number>(1)

  const handlePrice = useCallback(
    () => {
      return price * count
    },
    [price, count],
  );

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
      <AddToCart>
        Adicionar ao carrinho <span>R$ {formatPrice(handlePrice())}</span>
      </AddToCart>
    </Container>
  );
}

export default Footer;