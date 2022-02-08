import React from 'react';
import Card from './Card';
import { mockedData } from './mock/mockedData';
import { Grid } from '@material-ui/core';
import { Title, Root, ContainerCards } from './styles'

const Populars: React.FC = () => {

  return (
    <Root>
      <Title>Populares</Title>
      <ContainerCards >
        {React.Children.toArray(
          mockedData.map(data => {
            return (
              <Grid item>
                <Card title={data.title} color={data.color} />
              </Grid>
            )
          }))}
      </ContainerCards>
    </Root>
  )
}

export default Populars;