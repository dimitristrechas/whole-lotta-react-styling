import React from "react";

// Import sass file
import "./styles.scss";

const Test = () => {
  return (
    <section>
      <h2>Sass</h2>
      <div className="parent">
        <div className="child1">Hello</div>
        <div className="child2">World</div>
      </div>
    </section>
  );
};

export default Test;
