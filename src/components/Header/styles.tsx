import styled from 'styled-components';

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
    width: 30rem;
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
`