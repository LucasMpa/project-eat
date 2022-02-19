import React from 'react';
import { AvatarIcon, Menu, Root } from './styles';

const Header: React.FC = () => {
  return (
    <Root>
      <Menu />
      <AvatarIcon src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' alt='icon' />
    </Root>

  )
}

export default Header;