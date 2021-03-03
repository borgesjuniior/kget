import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  background: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 5px;
  }

  input {
    background: #444444;
    color: #fff;
    width: 25rem;
    height: 2.5rem;
    border-radius: 5px; 

    &::placeholder {
      color: #ffffff91;
      margin-left: 5px;
      text-align: center;
    }
    
    &:placeholder-shown {
      border: 1px solid #6C39CE;
    }
  }

  button {
    width: 3rem;
    background-color: rgba(0, 0, 0, 0);
    border: 0;

    &:focus {
      outline-style: none;
    }

    svg {
      color: #6C39CE;

      &:hover {
        color: ${shade(0.2,'#6C39CE')}
      }
    }
  }
`