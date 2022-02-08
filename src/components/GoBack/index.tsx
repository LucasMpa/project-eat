import React from 'react';
import { useRouter } from 'next/router'
import { Container, GoBackButton } from './styles';

const GoBack: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <GoBackButton onClick={() => router.back()} />
    </Container>
  );
}

export default GoBack;