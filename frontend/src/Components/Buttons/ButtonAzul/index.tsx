import { PropsWithChildren } from "react";
import { StyleSecodary } from "../styles";


type Propriedades = {
  onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonAzul = ({ onClick , children }:PropsWithChildren<Propriedades>) => {
  return <StyleSecodary onClick={onClick}>{children}</StyleSecodary>;
};

export default ButtonAzul;
