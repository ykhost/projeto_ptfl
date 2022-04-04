import styled from 'styled-components'


export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem;
  z-index: 1;
`



export const Content = styled.div`
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;

  div.social{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    
    a {
      margin-bottom: 0.8rem
  
    }
  }

`