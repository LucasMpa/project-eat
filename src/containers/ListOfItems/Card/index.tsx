import { useRouter } from 'next/router';
import React from 'react';
import { formatPrice } from '../../../utils/format';
import { IProducts } from './interface';

import {
  Root,
  Title,
  Description,
  Price,
  Content,
  ProductImage
} from './styles';

const Card: React.FC<IProducts> = (props) => {
  const router = useRouter();
  const { image, price, subtitle, title } = props
  return (
    <Root onClick={() => router.push(
      {
        pathname: '/details',
        query: { price, image, subtitle, title }
      }
    )} >
      <ProductImage src={image} alt='image-product' />
      <Content>
        <Title>
          {title}
        </Title>
        <Price>
          R$ <div> {formatPrice(price)} </div>
        </Price>
        <Description>
          {subtitle}
        </Description>
      </Content>


    </Root>
  );
}

export default Card;