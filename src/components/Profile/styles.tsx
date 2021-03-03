import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    color: var(--white)
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 1rem;

    &:last-child {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    margin-right: 2rem;
    color: var(--white);
  }


`