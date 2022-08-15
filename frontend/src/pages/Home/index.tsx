import Card from "../../Components/Card";
import {
  Container,
  ContainerCard,
  Grafico,
  ContainerItens,
  ContainerCards,
} from "./styles";
import Input from "./Inputs/InputSearch";
import CardItens from "./CardItens";
import ButtonAzul from "../../Components/Buttons/ButtonAzul";
import ButtonLaranja from "../../Components/Buttons/ButtonLaranja";
// Testando Request

import axios from "axios";
import Conta from "../../Interfaces/Conta";
import { useFetch } from "../../Hooks/useFetch";
import Modal from "../../Components/Modal";
import IDeleteConta from "../../Interfaces/IDeleteConta";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GraficoPorTipo from "./Grafico";

import getDataInput from "../../services/getDataInput";

const Home = () => {
  const getToken = sessionStorage.getItem("token");

  const [modalQuestions, setModalQuestions] = useState<boolean>(false);
  const [pesquisaInstituicao, setPesquisaInstituicao] = useState({});

  const [busca, setBusca] = useState("");
  const [contaQuantidade, setContaQuantidade] = useState(0)

  function afirmarExclusaoModal() {
    setModalQuestions(true);
    setTimeout(() => {
      setModalQuestions(false);
    }, 2000);
  }

  const { dados, setDados, isCarregando } = useFetch<Conta[]>({
    method: "get",
    url: "/contas",
    headers: {
      "authorization-token": `${getToken}`,
    },
  });

  const navigate = useNavigate();
  const navigateToEdit = (id: number | string) => {
    navigate(`/home/${id}`);
  };

  // Pesquisa de dados pela instituicao
  useEffect(() => {
    axios
      .get(`http://localhost:3210/contas/${busca}`, {
        headers: {
          "authorization-token": `${getToken}`,
        },
      })
      .then((resp) => {
        console.info(resp);
        setDados(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [busca]);
  
  // Contagem de quantas contas tem 12
  useEffect(() => {
    axios
      .get(`http://localhost:3210/estatistica/contagem/`, {
        headers: {
          "authorization-token": `${getToken}`,
        },
      })
      .then((resp) => {
        console.info(resp);
        setContaQuantidade(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  function deletarConta(idAExcluir: IDeleteConta) {
    const getId = idAExcluir.id;
    axios
      .delete(`http://localhost:3210/contas/${getId}`,
      {
        headers: {
          "authorization-token": `${getToken}`,
        },
      })
      .then((resp) => {
        console.info(resp);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});

    const filterItensConta: any = dados?.filter(
      (dado) => dado.id !== idAExcluir.id
    );

    setDados(filterItensConta);
  }

  return (
    <Container>
      {modalQuestions && (
        <Modal>
          <img width={"100px"} src="./assets/done.svg"></img>
          <h3>Excluido com sucesso</h3>
        </Modal>
      )}
      {isCarregando && <Modal>Carregando....</Modal>}
      <Card>
        <ContainerCard>
          <h4>Quantidade de Contas</h4>
          <h2>{contaQuantidade}</h2>
        </ContainerCard>
          <div>
            <GraficoPorTipo></GraficoPorTipo>
           </div>
      </Card>

      <ContainerItens>
        <div>
          <Input
            type="text"
            placeholder="Pequise pela instituicao aqui 🔎"
            onChange={(ev: any) => {
              setBusca(ev.target.value);
            }}
          ></Input>
        </div>
        <ContainerCards>
          {dados?.map((dado) => {
            return (
              <CardItens
                key={dado.id}
                id={dado.id}
                tipo={dado.tipo}
                login={dado.login}
                senha={dado.senha}
                instituicao={dado.instituicao}
                obs={dado.obs}
              >
                <div>
                  <ButtonAzul
                    onClick={() => {
                      navigateToEdit(dado.id);
                    }}
                  >
                    Editar
                  </ButtonAzul>
                  <ButtonLaranja
                    onClick={() => {
                      deletarConta(dado);
                      afirmarExclusaoModal();
                    }}
                  >
                    Remove
                  </ButtonLaranja>
                </div>
              </CardItens>
            );
          })}
        </ContainerCards>
        <Link to={"/add"}>
          <ButtonLaranja>Adicionar +</ButtonLaranja>
        </Link>
      </ContainerItens>
    </Container>
  );
};

export default Home;
