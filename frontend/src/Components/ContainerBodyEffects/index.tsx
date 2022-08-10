import { StyleItem } from "./styles";

type TChildens = {
    children?:JSX.Element | JSX.Element[];
}
const ContainerBodyEffect:React.FC<TChildens> = ({children}) => {
    return(<StyleItem>
        {children}
    </StyleItem>)
}

export default ContainerBodyEffect;