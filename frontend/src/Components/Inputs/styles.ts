import styled from "styled-components";

export const StylesItem = styled.input`
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  background-color: var(--branco);
  width: 90%;
  border: 2px solid var(--sombra);
  
  :focus {
    /* animation: evidente 3s ease-in 0s  forwards alternate; */
  }

  /* @keyframes evidente {
    from {
      padding:5px;
      background-color: whitesmoke;
      color: #000;
    }
    to {
      padding: 10px;
      background-color: #b4bec9;
      color: #159a9c;
    }
  } */
`;

