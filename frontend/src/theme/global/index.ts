import { createGlobalStyle } from "styled-components";
import {Secular} from '../../fonts/styles';
const GlobalStyle = createGlobalStyle`

    ${Secular}
    :root{

        --azulescuro: rgba(4, 107, 242, 1); 
        --azulclaro: rgba(149, 178, 216, 1); 
        --azul: rgba(4, 131, 242, 1); 
        --laranja: rgba(242, 138, 12, 1); 
        --laranjaescuro: rgba(242, 93, 7, 1);
        --branco:white;
        --brancoescuro: rgb(232, 245, 252); 
        --sombra:rgba(0, 16, 31, 0.1);
        --sombramedia:rgba(0, 16, 31, 0.2);
        --sombraescura:rgba(0, 16, 31, 0.7);
        --cinza:gray;
        

    }
    *{
        font-family: 'Secular One', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        background-image: linear-gradient(var(--azul), var(--azulescuro));
    padding: 0;
    margin: 0;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`;

export default GlobalStyle;
