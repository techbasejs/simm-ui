import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text";
import { Title } from "../Title";
import { Alert } from "./Alert";
import {
  IconCircleDashedCheck,
  IconAlertOctagon,
  IconBarrierBlockOff,
  IconBugFilled,
} from "@tabler/icons-react";

export default {
  component: Alert,
  title: "Form/Alert",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack direction="column" spacing={20}>
      <Title>Default</Title>
      <Alert color="success">This is a success alert!!!</Alert>
      <Alert color="info">This is an info alert!!!</Alert>
      <Alert color="warning">This is a warning alert!!!</Alert>
      <Alert color="error">This is an error alert!!!</Alert>

      <Title>Outlined</Title>
      <Alert color="success" variant="outlined">
        This is a success alert!!!
      </Alert>
      <Alert color="info" variant="outlined">
        This is an info alert!!!
      </Alert>
      <Alert color="warning" variant="outlined">
        This is a warning alert!!!
      </Alert>
      <Alert color="error" variant="outlined">
        This is an error alert!!!
      </Alert>

      <Title>Filled</Title>
      <Alert color="success" variant="filled">
        This is a success alert!!!
      </Alert>
      <Alert color="info" variant="filled">
        This is an info alert!!!
      </Alert>
      <Alert color="warning" variant="filled">
        This is a warning alert!!!
      </Alert>
      <Alert color="error" variant="filled">
        This is an error alert!!!
      </Alert>

      <Title>Custom Icon</Title>
      <Alert color="success" icon={<IconCircleDashedCheck />}>
        This is a success alert!!!
      </Alert>

      <Title>Custom Action</Title>
      <Alert
        color="success"
        icon={<IconCircleDashedCheck />}
        action={
          <Button
            variant="transparent"
            size="sm"
            sx={{ color: "inherit!important" }}
            onClick={() => alert("undo")}
          >
            UNDO
          </Button>
        }
      >
        Button action alert!
      </Alert>
      <Alert
        color="info"
        icon={<IconAlertOctagon />}
        action={
          <IconButton size="sm">
            <IconAlertOctagon fontSize={12} />
          </IconButton>
        }
      >
        IconButton action alert!
      </Alert>
      <Alert
        color="warning"
        icon={<IconBarrierBlockOff />}
        onClose={() => alert("warning: close alert")}
      >
        onClose function action alert!
      </Alert>

      <Title>Custom Alert title</Title>
      <Alert
        color="error"
        icon={<IconBugFilled />}
        alertTitle={
          <Text color="error">This is custom alert using AlertTitle props</Text>
        }
        onClose={() => alert("warning: close alert")}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Alert>

      <Title>Custom Alert using sx prop</Title>
      <Alert
        color="success"
        alertTitle={
          <Text color="success">This is custom alert using sx props</Text>
        }
        onClose={() => alert("warning: close alert")}
        sx={{
          backgroundColor: "rgb(237, 247, 237)",
          "& div p": {
            fontSize: "20px",
            textDecoration: "underline",
          },
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Alert>
    </Stack>
  );
}
