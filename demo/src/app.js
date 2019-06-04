import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import posts from './data/posts'

import Hero from './components/hero'
import Nav from './components/nav'
import CardList from './components/card-list'

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

function App () {
  return (
    <React.Fragment>
      <GlobalStyle />

      <div>
        <Nav />
        <Hero title="Don't stop travelling" author='I am Groot' />
        <main>
          <Content>
            <CardList posts={posts} />
          </Content>
        </main>
      </div>
    </React.Fragment>
  )
}

export default App

const Content = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: 1310px;
`
