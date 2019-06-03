import React from "react";

function Hero(props) {
  return (
    <header className="hero">
      <img
        className="hero-image"
        alt="Aerial shot of Tokyo"
        srcSet="images/hero/hero-640w.jpg 640w,
            images/hero/hero-768w.jpg 768w,
            images/hero/hero-1024w.jpg 1024w,
            images/hero/hero-1366w.jpg 1366w,
            images/hero/hero-1600w.jpg 1600w,
            images/hero/hero-1920w.jpg 1920w"
        src="images/hero/hero-1920w.jpg"
      />
      <div className="hero-content">
        <h1>{props.title}</h1>
        <p className="hero-author">{props.author}</p>
      </div>
    </header>
  );
}

export default Hero;
