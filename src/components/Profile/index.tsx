import React from 'react';  
import { Container } from './styles';

export const Profile: React.FC = () => {
  return (
    <Container>
      <h1>borgesjuniior_</h1>
      <ul>
        <li>32 publicações</li>
        <li>1000 seguidores</li>
        <li>600 seguindo</li>
      </ul>

      <ul>
        <li>Nome: Valdecy Júnior</li>
        <li>Site: http://github/com/borgesjuniior</li>
        <li>Bio: São Luís - MA</li>
      </ul>
    </Container>
  )
}