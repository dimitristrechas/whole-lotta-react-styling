import React from "react";
import { createUseStyles } from "react-jss";

let color = "pink";
let breakpointTablet = "768px";

const useStyles = createUseStyles({
  parent: {
    backgroundColor: "lightgrey",
    border: "1px solid black",
    borderRadius: "1rem",
    padding: "1rem",
    margin: "1rem",
    fontWeight: 900,
    textAlign: "center",
    color: color,
    [`@media (min-width: ${breakpointTablet})`]: {
      maxWidth: "20rem",
    },
    "& .child1": {
      backgroundColor: "blue",
      opacity: 0.6,
      margin: "1rem",
      padding: "1rem",
      display: "inline-block",
    },
    "& .child2": {
      backgroundColor: "teal",
      opacity: 0.6,
      margin: "1rem",
      padding: "1rem",
      display: "inline-block",
    },
  },
  button: {
    padding: "10px 15px",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "#666",
    border: "1px solid black",
    backgroundColor: "transparent",
    textAlign: "center",
    cursor: "pointer",
    "&:active": {
      opacity: 0.75,
    },
  },
});

const TestJss = () => {
  const classes = useStyles();
  return (
    <section>
      <h2>JSS</h2>
      <div className={classes.parent}>
        <div className="child1">( - )</div>
        <div className="child2">( - )</div>
      </div>
      {/* <button
        className={classes.button}
        onClick={() => {
          console.log("Hello World!");
        }}
      >
        Click me
      </button> */}
    </section>
  );
};

export default TestJss;
