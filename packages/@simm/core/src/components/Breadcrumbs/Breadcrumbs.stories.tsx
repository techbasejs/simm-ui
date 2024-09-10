import { IconInfoCircle, IconCircleCheck } from "@tabler/icons-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Title } from "../Title";
import { Stack } from "../Stack/Stack";
import { Box } from "../Box";

export default {
  component: Breadcrumbs,
  title: "Typography/Breadcrumbs",
  tags: ["autodocs"],
};
const iconInfo = <IconInfoCircle />;
const iconCheck = <IconCircleCheck />;

export function Default() {
  const items = [
    { title: "Mantine", href: "#" },
    { title: "Mantine hooks", href: "#" },
    { title: "use-id", href: "#" },
  ];
  return (
    <Stack
      sx={{
        backgroundColor: "#f8f9fa",
        border: "1px solid #0000001f",
      }}
      spacing={20}
      p={"20px"}
      m={"0 auto"}
    >
      <Stack
        sx={{
          backgroundColor: "#f8f9fa",
          maxWidth: "400px",
        }}
        spacing={20}
      >
        <Title>Default</Title>
        <Breadcrumbs color="#228be6" items={items} />
        <Title>Custom</Title>
        <Breadcrumbs
          color="success"
          items={items}
          underline="never"
          separatorMargin="md"
          separator={">"}
        />
        <Title>Custom children</Title>
        <Breadcrumbs>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box as="a" href={item.href} sx={{ color: "#228be6" }}>
                {item.title}
              </Box>
              {items.length - 1 !== index && (
                <Box as="span" sx={{ margin: "0 5px" }}>
                  {iconCheck}
                </Box>
              )}
            </Box>
          ))}
        </Breadcrumbs>
      </Stack>
    </Stack>
  );
}
