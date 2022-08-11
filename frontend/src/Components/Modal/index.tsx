import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type TChildens = {
    children?:JSX.Element[] | JSX.Element | string;
    prefix?:string ;
}

const Modal :React.FC<TChildens> = ({
    children,
    prefix
}) => (
        <ModalBackgroundStyle prefix={prefix}>
            <ModalStyle>
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default Modal;