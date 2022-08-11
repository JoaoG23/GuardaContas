import React from "react";
import { StylesItem } from "../styles";

interface Iinput {
  descricaoPlaceholder?:any;
  type?: string;
  onChange?:any;
}

// import { PropsWithChildren } from "react";
// import { StyleSecodary } from "../styles";


// type Propriedades = {
//   onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// };

// const ButtonAzul = ({ onClick , children }:PropsWithChildren<Propriedades>) => {
//   return <StyleSecodary onClick={onClick}>{children}</StyleSecodary>;
// };

// export default ButtonAzul;


const Input = (props: Iinput) => {
  return (
    <StylesItem
      onChange={props.onChange}
      placeholder={props.descricaoPlaceholder}
      type={props.type}
    ></StylesItem>
  );
};

export default Input;
