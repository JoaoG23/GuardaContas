import { PropsWithChildren } from "react";
import { StyleDefault } from '../styles';


type Propriedades = {
  onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonLaranja = ({ onClick , children }:PropsWithChildren<Propriedades>) => {
  return <StyleDefault onClick={onClick}>{children}</StyleDefault>;
};

export default ButtonLaranja;
