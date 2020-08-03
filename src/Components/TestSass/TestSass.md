**TestSass.jsx**

```js
import React from "react";
import ReactMarkdown from "react-markdown";
import useMarkdown from "../../Hooks/useMarkdown";
import "./styles.scss"; // Import sass file
import file from "./TestSass.md";

const TestSass = () => {
  const markdown = useMarkdown({ file });
  return (
    <section>
      <h2>Sass Component</h2>
      <div className="component-wrapper">
        <div className="card">
          <div className="card-content">
            “We sometimes encounter people, even perfect strangers, who begin to
            interest us at first sight, somehow suddenly, all at once, before a
            word has been spoken.”
          </div>
          <div className="card-footer">
            ― Fyodor Dostoyevsky, Crime and Punishment
          </div>
        </div>
      </div>
      <div className="markdown-body">
        <ReactMarkdown source={markdown} />
      </div>
    </section>
  );
};

export default TestSass;
```

**styles.scss**

```css
$color: #ffebef;
$breakpoint-tablet: 768px;

.card-sass {
  border-radius: 0.25rem;
  background-color: $color;

  @media (min-width: $breakpoint-tablet) {
    max-width: 20rem;
  }

  .card-content-sass {
    padding: 1rem;
  }
  .cart-footer-sass {
    padding: 0rem 1rem 1rem;
    text-align: right;
  }
}
```
