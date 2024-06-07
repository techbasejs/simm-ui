import { useState } from "react";
import { Box } from "./Box";
import { Button } from "../Button/Button";

export default {
  component: Box,
  title: "Misc/Box",
  tags: ["core"],
};

export function Default() {
  const [a, setA] = useState("v");
  return (
    <>
      <Button onClick={() => setA("xxx")}>xxx</Button>
      <Box mt={40}>My Button {a}</Box>
      <Box as="a" target="_blank" mt={20} href="https://google.com">
        google.com
      </Box>
      <Box as="div" mt={40}>
        40px
      </Box>
    </>
  );
}
