import { ContainerButtonsStyle } from "./styles";
type Propriedades = {
  children: any;
};

function ButtonContainer(props: Propriedades) {
  return <ContainerButtonsStyle>{props.children}</ContainerButtonsStyle>;
}

export default ButtonContainer;
