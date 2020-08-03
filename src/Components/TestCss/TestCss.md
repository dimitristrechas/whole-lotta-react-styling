**TestCss.jsx**

```js
import React from "react";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../../Hooks/useMarkdown";
import "./styles.css"; // Import css file
import file from "./TestCss.md";

const Test = () => {
  const markdown = useMarkdown({ file });

  return (
    <section>
      <h2>CSS Component</h2>
      <div className="component-wrapper">
        <div className="card">
          <div className="card-content">“Above all..he ceases to love.”</div>
          <div className="card-footer">
            ― Fyodor Dostoevsky, The Brothers Karamazov
          </div>
        </div>
      </div>
      <div className="markdown-body">
        <ReactMarkdown source={markdown} />
      </div>
    </section>
  );
};

export default Test;
```

**styles.css**

```css
.card {
  background-color: #ffebef;
  border-radius: 0.25rem;
}

@media (min-width: 768px) {
  .card {
    max-width: 20rem;
  }
}

.card .card-content {
  padding: 1rem;
}

.card .card-footer {
  padding: 0rem 1rem 1rem;
  text-align: right;
}
```
