import React, { ChangeEvent } from "react";

import { StylesDefault } from "../styles";

type TChildens = {
    placeholder?:React.HTMLInputTypeAttribute;
    type:React.HTMLInputTypeAttribute;
    onChange?:(e:ChangeEvent) => void;
}

const Input:React.FC<TChildens> = ({onChange,type,placeholder}) => {
    return(<StylesDefault onChange={onChange} type={type} placeholder={placeholder}>
        {/* {children} */}
    </StylesDefault>)
}

export default Input;