import { Stack } from "./Stack";

export default {
  component: Stack,
  title: "Layouts/Stack",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Stack as="div" direction="column" spacing={30}>
          <div>1</div>
          <div>2</div>
        </Stack>
      </div>
    </div>
  );
}
