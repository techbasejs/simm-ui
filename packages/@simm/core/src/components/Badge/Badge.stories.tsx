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
      <div style={{ display: "flex", gap: "60px", flexDirection:'row' }}>
      <Badge color="secondary" shape="rectangle" badgeContent="" >
        <Avatar
          radius="md"
          shape="square"
          src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
        />
      </Badge>
      <Badge badgeContent="11" color="warning" shape="rectangle">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
      <Badge badgeContent="999+" color="secondary" >
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </Badge>
      <Badge badgeContent="5" color="warning">
      <Avatar
          isBordered
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </Badge>
      {/* <Badge content="5" color="warning" placement="top-right">
        <Avatar
          isBordered
          radius="md"
          src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
        />
      </Badge>
      <Badge content="5" color="warning" placement="bottom-right">
        <Avatar
          isBordered
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
      <Badge content="5" color="warning" placement="top-left">
        <Avatar
          isBordered
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </Badge>
      <Badge content="5" color="warning" placement="bottom-left" shape="rectangle">
        <Avatar
          isBordered
          shape="square"
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </Badge> */}
      </div>
      {/* <div style={{ display: "flex", gap: "60px", flexDirection:'row'  }}>
      <Badge content="5" color="info" shape="rectangle">
        <Avatar
          isBordered
          radius="md"
          src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
        />
      </Badge>
      <Badge content="5" color="info" shape="circle">
        <Avatar
          isBordered
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
      </div>
      <div style={{ display: "flex", gap: "60px",  flexDirection:'row', marginTop:"20px"  }}>
      <Badge color="error" content="2" isInvisible={true} shape="circle">
          <IconDownload className="fill-current" size={10} />
        </Badge>
        <Badge color="error" content={<IconDownload size={10} />} isInvisible={false} shape="circle">
          <IconDownload size={30} />
        </Badge>
      </div>
      <div style={{ display: "flex", gap: "60px",  flexDirection:'row', marginTop:"20px"  }}>
      <Badge content="5" color="secondary">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </Badge>
      <Badge content="" color="success" shape="circle" placement="bottom-right">
        <Avatar
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
      <Badge content="new" color="secondary" size="sm">
        <Avatar
          isBordered
          radius="md"
          color="secondary"
          src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
        />
      </Badge>
      <Badge
        isOneChar
        content={<IconDownload />}
        color="success"
        radius="md"
        placement="bottom-right"
      >
        <Avatar
          isBordered
          color="success"
          radius="md"
          src="https://i.pravatar.cc/300?u=a042581f4e290267072"
        />
      </Badge> */}
      {/* <Badge
        isOneChar
        content={<IconDownload />}
        color="secondary"
        shape="circle"
        placement="top-right"
      >
        <Avatar
          radius="full"
          size="lg"
          src="https://i.pravatar.cc/300?u=a042581f4e29026704f"
        />
      </Badge> */}
      {/* </div> */}
    </div>
  );
}
