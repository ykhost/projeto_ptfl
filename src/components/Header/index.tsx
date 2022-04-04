import { Container, Content} from './styles'

export function Header() {
  return(
    <Container>
      <Content>
          <a className="logo" href="">ANDRÉ</a>
          <nav>
            <a href="">Projetos</a>
            <a href="">Contato</a>
          </nav>
      </Content>
    </Container>
  )
}