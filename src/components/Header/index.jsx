import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/jairtorezone.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Jair Torezone</strong>
        </div>
      </Profile>
    </Container>
  );
}
