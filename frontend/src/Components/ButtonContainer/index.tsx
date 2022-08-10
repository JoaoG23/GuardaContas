import { StyleItem } from "./styles";

type TChildens = {
    children?:any;
}
const BottonContainer = (props:TChildens) => {
    return(<StyleItem>
        {props.children}
    </StyleItem>)
}

export default BottonContainer;