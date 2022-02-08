import React from 'react';
import GoBack from '../../components/GoBack';
import Card from './Card';
import { mockedDataProducts } from './mock';
import { Root } from './styles';

const ListOfItems: React.FC = () => {

  return (
    <Root>
      <GoBack />
      {React.Children.toArray(
        mockedDataProducts.map(data => {
          return <Card
            image={data.image}
            title={data.title}
            price={data.price}
            subtitle={data.subtitle}
          />
        })
      )}
    </Root>
  );
}

export default ListOfItems;