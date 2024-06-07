import { CodeHighlighter } from "./CodeHighlighter";
import { Stack, useTheme } from "@simm/core";
export default {
  component: CodeHighlighter,
  title: "shiki/CodeHighlighter",
  tags: ["core"],
};

const code = `import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}`;

const cssCode = `.btn {
  color: red;
}`;

export function Default() {
  return (
    <Stack spacing={20}>
      <CodeHighlighter code={code} language="tsx"></CodeHighlighter>
      <CodeHighlighter code={cssCode} language="css"></CodeHighlighter>
    </Stack>
  );
}
