import styled from "styled-components";

export const PrimaryInputStyle = styled.input`
  border: none;
  padding: 5px;
  border-radius: 7px;
  font-weight: bold;
  border-bottom: 3px solid #96b3d9;
  border-right: #96b3d9;

  background-color: white;
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

export const SecondaryInputStyle = styled(PrimaryInputStyle)`
    background-color: #96b3d9;
`;
