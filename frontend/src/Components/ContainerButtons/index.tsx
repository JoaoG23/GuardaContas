import { ContainerButtonsStyle } from "./styles";
type Propriedades = {
  children?: JSX.Element[] | JSX.Element;
};

function ButtonContainer(props: Propriedades) {
  return <ContainerButtonsStyle>{props.children}</ContainerButtonsStyle>;
}

export default ButtonContainer;
