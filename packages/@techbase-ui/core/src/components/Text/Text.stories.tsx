import Text from "./Text";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Text,
  title: "Typography/Text",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Text>AAAA</Text>
        <Text color="success">BBBBB</Text>
        <Text color="error">CCCCCC</Text>
        <Text color="warning">DDDDD</Text>
      </div>
    </div>
  );
}
