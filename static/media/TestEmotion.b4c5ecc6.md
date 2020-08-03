**TestEmotion.jsx**

```js
import React from "react";
import styled from "@emotion/styled";

import ReactMarkdown from "react-markdown";
import useMarkdown from "../../Hooks/useMarkdown";
import file from "./TestEmotion.md";

let color = "#ffebef";
let breakpointTablet = "768px";

const Card = styled.div`
  border-radius: 0.25rem;
  background-color: ${color};

  @media (min-width: ${breakpointTablet}) {
    max-width: 20rem;
  }

  .card-content {
    padding: 1rem;
  }

  .card-footer {
    padding: 0rem 1rem 1rem;
    text-align: right;
  }
`;

const TestEmotion = () => {
  const markdown = useMarkdown({ file });
  return (
    <section>
      <h2>Emotion Component</h2>
      <div className="component-wrapper">
        <Card>
          <div className="card-content">“The awful thing... of man.”</div>
          <div className="card-footer">
            ― Fyodor Dostoevsky, The Brothers Karamazov
          </div>
        </Card>
      </div>
      <div className="markdown-body">
        <ReactMarkdown source={markdown} />
      </div>
    </section>
  );
};

export default TestEmotion;
```
