import styled from "styled-components";

export const DarkButtonStyle = styled.button`

    background-color:#f25D07;
    color:white;
    border:none;
    font-weight: bold;
    border-radius: 8px;
    padding: 7px;
    width:50%;
    :hover{
        transition: 0.4s ease-in;
        background-color:white;
        color:#f25D07;
    }
`;

export const SecondaryButtonStyle = styled(DarkButtonStyle)`
    background:#0583F2;
    color:white;
    :hover{
        transition: 0.5s ease-in;
        background-color:white;
        color:#0583F2;
    }
`;




