import { useState, useEffect } from "react";

const useMarkdown = ({ file }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, [file]);

  return markdown;
};

export default useMarkdown;
