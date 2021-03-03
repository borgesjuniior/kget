import React from 'react';  
import { Container } from './styles';
import Home from '../../assets/home.png';

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={Home} alt="Logo" />
      <input type="text" placeholder="Digite o usuário" />
    </Container>
  )
}