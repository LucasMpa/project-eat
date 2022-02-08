import { useRouter } from 'next/router';
import React from 'react';
import { IProps } from './interface';
import { Root } from './styles'

const Card: React.FC<IProps> = (props) => {
  const router = useRouter();
  const { color, title } = props;

  return (
    <Root color={color} onClick={() => router.push('/products')}>
      {title}
    </Root>

  )
}

export default Card;