import styled from "styled-components";

export const ContainerSmall = styled.section`
  display: flex;
  gap: 20px;

  font-size: 15px;
  word-wrap: break-word;
  padding: 1.3em;
  display: flex;
  border-radius: 1em;
  justify-content: space-between;
  background-color: var(--branco);
  box-shadow: 1px 1px 10px var(--sombra);
  div {
    display: grid;
    gap: 0.2em;
  }
  li{
    list-style-type: none;
  }
  li:nth-of-type(2) {
  color: lime;
}

li:nth-of-type(3) {
  color: red;
}
`;
