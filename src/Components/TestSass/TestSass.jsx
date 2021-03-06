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
