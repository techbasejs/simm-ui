import { useState } from "react";
import Button from "../Button/Button";
import Modal from "./Modal";
import { IconDownload } from "@tabler/icons-react";
import Text from "../Text/Text";

export default {
  component: Modal,
  title: "OVerlays/Modal",
  tags: ["core"],
};

export function Default() {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Modal
          opened={opened}
          showActions
          title="MODAL TITLE"
          okBtnProps={{
            color: "warning",
          }}
          onCancel={(handler) => handler.close?.()}
          onClose={() => setOpened(false)}
        >
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
          <Text>aaaaaaaaaaaa</Text>
        </Modal>
        <Button onClick={() => setOpened((opened) => !opened)}>
          Show Modal
        </Button>
      </div>
    </div>
  );
}
