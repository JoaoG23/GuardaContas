
import { StyleDefault } from "./styles";
import React from "react";
import { Link } from "react-router-dom";
import { navList } from './Data/NavList';

const Header: React.FC = () => {


  return (
    <StyleDefault>
      {navList.map(item => <Link key={item.id} to={item.link}>
        <img src={item.iconsPath} alt={item.nome}></img>
        <p>
        {item.nome}
        </p>
        </Link>)}
    </StyleDefault>
  );
};

export default Header;
