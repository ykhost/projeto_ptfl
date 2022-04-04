import { Container, Content} from './styles'

export function Header() {
  return(
      <Content className="container">
          <a className="logo" href="">ANDRÉ</a>
          <nav>
            <a href="">Projetos</a>
            <a href="">Contato</a>
          </nav>
      </Content>
  )
}