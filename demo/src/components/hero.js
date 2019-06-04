import React from 'react'
import styled from 'styled-components'

function Hero (props) {
  return (
    <Header>
      <HeroImage
        alt='Aerial shot of Tokyo'
        srcSet='images/hero/hero-640w.jpg 640w,
            images/hero/hero-768w.jpg 768w,
            images/hero/hero-1024w.jpg 1024w,
            images/hero/hero-1366w.jpg 1366w,
            images/hero/hero-1600w.jpg 1600w,
            images/hero/hero-1920w.jpg 1920w'
        src='images/hero/hero-1920w.jpg'
      />
      <HeroContent>
        <h1>{props.title}</h1>
        <HeroAuthor>{props.author}</HeroAuthor>
      </HeroContent>
    </Header>
  )
}

export default Hero

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  min-height: 60vh;
  position: relative;
  color: #fff;
  text-align: center;
`

const HeroImage = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const HeroContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`

const HeroAuthor = styled.p`
  font-size: 2rem;
`
