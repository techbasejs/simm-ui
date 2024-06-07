import { useState } from "react";
import { Stack } from "../Stack/Stack";
import { Modal } from "./Modal";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

export default {
  component: Modal,
  title: "Overlays/Modal",
  tags: ["core"],
};

export function Default() {
  const [opened, setOpened] = useState(false);
  return (
    <Stack direction="row">
      <Modal
        opened={opened}
        title="Modal titlesssssssssssssssssssssssssssssssssssssssss"
        onClose={() => setOpened(false)}
      >
        <Modal.Target>
          <Button>Open modal</Button>
        </Modal.Target>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </Stack>
  );
}
