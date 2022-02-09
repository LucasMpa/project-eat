import React from 'react';
import Header from '../../components/Header';
import Categories from './components/Categories';
import Greetings from './components/Greetings';
import Populars from './components/Populars';
import { Root } from './styles'

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Root>
        <Greetings />
        <Populars />
        <Categories />
      </Root>
    </>
  )
}

export default HomePage;