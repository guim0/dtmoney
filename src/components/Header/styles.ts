import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  padding: 2rem 1rem 11rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #ffffff;
    background-color: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.2s ease;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
