import { Stack, Tooltip, UnstyledButton, useTheme } from "@simm/core";
import { useCopyToClipboard, useTimeout } from "@simm/hooks";
import { CodeHighlighter } from "@simmx/code-highlighter";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

export type SimmDemo = {
  type: "code";
  code: string;
  component: () => React.ReactNode;
};

export function renderDemo(demo: SimmDemo) {
  const Component = demo.component;

  return () => {
    const theme = useTheme();
    const [isCopy, setIsCopy] = useState(false);
    const [tooltipLabel, setTooltipLabel] = useState("Copy code");
    const [_, copy] = useCopyToClipboard();
    const { start } = useTimeout(() => {
      setIsCopy(false);
      setTooltipLabel("Copy code");
    }, 1000);

    const handleCopy = () => {
      setIsCopy(true);
      copy(demo.code);
      setTooltipLabel("Code copied");
      start();
    };
    return (
      <Stack
        sx={{
          border: "1px solid",
          borderColor: theme.shape?.borderColor,
          overflow: "hidden",
          borderRadius: 8,
          pre: {
            padding: "8px 10px",
            margin: 0,
          },
        }}
      >
        <Stack
          direction="row"
          p={10}
          sx={{
            borderBottom: "1px solid",
            borderColor: theme.shape?.borderColor,
          }}
        >
          <Component />
        </Stack>
        <Stack
          direction="row"
          px={10}
          justify="flex-end"
          sx={{
            borderBottom: "1px solid",
            borderColor: theme.shape?.borderColor,
          }}
        >
          <Tooltip label={tooltipLabel}>
            <UnstyledButton onClick={handleCopy}>
              {!isCopy ? <IconCopy size={18} /> : <IconCheck size={18} />}
            </UnstyledButton>
          </Tooltip>
        </Stack>
        <Stack direction="row" py={8} px={5}>
          <CodeHighlighter code={demo.code} language="tsx"></CodeHighlighter>
        </Stack>
      </Stack>
    );
  };
}
