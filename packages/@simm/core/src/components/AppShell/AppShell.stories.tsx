import { useState } from "react";
import { AppShell } from "./AppShell";
import { Box } from "../Box";
import { Title } from "../Title";
import { Stack } from "../Stack";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { Button } from "../Button";
import { UnstyledButton } from "../UnstyledButton/UnstyledButton";
import { IconApi, IconInfinity, IconStar } from "@tabler/icons-react";

export default {
  component: AppShell,
  title: "Layouts/AppShell",
  tags: ["core"],
};

export function Default() {
  const [opened, setOpened] = useState(true);
  return (
    <>
      <AppShell
        header={{
          height: 64,
        }}
        navbar={{
          width: 200,
          opened: opened,
        }}
      >
        <AppShell.Header>
          <Stack
            px={10}
            direction="row"
            justify="space-between"
            align="center"
            sx={{
              height: "100%",
            }}
          >
            <Stack direction="row" align="center" spacing={10}>
              <IconButton onClick={() => setOpened((opened) => !opened)}>
                Toggle
              </IconButton>
              <Title>Mantine Logo</Title>
            </Stack>
            <div>menu</div>
          </Stack>
        </AppShell.Header>
        <AppShell.Navbar>
          <Stack px={10} py={20} spacing={8}>
            <UnstyledButton
              prefixIcon={<IconStar size={16} />}
              as="a"
              href="https://google.com"
              target="_blank"
              variant="transparent"
            >
              Getting started
            </UnstyledButton>
            <UnstyledButton
              prefixIcon={<IconInfinity size={16} />}
              as="a"
              href="https://google.com"
              target="_blank"
              variant="transparent"
            >
              About me
            </UnstyledButton>
            <UnstyledButton
              prefixIcon={<IconApi size={16} />}
              as="a"
              href="https://google.com"
              target="_blank"
              variant="transparent"
            >
              API Overview
            </UnstyledButton>
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main>
          <Stack px={15} py={20}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad
              saepe molestiae nobis necessitatibus laboriosam officia,
              reprehenderit, earum fugiat?
            </Text>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
