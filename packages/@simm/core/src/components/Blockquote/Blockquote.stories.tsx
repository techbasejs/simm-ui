import { IconInfoCircle, IconCircleCheck } from "@tabler/icons-react";
import { Blockquote } from "./Blockquote";
import { Title } from "../Title";
import { Stack } from "../Stack/Stack";

export default {
  component: Blockquote,
  title: "Typography/Blockquote",
  tags: ["autodocs"],
};
const iconInfo = <IconInfoCircle />;
const iconCheck = <IconCircleCheck />;
export function Default() {
  return (
    <Stack
      sx={{
        backgroundColor: "#f8f9fa",
        border: "1px solid #0000001f",
        
      }}
      spacing={20}
      p={'20px'}
      m={"0 auto"}
    >
      <Stack
        sx={{
          backgroundColor: "#f8f9fa",
          maxWidth: "400px",
        }}
        spacing={50}
        m={"0 auto"}
      >
        <Title>Usage</Title>
        <Blockquote
          color="#228be6"
          cite="– Forrest Gump"
          icon={iconInfo}
          radius="lg"
        >
          Life is like an npm install – you never know what you are going to
          get.
        </Blockquote>
        <Blockquote
          color="warning"
          cite="– Forrest Gump"
          icon={<IconInfoCircle size={40} />}
          radius="lg"
          iconSize={40}
        >
          Life is like an npm install – you never know what you are going to
          get.
        </Blockquote>

        <Blockquote
          color="success"
          cite="– Forrest Gump"
          icon={iconCheck}
          radius="xl"
        >
          Life is like an npm install – you never know what you are going to
          get.
        </Blockquote>
      </Stack>
    </Stack>
  );
}
