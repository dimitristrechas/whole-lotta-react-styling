import React from "react";
import TestCss from "./Components/TestCss/TestCss";
import TestSass from "./Components/TestSass/TestSass";
import TestCssModule from "./Components/TestCssModule/TestCssModule";
import TestSassModule from "./Components/TestSassModule/TestSassModule";
import TestEmotion from "./Components/TestEmotion/TestEmotion";
import TestJss from "./Components/TestJss/TestJss";
import "github-markdown-css";

export default function App() {
  return (
    <div className="main">
      <h1>Whole Lotta React Styling</h1>
      <hr></hr>
      <TestCss />
      <TestSass />
      <TestCssModule />
      <TestSassModule />
      <TestEmotion />
      <TestJss />
    </div>
  );
}
