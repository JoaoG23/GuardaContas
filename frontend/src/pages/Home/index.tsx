import Card from "../../Components/Card";
import { Container, ContainerCard, Grafico, ContainerItens, ContainerCards } from "./styles";
import Input from "./Inputs/InputSearch";
import CardItens from "./CardItens";

const Home = () => {
  return (
    <Container>
      <Card>
        <ContainerCard>
          <h4>Quantas contas registradas</h4>
          <h4>12</h4>
        </ContainerCard>
        <Grafico>{/* Graficos  */}</Grafico>
      </Card>

      <ContainerItens>
        <Input type='text' placeholder='Pequise pelo tipo aqui 🔎'></Input>
        <ContainerCards>
          <CardItens />
          <CardItens />
          <CardItens />
          <CardItens />
          <CardItens />
          <CardItens />
          <CardItens />
          <CardItens />
          <CardItens />
        </ContainerCards>
      </ContainerItens>
    </Container>
  );
};

export default Home;
