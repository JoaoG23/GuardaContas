import styled from "styled-components";

export const StyleDefault = styled.header`
    width: 100vw;
    background-color: var(--branco);
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    box-shadow: 1px 1px 10px var(--sombra);

    position: fixed;
    bottom:0vh;
    
    
    @media screen and (max-width:600px) {
        
        padding: 0vw;
        width: 98vw;
    }

`