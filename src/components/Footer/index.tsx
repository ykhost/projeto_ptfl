import { BsLinkedin, BsGithub, BsMailbox2 } from "react-icons/bs"
import { Container, Content } from "./styles"

export function Footer(){
  return (
    <Container>
      <Content className="container">
        <div className='social'>
          <a href="" target="_blank"><BsLinkedin/></a>
          <a href="" target="_blank"><BsGithub/></a>
          <a href="" target="_blank"><BsMailbox2/></a>
        </div>
        <div>
          <h3>test</h3>
        </div>
      </Content>
    </Container>
  )
}