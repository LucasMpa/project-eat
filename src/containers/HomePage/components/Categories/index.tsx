import React from 'react';
import Card from './Card';
import { mockedData } from './Card/mock/mockedData';
import { Grid } from '@material-ui/core';
import { Title, Root } from './styles'

const Categories: React.FC = () => {
  return (
    <Root>
      <Title>Categorias</Title>
      <Grid container spacing={2}>
        {React.Children.toArray(
          mockedData.map(data => {
            return (
              <Grid item>
                <Card
                  title={data.title}
                  color={data.color}
                />
              </Grid>
            )
          }))}
      </Grid>
    </Root>
  )
}

export default Categories;