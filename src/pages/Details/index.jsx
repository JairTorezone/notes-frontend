import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Details() {
  return (
    <Container>
      <h1>Ola mundo</h1>
      <span>Torezone</span>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}
