import React from 'react'
import styled from 'styled-components'

function Card (props) {
  return (
    <CardListItem>
      <Wrapper>
        <img src={props.image} alt={`Shot of ${props.title}`} />
        <Content>
          <StyledH2>{props.title}</StyledH2>
          <Summary>{props.summary}</Summary>
        </Content>
      </Wrapper>
    </CardListItem>
  )
}

export default Card

const CardListItem = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  flex: 0 0 100%;
  max-width: 100%;

  @media only screen and (min-width: 480px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (min-width: 1024px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
`

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
