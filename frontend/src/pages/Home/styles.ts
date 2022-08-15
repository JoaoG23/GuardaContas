import styled from "styled-components";

export const Container = styled.main`
    color:var(--cinza);
    
    /* width: 100vw; */
    height: 91vh;

    border: nome;
    
    display: flex;
    justify-content: center;
    
    
    gap: 1em;
    
    align-items: center;
    
    @media screen and (max-width:700px) {
      padding: 0em;
      display:block;
      margin: 0px;
    }
    `
export const ContainerCard = styled.div`
    display: flex;
    gap:2em;

    `

export const Grafico = styled.div`
    background-color: white;
    display: flex;
    gap:20px;
    width: 100%;
    height:13em;
    
    `
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
    width:50vw;
    gap: 0.5em;
    
    @media screen and ( max-width:700px){
      
      width:90vw;
  }
  `;
export const ContainerCards = styled(ContainerItens)`
/* margin: 10px; */
  gap: 1em;
  height: 70vh;
  overflow-y: scroll;
  padding: 1em;

  
  `;

