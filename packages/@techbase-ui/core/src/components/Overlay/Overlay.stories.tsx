import { useState } from "react";
import Button from "../Button/Button";
import Overlay from "./Overlay";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Overlay,
  title: "OVerlays/Overlay",
  tags: ["core"],
};

export function Default() {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div style={{ position: "relative" }}>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          width="100%"
        />
        {visible && <Overlay></Overlay>}
      </div>

      <div>
        <Button onClick={() => setVisible((visible) => !visible)}>
          Toggle overlay
        </Button>
      </div>
    </div>
  );
}
