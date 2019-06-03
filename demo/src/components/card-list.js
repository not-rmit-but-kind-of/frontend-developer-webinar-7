import React from 'react'
import styled from 'styled-components'

import Card from './card'

function CardList (props) {
  return (
    <Wrapper>
      {props.posts.map(function (post, index) {
        return (
          <CardListItem key={index}>
            <Card
              title={post.title}
              image={post.image}
              summary={post.summary}
            />
          </CardListItem>
        )
      })}
    </Wrapper>
  )
}

export default CardList

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
`

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
