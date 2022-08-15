// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./theme/global";
import Login from "./pages/Login";
import Header from "./Components/Header";

import Home from "./pages/Home";
import AddConta from "./pages/AddConta";
import EditConta from "./pages/EditConta";
import ContainerBodyEffect from "./Components/ContainerBodyEffects";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header></Header>
        <ContainerBodyEffect>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/home/:id" element={<EditConta />}></Route>
            <Route path="/add" element={<AddConta />}></Route>
            <Route path="*" element={<Login />}></Route>
          </Routes>
        </ContainerBodyEffect>
      </Router>
    </>
  );
}

export default App;
