import React from "react";

function Card(props) {
  return (
    <article className="destination-card">
      <img
        src={props.image}
        className="destination-card-image"
        alt={`Shot of ${props.title}`}
      />
      <div className="destination-card-content">
        <h2 className="destination-card-heading">{props.title}</h2>
        <p className="destination-card-summary">{props.summary}</p>
      </div>
    </article>
  );
}

export default Card;
