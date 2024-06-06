import IconButton from "../IconButton/IconButton";
import Button from "./Button";
import { IconDownload, IconChevronDown } from "@tabler/icons-react";

export default {
  component: Button,
  title: "Button/Button",
  tags: ["core"],
};

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <div>
        <Button>default</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="transparent">transparent</Button>
        <Button variant="white">white</Button>
      </div>
      <div>
        <Button color="success">default</Button>
        <Button color="success" variant="outlined">
          outlined
        </Button>
        <Button color="success" variant="transparent">
          transparent
        </Button>
        <Button color="success" variant="white">
          white
        </Button>
      </div>

      <div>
        <Button color="error">default</Button>
        <Button color="error" variant="outlined">
          outlined
        </Button>
        <Button color="error" variant="transparent">
          transparent
        </Button>
        <Button color="error" variant="white">
          white
        </Button>
      </div>

      <div>
        <Button color="warning">default</Button>
        <Button color="warning" variant="outlined">
          outlined
        </Button>
        <Button color="warning" variant="transparent">
          transparent
        </Button>
        <Button color="warning" variant="white">
          white
        </Button>
      </div>
    </div>
  );
}

export function WithIcon() {
  return (
    <div>
      <div>
        <Button prefixIcon={<IconDownload size={18} />}>Download</Button>
        <Button
          color="success"
          variant="outlined"
          prefixIcon={<IconDownload size={18} />}
        >
          Download
        </Button>
        <Button suffixIcon={<IconDownload size={18} />}>Download</Button>
        <Button>
          <IconDownload size={18} />
        </Button>
      </div>
    </div>
  );
}

export function GroupButton() {
  return (
    <div>
      <Button.Group>
        <Button>Export data</Button>
        <IconButton>
          <IconChevronDown size={18} />
        </IconButton>
      </Button.Group>
    </div>
  );
}
