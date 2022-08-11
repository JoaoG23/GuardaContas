import styled from "styled-components";
import { StyleDefault } from "../../Login/styles";

export const StylesDefault = styled.input`
  border: none;
  padding: 5px;
  border-radius:9px;
  margin: 0.2em;
  /* font-weight: bold; */
  background-color: var(--branco);
  width: 90%;
  box-shadow: 2px 2px 3px var(--sombramedia);
`;

export const StyleModal = styled(StyleDefault)`
  background-color: var(--brancoescuro);
`
