import { Stack } from "../Stack/Stack";
import { TransferList } from "./TransferList";

export default {
  component: TransferList,
  title: "Typography/TransferList",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={10}>
      <TransferList
        listLeft={[
          {
            label: "Item 1",
            value: "1",
          },
          {
            label: "Item 2",
            value: "2",
          },
          {
            label: "Item 3",
            value: "3",
          },
          {
            label: "Item 4",
            value: "4",
          },
        ]}
        listRight={[
          {
            label: "Item 6",
            value: "6",
          },
          {
            label: "Item 7",
            value: "7",
          },
        ]}
        title="All"
      ></TransferList>
    </Stack>
  );
}
