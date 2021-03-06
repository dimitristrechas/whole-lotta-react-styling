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
            “I can see the sun, but even if I cannot see the sun, I know that it
            exists. And to know that the sun is there - that is living.”
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
