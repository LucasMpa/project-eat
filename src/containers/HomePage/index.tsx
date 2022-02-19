import React from 'react';
import Header from '../../components/Header';
import Categories from './components/Categories';
import Greetings from './components/Greetings';
import Populars from './components/Populars';
import useStyles from './styles';

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Greetings />
      <Populars />
      <Categories />
    </div>

  )
}

export default HomePage;