**TestCSSModule.jsx**

```js
import React from "react";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../../Hooks/useMarkdown";
import styles from "./Test.module.css"; // Import css module
import file from "./TestCssModule.md";

const TestCSSModule = () => {
  const markdown = useMarkdown({ file });
  return (
    <section>
      <h2>CSS Component</h2>
      <div className="component-wrapper">
        <div className={styles.card}>
          <div className={styles.cardContent}>
            “Above all, don't lie to yourself. The man who lies to himself and
            listens to his own lie comes to a point that he cannot distinguish
            the truth within him, or around him, and so loses all respect for
            himself and for others. And having no respect he ceases to love.”
          </div>
          <div className={styles.cardFooter}>
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

export default TestCSSModule;
```

**Test.module.css**

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

.card .cardContent {
  padding: 1rem;
}

.card .cardFooter {
  padding: 0rem 1rem 1rem;
  text-align: right;
}
```
