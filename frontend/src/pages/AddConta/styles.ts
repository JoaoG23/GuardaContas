import styled from "styled-components";

export const Container = styled.main`
    color:var(--branco);
    
    height: 91vh;

    border: nome;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    gap: 1em;
    
    align-items: center;


    @media screen and (max-width:700px) {
      padding: 0em;
      display:block;
      margin: 0px;
    }
    `

