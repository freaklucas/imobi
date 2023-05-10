import React from "react";
import styled, { 
  Container, 
  Logo, 
  Menu 
} from "./styles";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="imagem da logo" />
      </Logo>
      <Menu>
        <ul>
          <li>
            <span>Cadastro/Login</span>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
