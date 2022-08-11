
import { StyleDefault } from "./styles";

type TChildens = {
    children?:JSX.Element[] | JSX.Element;
}

const Header:React.FC<TChildens> = ({children}) => {
    return(<StyleDefault>
        {children}
    </StyleDefault>)
}

export default Header;

