import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  font-size: 1.2rem;
  background: #00ff33;
  border-radius: 10px;
  height: 50px;
  border: 0;
  padding: 0 16px;
  width: 15rem;
  color: black;
  margin-top: 16px;
  transition: background-color 0.2s;
  
  &:hover {
    background: ${shade(0.2, '#00ff33')}
  }
`;