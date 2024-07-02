import { Box, useTheme } from "@simm/core";
import type { MDXComponents } from "mdx/types";
import React, {
  ButtonHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
} from "react";

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

const MdxParaph = ({ children }: TdHTMLAttributes<HTMLElement>) => {
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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props) => <Table {...props} />,
    th: (props) => <Th {...props} />,
    td: (props) => <Td {...props} />,
    p: (props) => <MdxParaph {...props} />,
    ...components,
  };
}
