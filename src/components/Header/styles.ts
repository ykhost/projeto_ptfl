import styled from 'styled-components'

export const Container = styled.header`
  background: var(--black-800);

`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  a.logo{
    font-weight: 800;
    font-size: 1.5rem;
  }

  nav{
    a{
      font-weight: 700;
    
      & + a{
        padding: 0 3rem;
      }

      transition: filter 0.2s;
    }

    a:hover{
      filter: brightness(0.8);
    }


  }
`