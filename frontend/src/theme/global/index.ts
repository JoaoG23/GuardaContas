import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

    :root{

        --azulescuro: rgba(4, 107, 242, 1); 
        --azulclaro: rgba(149, 178, 216, 1); 
        --azulclaroescuro: rgba(130, 178, 216, 1); 
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
        font-family:Arial, Helvetica, sans-serif;
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

    *::-webkit-scrollbar {
  width: 15px;
  border-radius: 10px;
}

*::-webkit-scrollbar-track {
  background: linear-gradient(var(--branco), var(--brancoescuro)) ;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--laranja);
  border-radius: 20px;
  border: 2px solid var(--branco);
  /* border: 3px solid orange; */
}

`;

export default GlobalStyle;
