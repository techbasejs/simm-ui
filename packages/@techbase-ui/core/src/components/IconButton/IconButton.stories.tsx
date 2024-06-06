import IconButton from "./IconButton";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: IconButton,
  title: "Button/IconButton",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <IconButton>
            <IconDownload size={18} />
        </IconButton>
      </div>
    </div>
  );
}
