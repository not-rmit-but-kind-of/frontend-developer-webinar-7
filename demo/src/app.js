import React from 'react'
import styled from 'styled-components'

import posts from './data/posts'

import Hero from './components/hero'
import Nav from './components/nav'
import CardList from './components/card-list'
import GlobalStyle from './components/global-style'

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
