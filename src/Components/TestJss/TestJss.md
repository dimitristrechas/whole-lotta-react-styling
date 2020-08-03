**TestJss.jsx**

```js
import React from "react";
import { createUseStyles } from "react-jss";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../../Hooks/useMarkdown";
import file from "./TestJss.md";

let color = "#ffebef";
let breakpointTablet = "768px";

const useStyles = createUseStyles({
  parent: {
    backgroundColor: color,
    borderRadius: "0.25rem",

    [`@media (min-width: ${breakpointTablet})`]: {
      maxWidth: "20rem",
    },
    "& .card-content": {
      padding: "1rem",
    },
    "& .card-footer": {
      padding: "0rem 1rem 1rem",
      textAlign: "right",
    },
  },
});

const TestJss = () => {
  const markdown = useMarkdown({ file });
  const classes = useStyles();

  return (
    <section>
      <h2>JSS Component</h2>
      <div className="component-wrapper">
        <div className={classes.parent}>
          <div className="card-content">
            “Don’t let... subsequent explanations of them.”
          </div>
          <div className="card-footer">― Fyodor Dostoevsky, The Idiot</div>
        </div>
      </div>
      <div className="markdown-body">
        <ReactMarkdown source={markdown} />
      </div>
    </section>
  );
};

export default TestJss;
```
