import Card from "../../components/Card";
import { Container, Wrapper } from "./styles";

const Home = () => {
  let Cards = [];
  for(let i=0; i<4; i++) {
    Cards.push(<Card key={i}/>)
  }

  return (
    <>
      <Container>
        <h2>Encontre um imóvel</h2>
      </Container>
      <Wrapper>
        {Cards}
      </Wrapper>
    </>
  );
}

export default Home;