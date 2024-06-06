import Title from "./Title";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Title,
  title: "Typography/Title",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Title>AAAA</Title>
        <Title>BBBBB</Title>
        <Title>CCCCCC</Title>
        <Title>DDDDD</Title>
      </div>
    </div>
  );
}
