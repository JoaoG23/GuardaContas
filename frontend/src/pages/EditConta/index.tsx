

import { Container } from "./styles";
import { useState } from "react";
import IRetornoBack from "../../Interfaces/IRetornoBack";
import InputModal from "./Inputs/InputModal";
import ButtonLaranja from "../../Components/Buttons/ButtonLaranja";
import getDataInput from "../../services/getDataInput";
import axios from "axios";
import Modal from "../../Components/AdicionarModal";
import { useNavigate , useParams } from "react-router-dom";
import { useEffect } from "react";

const EditConta = () => {
  const getToken = sessionStorage.getItem("token");
  const [dados, setDados] = useState<IRetornoBack>({});
  const [isCarregando, setIsCarregando] = useState(true);
  const [error, setError] = useState<IRetornoBack>({});
  const [showModal , setShowModal] = useState<boolean>(true);
  
  // Dados Enviados
  const [tipo, setTipo] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [obs, setObs] = useState('');
  
  const { id } = useParams();

  const navigate = useNavigate();

  function navigateToHome() {
    setTimeout(() => {
      navigate('/home')
    }, 700);
  }

  // setIsCarregando(true);

  useEffect(() => {
    axios.get(`http://localhost:3210/contas/id/${id}`,
    {
      headers: {
        "authorization-token": `${getToken}`,
      },
    }).then((resp) => {
      console.info(resp.data.tipo);

      // buscando dados Antigos
      const oldTipo = resp.data.tipo;
      const oldLogin = resp.data.login;
      const oldSenha = resp.data.senha;
      const oldInstituicao = resp.data.instituicao;
      const oldObs = resp.data.obs;
      
      // Inserindo nos Inputs
      setTipo(oldTipo);
      setSenha(oldSenha);
      setLogin(oldLogin);
      setObs(oldObs);
      setInstituicao(oldInstituicao);
    }).catch((err) => {
      console.info(err)
    }).finally(() => {
      setIsCarregando(false);
    })

  },[])

  function editarConta() {
    axios
      .put(`http://localhost:3210/contas/${id}`, {
        tipo: tipo,
        login: login,
        senha: senha,
        instituicao: instituicao,
        obs: obs,
      },
      {
        headers: {
          "authorization-token": `${getToken}`,
        },
      })
      .then((resp) => {
        const respostaSuccesso = resp.data;
        console.log(respostaSuccesso);
        setDados(respostaSuccesso);
        navigateToHome();
      })
      .catch((err) => {
        const respostaError = err.response.data;
        console.error(respostaError);
        setError(respostaError);
      })
      .finally(() => {
        setIsCarregando(false);

      });
  }

  return (
    
    <Container>
      { showModal && (<Modal>{dados.msg}</Modal>)}
      <h2>Editar Conta {id}</h2>
      <label>Tipo</label>
      <InputModal value={tipo}
        onChange={(e: any) => {
          getDataInput(e, setTipo)
        }}
        type={"text"}
        placeholder="Tipo"
        ></InputModal>
        <label>Login</label>
      <InputModal value={login}
        onChange={(e: any) => {
          getDataInput(e, setLogin)
        }}
        type={"text"}
        placeholder="Login"
        ></InputModal>
        <label>Senha</label>
      <InputModal value={senha}
        onChange={(e: any) => {
          getDataInput(e, setSenha)
          
        }}
        type={"text"}
        placeholder="Senha"
        ></InputModal>
        <label>Instituicao</label>
      <InputModal value={instituicao}
        onChange={(e: any) => {
          
          getDataInput(e, setInstituicao)
        }}
        type={"text"}
        placeholder="Instituicao"
        ></InputModal>
        <label>Observacões</label>
      <InputModal value={obs}
        onChange={(e: any) => {
          
          getDataInput(e, setObs)
        }}
        type={"text"}
        placeholder="Obs"
      ></InputModal>
      <ButtonLaranja onClick={editarConta}>
        <h3>Salvar</h3>
        { isCarregando && <h2>Carregando...</h2>}
      </ButtonLaranja>
      { dados && (<h2>{dados.msg}</h2>)}
    </Container>
  );
};

export default EditConta;
