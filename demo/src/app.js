import React from "react";

import "./main.css";
import posts from "./data/posts";

import Hero from "./components/hero";
import Nav from "./components/nav";
import CardList from "./components/card-list";

function App() {
  return (
    <div>
      <Nav />
      <Hero title="Don't stop travelling" author="I am Groot" />
      <main>
        <div className="container">
          <CardList posts={posts} />
        </div>
      </main>
    </div>
  );
}

export default App;
