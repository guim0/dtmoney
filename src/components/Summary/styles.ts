import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);

  gap: 2rem;

  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      display: block;
    }
  }
.highlight-background{
    background-color: var(--green);
    color: var(--shape);

}

@media (max-width: 720px){
    display: flex;
    flex-direction: column;
    align-items: center;

   
}
`;
