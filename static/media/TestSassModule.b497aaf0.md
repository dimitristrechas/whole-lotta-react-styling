**TestSassModule.jsx**

```js
import React from "react";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../../Hooks/useMarkdown";
import styles from "./Test.module.scss"; // import sasss module
import file from "./TestSassModule.md";

const TestSassModule = () => {
  const markdown = useMarkdown({ file });
  return (
    <section>
      <h2>Sass Modules Component</h2>
      <div className="component-wrapper">
        <div className={styles.card}>
          <div className={styles.cardContent}>
            “I can see the sun... that is living.”
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

export default TestSassModule;
```

**Test.module.scss**

```css
$color: #ffebef;
$breakpoint-tablet: 768px;

.card {
  background-color: $color;
  border-radius: 0.25rem;

  @media (min-width: $breakpoint-tablet) {
    max-width: 20rem;
  }

  .cardContent {
    padding: 1rem;
  }
  .cardFooter {
    padding: 0rem 1rem 1rem;
    text-align: right;
  }
}
```
