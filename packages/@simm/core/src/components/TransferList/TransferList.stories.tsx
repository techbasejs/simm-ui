import { Stack } from "../Stack/Stack";
import { TransferList } from "./TransferList";

export default {
  component: TransferList,
  title: "Data/TransferList",
  tags: ["core"],
};

export function Default() {
  return (
    <>
      <Stack spacing={10} sx={{ maxWidth: "500px" }}>
        <TransferList
          isShowSelectAll={true}
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
        ></TransferList>
      </Stack>
      <Stack spacing={10} sx={{ maxWidth: "500px", marginTop: "20px" }}>
        <TransferList
          isDisabledBtnAll={false}
          isShowItemPerTotal={true}
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
    </>
  );
}
