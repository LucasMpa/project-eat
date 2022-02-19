import { useRouter } from 'next/router';
import React from 'react';
import GoBack from '../../components/GoBack';
import Footer from './Footer';

import { Container, ProductImage, Title, Description } from './styles';

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { title, subtitle, price, image } = router.query;

  return (
    <Container>
      <GoBack />
      <ProductImage
        src={typeof image === 'string' ? image : ''}
        alt='product-image' />
      <Title>
        {title}
      </Title>
      <Description>
        {subtitle}
      </Description>
      <Footer
        price={price}
        subtitle={subtitle}
        title={title}
        image={image}
      />
    </Container>

  );
}

export default ProductDetails;