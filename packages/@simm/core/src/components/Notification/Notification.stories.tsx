import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";
import { Notification } from "./Notification";
import { Title } from "../Title";

export default {
  component: Notification,
  title: "Form/Notification",
  tags: ["autodocs"],
};
const xIcon = <IconCircleXFilled size={28} />;
const checkIcon = <IconCircleCheckFilled size={28} />;

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
          gap: 20,
        }}
      >
        <Title>Usage</Title>

        <Notification
          color="#228be6"
          title="We notify you that"
          radius="sm"
          withCloseButton={false}
        >
          You are now obligated to give a star to Mantine project on GitHub
        </Notification>

        <Notification
          color="success"
          title="We notify you that"
          radius="sm"
          withBorder
        >
          You are now obligated to give a star to Mantine project on GitHub
        </Notification>
        <Title>With icon</Title>

        <Notification icon={xIcon} color="error" title="Bummer!" radius="sm">
          Something went wrong
        </Notification>

        <Notification
          icon={checkIcon}
          color="#12b886"
          title="All good!"
          radius="sm"
          mt="md"
        >
          Everything is fine
        </Notification>

        <Notification
          icon={checkIcon}
          color="#228be6"
          title="Please wait"
          radius="sm"
          loading
          withCloseButton={false}
        >
          The application is trying to reconnect to the server
        </Notification>

        <Notification
          icon={checkIcon}
          color="#228be6"
          title="We notify you that"
          radius="sm"
        >
          You are now obligated to give a star to Mantine project on GitHub
        </Notification>
      </div>
    </div>
  );
}
