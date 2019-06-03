import React from "react";

import Card from "./card";

function CardList(props) {
  return (
    <div className="destination-card-list">
      {props.posts.map(function(post, index) {
        return (
          <div className="destination-card-list-item" key={index}>
            <Card
              title={post.title}
              image={post.image}
              summary={post.summary}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
