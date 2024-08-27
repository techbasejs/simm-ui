import { Badge } from "./Badge";
import { Avatar } from "../Avatar";
import { IconMail } from "@tabler/icons-react";

export default {
  component: Badge,
  title: "Misc/Badge",
  tags: ["core"],
};

export function Default() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "60px",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Badge color="secondary" shape="rectangle" badgeContent=" " >
          <Avatar
            radius="md"
            shape="square"
            src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
          />
        </Badge>
        <Badge
          color="secondary"
          shape="rectangle"
          badgeContent=""
          isAnimation={true}
        >
          <Avatar
            radius="md"
            shape="square"
            src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
          />
        </Badge>
        <Badge
          badgeContent="11"
          color="warning"
          shape="rectangle"
          variant="outlined"
        >
          <Avatar
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Badge>
        <Badge badgeContent="999+" color="secondary">
          <Avatar
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
        </Badge>
        <Badge badgeContent="5" color="warning" placement="top-right" isAnimation={true}>
          <Avatar
            isBordered
            radius="md"
            src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
          />
        </Badge>
        <Badge
          badgeContent="5"
          color="primary"
          placement="bottom-right"
          variant="outlined"
        >
          <Avatar
            isBordered
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Badge>
        <Badge badgeContent="5" color="error" placement="top-left">
          <Avatar
            isBordered
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
        </Badge>
        <Badge
          badgeContent="5"
          color="success"
          placement="bottom-left"
          shape="rectangle"
        >
          <Avatar
            isBordered
            shape="square"
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
        </Badge>
        <Badge badgeContent="new" color="primary" size="sm">
          <Avatar
            isBordered
            radius="md"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
        <Badge color="secondary" badgeContent={5} shape="circle" >
          <IconMail className="fill-current" size={40} />
        </Badge>
        <Badge color="info" shape="circle">
          <IconMail className="fill-current" size={40} />
        </Badge>
        <Badge color="info" shape="circle" badgeContent="" size="lg">
          <IconMail className="fill-current" size={70} />
        </Badge>
        <Badge badgeContent="new" color="primary" size="lg">
          <Avatar
            isBordered
            radius="lg"
            size="lg"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
      </div>
    </div>
  );
}
