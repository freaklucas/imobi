import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container, Item, Copy } from "./styles";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <Container>
        <Item>
          <img src={logo} alt="Logo nuxt" />
          <p>Teste Footer!</p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Serviços</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Serviços</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Serviços</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>© 2023</p>
        <li>
          <span>Termos de uso</span>
        </li>
        <li>
          <span>Política de privacidade</span>
        </li>
        <li>
          <span>Política de Cookies</span>
        </li>
      </Copy>
    </>
  );
};

export default Footer;
