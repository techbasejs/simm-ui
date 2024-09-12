import { useState } from "react";
import { Stack } from "../Stack/Stack";
import { Title } from "../Title";
import Step, { StepProps } from "./Step";
import Steps from "./Steps";
import { Icon12Hours, IconUser, IconUTurnLeft } from "@tabler/icons-react";

export default {
  component: Steps,
  title: "FORM/Steps",
  tags: ["core"],
};

export function Default() {
  const [current, setCurrent] = useState(1);
  const [current1, setCurrent1] = useState(1);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(1);
  const [current4, setCurrent4] = useState(1);

  const renderStepIcon = (item: StepProps) => {
    return (
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "green",
          padding: "4px 8px",
          borderRadius: "999px",
          fontSize: 10,
        }}
      >
        {item.stepNumber}.{item.title}
      </div>
    );
  };

  return (
    <Stack spacing={20}>
      <Title>Usage :</Title>
      <Stack direction="row" spacing={10}>
        <Steps
          color="primary"
          onChange={(value) => setCurrent(value)}
          current={current}
          items={[
            {
              title: "Finished",
              description: "This is a description.",
            },
            {
              title: "In Progress",
              description: "This is a description.",
              subTitle: "13_23131",
            },
            {
              title: "Waiting",
              description: "This is a description.",
            },
          ]}
        />
      </Stack>
      <Title>With Icon :</Title>
      <Stack direction="row" spacing={10}>
        <Steps
          current={current1}
          onChange={(value) => setCurrent1(value)}
          color="info"
          items={[
            {
              title: "Step 1",
              description: "This is a description.",
              icon: <IconUTurnLeft size={14} color="#fff" />,
            },
            {
              title: "Step 2",
              description: "This is a description.",
              subTitle: "This is a subtitle.",
              icon: <Icon12Hours size={14} color="#fff" />,
            },
            {
              title: "Step 3",
              description: "This is a description.",
              icon: <IconUser size={14} color="#fff" />,
            },
          ]}
        />
      </Stack>
      <Title>Direction: vertical :</Title>
      <Stack direction="row" spacing={10}>
        <Steps
          current={current2}
          onChange={(value) => setCurrent2(value)}
          color="success"
          direction="vertical"
          items={[
            {
              title: "Step 1",
              description: "This is a description.",
            },
            {
              title: "Step 2",
              description: "This is a description.",
              subTitle: "This is a subtitle.",
            },
            {
              title: "Step 3",
              description: "This is a description.",
            },
          ]}
        />
      </Stack>
      <Title>Custom render Icon :</Title>
      <Stack direction="row" spacing={10}>
        <Steps
          current={current3}
          onChange={(value) => setCurrent3(value)}
          stepIconRender={renderStepIcon}
          items={[
            {
              title: "Step 1",
              description: "This is a description.",
            },
            {
              title: "Step 2",
              description: "This is a description.",
              subTitle: "This is a subtitle.",
            },
            {
              title: "Step 3",
              description: "This is a description.",
            },
          ]}
        />
      </Stack>
      <Title>Use Step component :</Title>
      <Stack direction="row" spacing={10}>
        <Steps
          current={current4}
          onChange={(value) => setCurrent4(value)}
          stepIconRender={renderStepIcon}
        >
          <Step title="step 1" description="This is a description." />
          <Step title="step 2" description="This is a description." />
          <Step title="step 3" description="This is a description." />
        </Steps>
      </Stack>
    </Stack>
  );
}
