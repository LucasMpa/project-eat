import React from 'react';
import {
  Root,
  Subtitle,
  Title
} from './styles'

const Greetings: React.FC = () => {

  const getActualGreetings = () => {
    const actualHour = new Date().getHours();

    if (actualHour >= 18 && actualHour <= 23) {
      return 'Boa Noite';
    }

    if (actualHour >= 12 && actualHour <= 17) {
      return 'Boa Tarde';
    }

    if (actualHour >= 5 && actualHour <= 11) {
      return 'Bom Dia';
    }

    return 'Boa Madrugada';
  }

  return (
    <Root>
      <Title>Olá, Fulano</Title>
      <Subtitle>{getActualGreetings()}</Subtitle>
    </Root>

  )
}

export default Greetings;