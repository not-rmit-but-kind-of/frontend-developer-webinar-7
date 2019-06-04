import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  *, :after, :before {
    box-sizing: border-box;
  }
  
  @media only screen and (min-width: 768px) {
    html {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    color: #555;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  h1 {
    font-size: 3rem;  
    font-family: "Montserrat", sans-serif;
  }

  a {
  text-decoration: none;
  display: inline-block;
  margin-right: 1rem;
  color: inherit;
}

  a:hover {
    text-decoration: underline;
  }

  a:last-child {
    margin-right: 0;
  }

`

export default GlobalStyle
