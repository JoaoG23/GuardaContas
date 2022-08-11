import { PropsWithChildren } from "react";
import { Style } from './styles';


type Propriedades = {
  onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonHeader = ({ onClick , children }:PropsWithChildren<Propriedades>) => {
  return <Style onClick={onClick}>{children}</Style>;
};

export default ButtonHeader;
