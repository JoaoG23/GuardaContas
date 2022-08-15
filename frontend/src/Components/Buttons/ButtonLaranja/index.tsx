import { StyleDefault } from '../styles';


type Propriedades = {
  children?:JSX.Element[] | JSX.Element |  string | any; 
  onClick?:any
};

const ButtonLaranja:React.FC<Propriedades> = ({ onClick , children }) => {
  return <StyleDefault onClick={onClick}>{children}</StyleDefault>;
};

export default ButtonLaranja;
