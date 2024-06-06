import { useState } from "react";
import Transition from "./Transition";
import Button from "../Button/Button";

export default {
  component: Transition,
  title: "Misc/Transition",
  tags: ["core"],
};

export function Default() {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Button onClick={() => setOpened((opened) => !opened)}>
          Show menu
        </Button>
        <Transition opened={opened} transition="scale-x">
          {() => <div>This is a menu</div>}
        </Transition>
      </div>
    </div>
  );
}
