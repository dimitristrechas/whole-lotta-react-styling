import React from "react";
import styled from "@emotion/styled";

let color = "pink";
let breakpointTablet = "768px";

const Parent = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  font-weight: 900;
  text-align: center;
  color: ${color};

  @media (min-width: ${breakpointTablet}) {
    max-width: 20rem;
  }

  .child1 {
    background-color: blue;
    opacity: 0.6;
    margin: 1rem;
    padding: 1rem;
    display: inline-block;
  }
  .child2 {
    background-color: teal;
    opacity: 0.6;
    margin: 1rem;
    padding: 1rem;
    display: inline-block;
  }
`;

const TestEmotion = () => {
  return (
    <section>
      <h2>Emotion</h2>
      <Parent>
        <div className="child1">Hello</div>
        <div className="child2">World</div>
      </Parent>
    </section>
  );
};

export default TestEmotion;
