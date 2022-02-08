import { useRouter } from 'next/router';
import React from 'react';
import GoBack from '../../components/GoBack';
import Footer from './Footer';

import { Container, ProductImage, Title, Description } from './styles';

const ProductDetails: React.FC = () => {
  const router = useRouter();
  console.log(router.query);
  const { title, subtitle, price } = router.query;

  return (
    <Container>
      <GoBack />
      <ProductImage
        src='https://image.freepik.com/vetores-gratis/fatia-voadora-de-ilustracao-em-vetor-pizza-dos-desenhos-animados-vetor-isolado-conceito-de-fast-food-estilo-flat-cartoon_138676-1934.jpg'
        alt='product-image' />
      <Title>
        {title}
      </Title>
      <Description>
        {subtitle}
      </Description>
      <Footer price={price} />
    </Container>

  );
}

export default ProductDetails;