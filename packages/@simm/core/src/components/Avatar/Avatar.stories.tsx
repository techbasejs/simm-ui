import { Stack } from "../Stack/Stack";
import { Avatar } from "./Avatar";
import { Title } from "../Title";
import { IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";
import { Switch } from "../Switch/Switch";

export default {
  component: Avatar,
  title: "DATA DISPLAY/Avatar",
  tags: ["core"],
};

export function Default() {
  const [autoScale, setAutoScale] = useState(false);
  return (
    <Stack spacing={20}>
      <Title>With image src</Title>
      <Stack direction="row" spacing={10}>
        <Avatar alt="image1" size="sm" src="https://picsum.photos/200/300" />
        <Avatar alt="image1" size="md" src="https://picsum.photos/200/300" />
        <Avatar alt="image1" size="lg" src="https://picsum.photos/200/300" />
        <Avatar alt="image1" size={100} src="https://picsum.photos/200/300" />
      </Stack>
      <Title>With Icon</Title>
      <Stack direction="row" spacing={10}>
        <Avatar size="sm" icon={<IconUserCircle />} />
        <Avatar
          size="md"
          style={{ background: "blue" }}
          icon={<IconUserCircle />}
        />
        <Avatar size="lg" icon={<IconUserCircle />} />
        <Avatar size={100} icon={<IconUserCircle size={40} />} />
      </Stack>
      <Title>Shape</Title>
      <Stack direction="row" spacing={10}>
        <Avatar size="sm" style={{ background: "orange" }} gap={8}>
          T
        </Avatar>
        <Avatar size="md" style={{ background: "blue" }} gap={8}>
          TH
        </Avatar>
        <Avatar
          size="lg"
          style={{ background: "green" }}
          gap={8}
          shape="square"
        >
          US
        </Avatar>
        <Avatar
          shape="square"
          size={100}
          style={{ background: "deeppink" }}
          gap={8}
        >
          AVA
        </Avatar>
      </Stack>
      <Title>Auto Scale :</Title>
      <Switch
        color="success"
        checked={autoScale}
        onChange={(e) => setAutoScale(e.currentTarget.checked)}
      ></Switch>
      <Stack direction="row" spacing={10}>
        <Avatar
          size="md"
          style={{ background: "green" }}
          gap={8}
          autoScale={autoScale}
        >
          USER1234
        </Avatar>
        <Avatar
          size="lg"
          style={{ background: "deeppink" }}
          gap={8}
          autoScale={autoScale}
        >
          USER12345678
        </Avatar>
      </Stack>
    </Stack>
  );
}
