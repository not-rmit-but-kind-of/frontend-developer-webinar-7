import React from 'react'
import styled from 'styled-components'

function Card (props) {
  return (
    <Wrapper>
      <img src={props.image} alt={`Shot of ${props.title}`} />
      <Content>
        <StyledH2>{props.title}</StyledH2>
        <Summary>{props.summary}</Summary>
      </Content>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.article`
  border: 1px #ccc solid;
  border-radius: 5px;
  background-color: #fff;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`

const Content = styled.div`
  padding: 1.25rem;
`

const StyledH2 = styled.h2`
  margin: 0;
  line-height: 1;
`

const Summary = styled.p`
  font-size: 0.9rem;
`
