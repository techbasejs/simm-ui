import { IconInfoCircle, IconCircleCheck } from "@tabler/icons-react";
import { Blockquote } from "./Blockquote";
import { Title } from "../Title";

export default {
  component: Blockquote,
  title: "Typography/Blockquote",
  tags: ["autodocs"],
};
const iconInfo = <IconInfoCircle />;
const iconCheck = <IconCircleCheck />;
export function Default() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #0000001f",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          maxWidth: "400px",
          backgroundColor: "#f8f9fa",
          gap: 50,
        }}
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
      </div>
    </div>
  );
}
