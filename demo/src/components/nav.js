import React from 'react'
import styled from 'styled-components'

function Nav () {
  return (
    <Wrapper>
      <a href='index.html'>articles</a>
      <a href='about-me.html'>about me</a>
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.nav`
  text-align: right;
  max-width: 1310px;
  margin: 0.5rem auto;
`
