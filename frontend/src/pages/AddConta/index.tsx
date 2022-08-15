import { Container } from "./styles";
import { useState } from "react";
import IRetornoBack from "../../Interfaces/IRetornoBack";
import InputModal from "./Inputs/InputModal";
import ButtonLaranja from "../../Components/Buttons/ButtonLaranja";
import getDataInput from "../../services/getDataInput";
import axios from "axios";
import Modal from "../../Components/AdicionarModal";
import { useNavigate } from "react-router-dom";

const AddConta = () => {
  const getToken = sessionStorage.getItem("token");
  const [dados, setDados] = useState<IRetornoBack>({});
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<IRetornoBack>({});
  const [showModal, setShowModal] = useState<boolean>(true);

  // Dados Enviados
  const [tipo, setTipo] = useState({});
  const [login, setLogin] = useState({});
  const [senha, setSenha] = useState({});
  const [instituicao, setInstituicao] = useState({});
  const [obs, setObs] = useState({});

  const navigate = useNavigate();

  function navigateToHome() {
    setTimeout(() => {
      navigate("/home");
    }, 700);
  }

  function adicionarConta() {
    axios
      .post(
        "http://localhost:3210/contas/",
        {
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
        }
      )
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
      {showModal && <Modal>{dados.msg}</Modal>}
      <h2>Adicionar Conta</h2>
      <InputModal
        onChange={(e: any) => {
          getDataInput(e, setTipo);
        }}
        type={"text"}
        placeholder="Tipo"
      ></InputModal>
      <InputModal
        onChange={(e: any) => {
          getDataInput(e, setLogin);
        }}
        type={"text"}
        placeholder="Login"
      ></InputModal>
      <InputModal
        onChange={(e: any) => {
          getDataInput(e, setSenha);
        }}
        type={"text"}
        placeholder="Senha"
      ></InputModal>
      <InputModal
        onChange={(e: any) => {
          getDataInput(e, setInstituicao);
        }}
        type={"text"}
        placeholder="Instituicao"
      ></InputModal>
      <InputModal
        onChange={(e: any) => {
          getDataInput(e, setObs);
        }}
        type={"text"}
        placeholder="Obs"
      ></InputModal>
      <ButtonLaranja onClick={adicionarConta}>
        <h3>Adicionar</h3>
        {isCarregando && <h2>Carregando...</h2>}
      </ButtonLaranja>
      {dados && <h2>{dados.msg}</h2>}
    </Container>
  );
};

export default AddConta;
