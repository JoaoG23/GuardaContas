import styled from "styled-components";

export const StyleDefault = styled.button`
  border: none;

  background-image: linear-gradient(var(--laranja), var(--laranjaescuro));
  font-weight: bold;
  color: var(--branco);
  border-radius: 7px;
  padding:1em;
  a{
    text-decoration: none;
    color:black;
    opacity: 0.5;
  }
  
  :hover {
    transition: 0.5s ease-in;
    border: 2px solid var(--laranja);
    background-image: linear-gradient(var(--branco), white);
    color: var(--laranja);
  }
`;

export const StyleSecodary = styled(StyleDefault)`
  background-image: linear-gradient(var(--azul), var(--azulescuro));
`;
