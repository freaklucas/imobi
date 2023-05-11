import Card from "../../components/Card";
import { Container, Wrapper } from "./styles";

const Home = () => {
  return (
    <>
      <Container>
        <h2>Encontre um imóvel</h2>
      </Container>
      <Wrapper>
        <Card />
      </Wrapper>
    </>
  );
}

export default Home;