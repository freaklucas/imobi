import { 
  Container, 
  Description, 
  Img,
  Items 
} from "./styles";

const Card = () => {
  return (
    <Container>
      <Img>
        <img 
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Banner img" 
        />
      </Img>
      <Description>
        <h4>Apartamento</h4>
        <Items>
          <span></span>
          <span>R$ 2.100,00</span>
        </Items>
      </Description>
    </Container>
  );
};

export default Card;
