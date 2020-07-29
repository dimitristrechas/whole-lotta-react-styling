import React from "react";

// Import cssasss module
import styles from "./Test.module.scss";

const TestModuled = () => {
  return (
    <section>
      <h2>Sass Modules</h2>
      <div className={styles.parent}>
        <div className={styles.child1}>Hello</div>
        <div className={styles.child2}>World</div>
      </div>
    </section>
  );
};

export default TestModuled;
