import React from "react";

// Import css module
import styles from "./Test.module.css";

const TestModuled = () => {
  return (
    <section>
      <h2>CSS Modules</h2>
      <div className={styles.parent}>
        <div className={styles.child1}>Hello</div>
        <div className={styles.child2}>World</div>
      </div>
    </section>
  );
};

export default TestModuled;
