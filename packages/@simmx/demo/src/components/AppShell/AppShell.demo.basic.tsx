import { SimmDemo } from "../../render-demo";
import { Button } from "@simm/core";

const code = `
import {
  AppShell,
  Button,
  IconButton,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@simm/core";
import { IconApi, IconInfinity, IconStar } from "@tabler/icons-react";

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
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
            <Title>Simm Logo</Title>
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
          >
            Getting started
          </UnstyledButton>
          <UnstyledButton
            prefixIcon={<IconInfinity size={16} />}
            as="a"
            href="https://google.com"
            target="_blank"
          >
            About me
          </UnstyledButton>
          <UnstyledButton
            prefixIcon={<IconApi size={16} />}
            as="a"
            href="https://google.com"
            target="_blank"
          >
            API Overview
          </UnstyledButton>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack px={15} py={20}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe
            molestiae nobis necessitatibus laboriosam officia, reprehenderit,
            earum fugiat?
          </Text>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}`;

function Demo() {
  return (
    <Button as="a" target="_blank" href="https://google.com">
      Open AppShell examples pages
    </Button>
  );
}

export const AppShellDemoBasic: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
