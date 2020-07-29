import React from "react";

// Import sass file
import "./styles.scss";

const Test = () => {
  return (
    <section>
      <h2>Sass</h2>
      <div className="parent-sass">
        <div className="child1-sass">Hello</div>
        <div className="child2-sass">World</div>
      </div>
    </section>
  );
};

export default Test;
