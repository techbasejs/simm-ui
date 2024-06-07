import { Stack } from "../Stack/Stack";
import { Menu, MenuItemType } from "./Menu";

export default {
  component: Menu,
  title: "Navigation/Menu",
  tags: ["core"],
};

const items: MenuItemType[] = [
  {
    label: "Components",
    href: "#xxxx",
    children: [
      {
        href: "#yyyy",
        label: "Avatar",
      },
      {
        label: "Button",
      },
      {
        label: "Popover",
      },
    ],
  },
  {
    label: "Customization",
    children: [
      {
        label: "Avatar",
      },
      {
        label: "Button",
      },
      {
        label: "Popover",
      },
    ],
  },
];

export function Default() {
  return (
    <Stack spacing={20}>
      <Stack direction="row">
        <Menu items={items} />
      </Stack>
    </Stack>
  );
}
