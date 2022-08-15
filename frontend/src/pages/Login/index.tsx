import Card from "../../Components/Card";
import Input from "../../Components/Inputs/PrimaryInput";
import ButtonLaranja from "../../Components/Buttons/ButtonLaranja";
import ButtonAzul from "../../Components/Buttons/ButtonAzul";
import ButtonContainer from "../../Components/ContainerButtons";
import { StyleDefault, SuccessCard, ErrorCard, StyleFormLogin } from "./styles";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import getDataInput from "../../services/getDataInput";

import Modal from "../../Components/Modal";
import axios from "axios";

import IRetornoBack from "../../Interfaces/IRetornoBack";

const Login = <T = unknown>() => {

  function colocaNaMemoriaToken(tokenRecebido:string) {
    const tokenAcesso = sessionStorage.setItem('token', tokenRecebido);
  }

  const [dados, setDados] = useState<IRetornoBack>({});
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<IRetornoBack>({});

  const [login, setLogin] = useState({});
  const [senha, setSenha] = useState({});
  

  // Redirecionando para pagina home 
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };


  const logar = () => {
    setIsCarregando(true);
    axios
      .post("http://localhost:3210/auth/logar", {
        usuario: login,
        senha: senha,
      }
      )
      .then((resp) => {
        const respostaSuccesso = resp.data;
        setDados(respostaSuccesso);// Seta os dados
        colocaNaMemoriaToken(respostaSuccesso.token); // Inserir Token
        navigateToHome()
      })
      .catch((err) => {
        const respostaError = err.response.data;
        console.error(respostaError);
        setError(respostaError);
      })
      .finally(() => {
        setIsCarregando(false);
      });
  };

  return (
    <StyleDefault>
      <StyleFormLogin>
        <h1>Login</h1>
        <Input
          type="text"
          descricaoPlaceholder="Login"
          onChange={(e: any) => {
            e.preventDefault();
            getDataInput(e, setLogin);
          }}
        ></Input>
        <Input
          type="password"
          descricaoPlaceholder="Senha"
          onChange={(e: any) => {
            getDataInput(e, setSenha);
          }}
        ></Input>
        <ButtonContainer>
          <ButtonLaranja onClick={(e:any) => {
            e.preventDefault();
            logar()
            }}>Logar</ButtonLaranja>
          <ButtonAzul>Registrar</ButtonAzul>
        </ButtonContainer>
        { dados && <SuccessCard>{error.msg}</SuccessCard>  }
      </StyleFormLogin>
      {isCarregando && <Modal>Carregando....</Modal>}
    </StyleDefault>
  );
};

export default Login;
