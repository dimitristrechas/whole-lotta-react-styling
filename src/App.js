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
    <div className="container">
      <header>
        <h1>Whole Lotta React Styling</h1>
      </header>
      <main>
        <TestCss />
        <TestSass />
        <TestCssModule />
        <TestSassModule />
        <TestEmotion />
        <TestJss />
      </main>
      <footer>
        <a
          href="https://dimitristrechas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          dimitristrechas.com
        </a>
      </footer>
    </div>
  );
}
