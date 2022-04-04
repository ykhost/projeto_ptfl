import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --off-white: #efefef;
    --black-800: #1f2025;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px;  */
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      color: var(--off-white)
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`
