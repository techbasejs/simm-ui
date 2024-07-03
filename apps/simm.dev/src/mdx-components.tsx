import type { MDXComponents } from "mdx/types";
import React from "react";

import { MdxTable } from "./mdx-components/MdxTable";
import { MdxTh } from "./mdx-components/MdxTh";
import { MdxTd } from "./mdx-components/MdxTd";
import { MdxParaph } from "./mdx-components/MdxParaph";
import { MdxCode } from "./mdx-components/MdxCode";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props) => <MdxTable {...props} />,
    th: (props) => <MdxTh {...props} />,
    td: (props) => <MdxTd {...props} />,
    p: (props) => <MdxParaph {...props} />,
    code: (props) => <MdxCode {...props} />,
    ...components,
  };
}
