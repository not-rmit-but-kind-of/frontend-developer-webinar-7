import React from 'react'
import styled from 'styled-components'

import Card from './card'

function CardList (props) {
  return (
    <Wrapper>
      {props.posts.map(function (post, index) {
        return (
          <Card
            title={post.title}
            image={post.image}
            summary={post.summary}
            key={index}
          />
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
