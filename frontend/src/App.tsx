import React, { useState } from "react";

import GlobalStyle from "./theme/global";
import { MainStyle } from "./styles";
// import Login from './pages/Login';

import ButtonLaranja from "./Components/Buttons/ButtonLaranja";

import { BiLogOut, BiHomeAlt, BiPlusCircle } from "react-icons/bi";
import Header from "./Components/Header";
import ButtonHeader from "./Components/Header/ButtonHeader";
import Home from "./pages/Home";
import ContainerBodyEffect from "./Components/ContainerBodyEffects";
import Modal from "./Components/Modal";
import InputModal from "./pages/Home/Inputs/InputModal";

function App() {
  const [showModalAdd, setShowModalAdd] = useState(false);

  const mostrarModalAdd = () => {
    setShowModalAdd(true);
  };
  const esconderModal = () => {
    setShowModalAdd(false);
  };

  const request = () => {
    axios.get('')
  }

  return (
    <>
      <Modal prefix={showModalAdd ? "flex" : ""}>
        <h3>Adicionar Conta</h3>
        <InputModal type={"text"} placeholder={"Tipo"}></InputModal>
        <InputModal type={"text"} placeholder={"Login"}></InputModal>
        <InputModal type={"text"} placeholder={"Senha"}></InputModal>
        <InputModal type={"text"} placeholder={"Instituição"}></InputModal>
        <InputModal type={"text"} placeholder={"Obs"}></InputModal>
        <ButtonLaranja onClick={esconderModal}>Adicionar</ButtonLaranja>
      </Modal>

      <GlobalStyle />
      <MainStyle>
        <Header>
          <ButtonHeader>
            <BiLogOut size={25}></BiLogOut>
            <p>Sair</p>
          </ButtonHeader>
          <ButtonHeader>
            <BiHomeAlt size={25}></BiHomeAlt>
            <p>Home</p>
          </ButtonHeader>
          <ButtonHeader
            onClick={mostrarModalAdd}
          >
            <BiPlusCircle size={25}></BiPlusCircle>
            <p>Adicionar</p>
          </ButtonHeader>
        </Header>
        <ContainerBodyEffect>
          <Home />
        </ContainerBodyEffect>
      </MainStyle>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
