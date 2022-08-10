import styled from "styled-components";

export const StyleItem = styled.main`
    background-color: white;
    color:var(--cinza);

    width: 20em;
    height: 20em;
    border-radius:24px;
    border: nome;
    box-shadow: 1px 1px 10px var(--sombra);
    
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 0.5em;
    
    @media screen and (max-width:700px) {
      
      width: 90vw;
    }
  `


