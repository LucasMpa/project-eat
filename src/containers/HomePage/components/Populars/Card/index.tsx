import React from 'react';
import { IProps } from './interface';
import { Root } from './styles'

const Card: React.FC<IProps> = (props) => {
  const { color, title } = props;

  return (
    <Root color={color}>
      {title}
    </Root>

  )
}

export default Card;