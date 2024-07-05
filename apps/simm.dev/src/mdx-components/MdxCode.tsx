import { Box, useTheme } from "@simm/core";
import { CodeHighlighter } from "@simmx/code-highlighter";
import { HTMLAttributes } from "react";

export const MdxCode = ({
  children,
  className,
}: HTMLAttributes<HTMLElement>) => {
  const lang = className?.replace("language-", "") as string;
  const theme = useTheme();
  if (lang) {
    return (
      <CodeHighlighter
        langs={[lang]}
        code={children as string}
        language={lang}
      />
    );
  } else {
    return (
      <Box
        as="code"
        sx={{
          color: theme.pallete?.error?.main,
          backgroundColor: "#ffe9e8",
          borderRadius: 4,
          padding: "3px 5px",
        }}
      >
        {children}
      </Box>
    );
  }
};
