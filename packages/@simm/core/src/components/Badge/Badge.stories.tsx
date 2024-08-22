import { useState } from "react";
import { Badge } from "./Badge";
import { Avatar } from "../Avatar";
import { IconButton } from "../IconButton";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Badge,
  title: "Misc/Badge",
  tags: ["core"],
};

export function Default() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <Badge content="5" color="primary">
          <Avatar
            radius="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Badge>
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right"
        >
          <Avatar
            radius="full"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Badge>
        <Badge content="new" color="warning" size="sm">
          <Avatar
            isBordered
            radius="md"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
        <Badge
          isOneChar
          content={<IconDownload />}
          color="success"
          size="lg"
          placement="bottom-right"
        >
          <Avatar
            isBordered
            color="success"
            radius="md"
            src="https://i.pravatar.cc/300?u=a042581f4e290267072"
          />
        </Badge>
        <Badge
          isOneChar
          content={<IconDownload size={12} />}
          color="error"
          shape="circle"
          placement="top-right"
        >
          <Avatar
            radius="full"
            size="lg"
            src="https://i.pravatar.cc/300?u=a042581f4e29026704f"
          />
        </Badge>
      </div>
    </div>
  );
}
