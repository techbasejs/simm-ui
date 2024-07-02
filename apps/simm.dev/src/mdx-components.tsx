import { Box, useTheme } from "@simm/core";
import type { MDXComponents } from "mdx/types";
import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
} from "react";

import { CodeHighlighter } from "@simmx/code-highlighter";

const Table = ({ children }: TableHTMLAttributes<HTMLTableElement>) => {
  const theme = useTheme();
  return (
    <Box
      as="table"
      sx={{
        borderSpacing: 0,
        border: "1px solid",
        borderColor: theme.shape?.borderColor,
        borderRadius: theme.shape?.borderRadius,
      }}
    >
      {children}
    </Box>
  );
};

const Th = ({ children }: TdHTMLAttributes<HTMLElement>) => {
  const theme = useTheme();

  return (
    <Box
      as="th"
      py={8}
      px={10}
      sx={{
        borderBottom: "1px solid",
        borderColor: theme.shape?.borderColor,
      }}
    >
      {children}
    </Box>
  );
};

const Td = ({ children }: TdHTMLAttributes<HTMLElement>) => {
  const theme = useTheme();

  return (
    <Box
      as="td"
      py={8}
      px={10}
      sx={{
        borderBottom: "1px solid",
        borderColor: theme.shape?.borderColor,
      }}
    >
      {children}
    </Box>
  );
};

const MdxParaph = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <Box
      as="p"
      sx={{
        marginTop: 0,
      }}
    >
      {children}
    </Box>
  );
};

const MdxCode = ({ children, className }: HTMLAttributes<HTMLElement>) => {
  const lang = className?.replace("language-", "") as string;
  if (lang) {
    return (
      <CodeHighlighter
        langs={[lang]}
        code={children as string}
        language={lang}
      />
    );
  } else {
    return <code>{children}</code>
  }
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props) => <Table {...props} />,
    th: (props) => <Th {...props} />,
    td: (props) => <Td {...props} />,
    p: (props) => <MdxParaph {...props} />,
    code: (props) => <MdxCode {...props} />,
    ...components,
  };
}
