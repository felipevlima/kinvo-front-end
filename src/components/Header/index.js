import React from 'react';
import logo from '../../assets/KinvoPremiumlogo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
}
