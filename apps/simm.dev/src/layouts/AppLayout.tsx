import {
  AppShell,
  Button,
  Menu,
  MenuItemType,
  Stack,
  Text,
  ThemeProvider,
  Title,
  UnstyledButton,
  createTheme,
} from "@simm/core";
import { HTMLAttributes, useState } from "react";
import {
  IconBrandGithubFilled,
  IconHelpCircle,
  IconStarsOff,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const items: MenuItemType[] = [
  {
    label: "Getting started",
    children: [
      {
        label: "Installation",
        href: "/getting-started/installation",
      },
      {
        label: "Usage",
        href: "/getting-started/usage",
      },
    ],
  },
  {
    label: "Components",
    children: [
      {
        href: "/core/components/alert",
        label: "Alert",
      },
      {
        href: "#yyyy",
        label: "Avatar",
      },
      {
        label: "Button",
        href: "/core/components/button",
      },
      {
        label: "Checkbox",
        href: "/core/components/checkbox",
      },
      {
        label: "Chip",
        href: "/core/components/chip",
      },
      {
        label: "IconButton",
        href: "/core/components/icon-button",
      },
      {
        label: "Input",
        href: "/core/components/input",
      },
      {
        label: "Link",
        href: "/core/components/link",
      },
      {
        label: "Menu",
        href: "/core/components/menu",
      },
      {
        label: "Modal",
        href: "/core/components/modal",
      },
      {
        label: "Overlay",
        href: "/core/components/overlay",
      },
      {
        label: "Paper",
        href: "/core/components/paper",
      },
      {
        label: "PinInput",
        href: "/core/components/pin-input",
      },
      {
        label: "Popover",
        href: "/core/components/popover",
      },
      {
        label: "Portal",
        href: "/core/components/portal",
      },
      {
        label: "Radio",
        href: "/core/components/radio",
      },
      {
        label: "Rating",
        href: "/core/components/rating",
      },
      {
        label: "Slider",
        href: "/core/components/slider",
      },
      {
        label: "Stack",
        href: "/core/components/stack",
      },
      {
        label: "Switch",
        href: "/core/components/switch",
      },
      {
        label: "Table",
        href: "/core/components/table",
      },
      {
        label: "TableOfContents",
        href: "/core/components/table-of-contents",
      },
      {
        label: "Text",
        href: "/core/components/text",
      },
      {
        label: "Title",
        href: "/core/components/title",
      },
      {
        label: "Tooltip",
        href: "/core/components/tooltip",
      },
      {
        label: "Transition",
        href: "/core/components/transition",
      },
      {
        label: "UnstyledButton",
        href: "/core/components/unstyled-button",
      },
    ],
  },
  {
    label: "Customization",
    children: [
      {
        label: "How to customizate",
      },
    ],
  },
];

type AppProps = HTMLAttributes<HTMLDivElement>;
const theme = createTheme({
  pallete: {
    mode: "light",
  },
});

export default function AppLayout({ children }: AppProps) {
  const [opened, setOpened] = useState(true);

  return (
    <AppShell
      navbar={{
        opened: opened,
        width: 240,
      }}
    >
      <AppShell.Header>
        <Stack
          direction="row"
          justify="space-between"
          align="center"
          px={15}
          sx={{ height: "100%", width: "100%" }}
        >
          <Stack
            direction="row"
            align="center"
            as={Link}
            href="/"
            spacing={4}
            sx={{
              cursor: "pointer",
            }}
          >
            <Image src="/logo.png" width={40} height={40} alt="simm logo" />
            <Title>Simm UI</Title>
            <Text>1.0.0</Text>
          </Stack>
          <Stack direction="row">
            <IconBrandGithubFilled color="#000" />
          </Stack>
        </Stack>
      </AppShell.Header>
      <AppShell.Navbar>
        <Stack px={16}>
          <Menu
            items={items}
            itemRender={(item) =>
              item.href ? (
                <UnstyledButton as={Link} href={item.href as string}>
                  {item.label}
                </UnstyledButton>
              ) : (
                <UnstyledButton>{item.label}</UnstyledButton>
              )
            }
          ></Menu>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack px={15} py={30}>
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
