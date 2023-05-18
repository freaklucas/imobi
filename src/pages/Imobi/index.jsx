import TopBanner from "../../components/TopBanner";
import { Container, 
  Left, 
  ProfileAvatar, 
  Right, 
  Thumb, 
  Profile, 
  Description, 
  ProfileDescription,
  ProfileContact,
  ProfileFormContact 
} from "./styles";

const Imobi = () => {
  return (
    <>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="imagem banner"
            />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>Descrição</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileAvatar>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="imagem avatar usuario" />
            </ProfileAvatar>
            <ProfileDescription>
              <h3>Lucas</h3>
              <p>Descrição do usuario</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
          <h3>Informações para contato</h3>
              <p>(64) 912348299</p>
              <p>lucas@gmail.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contrate o anunciate</h3>
            <form>
              <input type="text" placelder="Nome" />
              <input type="text" placelder="Email" />
              <textarea type="text" cols="30" rows="10" placeholder="Mensagem" />
              <button>Enviar mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </>
  );
};

export default Imobi;
