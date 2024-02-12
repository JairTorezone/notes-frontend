import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir notas" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi
            ducimus! Suscipit adipisci sunt sit, aperiam veritatis magnam culpa
            ipsa autem eligendi, facere iure sequi sapiente. Nesciunt laborum
            commodi rem?ipsa autem eligendi, facere iure sequi sapiente.
            Nesciunt laborum commodi rem?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>{" "}
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
