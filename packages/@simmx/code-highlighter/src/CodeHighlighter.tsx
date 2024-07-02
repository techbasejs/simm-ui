import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";
import { Box } from "@simm/core";
type CodeHighlighterProps = {
  code: string;
  language?: string;
  langs?: string[];
};

export const CodeHighlighter = ({ code, language, langs }: CodeHighlighterProps) => {
  const [html, setHtml] = useState("");
  useEffect(() => {
    const highlight = async () => {
      const highlighter = await createHighlighter({
        langs: langs ? langs : ["tsx", "css", "jsx", "html"],
        themes: ["github-dark"],
      });
      const html = highlighter.codeToHtml(code.trim(), {
        lang: language || "tsx",
        theme: "github-dark",
      });

      setHtml(html);

      return highlighter;
    };
    const _highlight = highlight();

    return () => {
      _highlight.then((highlighter) => highlighter.dispose());
    };
  }, []);

  if (html) {
    return (
      <Box
        dangerouslySetInnerHTML={{ __html: html }}
        sx={{
          width: "100%",
        }}
      ></Box>
    );
  }
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#24292e",
        color: "#fff",
      }}
    >
      <pre>{code.trim()}</pre>
    </Box>
  );
};
