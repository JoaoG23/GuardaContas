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
    
    a{
        opacity: 0.7;
        text-decoration: none;
        color:black;
        text-align: center;
    }
    a:hover{
        transition: 1s;
        background-color: var(--cinza);
        border-radius: 6px;
        padding: 5px;

    }
    
    @media screen and (max-width:600px) {
        
        padding: 0vw;
        width: 98vw;
    }

`