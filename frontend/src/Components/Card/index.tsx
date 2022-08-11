import { StyleItem } from "./styles";

type TChildens = {
    children?:JSX.Element[];
}
const Card:React.FC<TChildens> = ({children}) => {
    return(<StyleItem>
        {children}
    </StyleItem>)
}

export default Card;