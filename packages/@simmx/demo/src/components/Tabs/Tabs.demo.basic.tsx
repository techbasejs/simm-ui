import { useState } from "react";
import { SimmDemo } from "../../render-demo";
import { Tabs, Stack, Tab, TabPanel, TabContextProvider } from "@simm/core";
import { IconHeart, IconMaximize, IconPhone } from "@tabler/icons-react";

const code = `
import { useState } from "react";
import { Tabs, Stack, Tab } from "@simm/core";
import { IconHeart, IconMaximize, IconPhone } from "@tabler/icons-react";

function Demo() {
  const [value, setValue] = useState(1);
  return (
    <Stack spacing={10}>
      <Tabs value={value} onChange={(value) => setValue(value as number)}>
        <Tab label="ITEM ONE" value={1} icon={<IconHeart />} />
        <Tab label="ITEM TWO" value={2} icon={<IconPhone />} />
        <Tab label="ITEM THREE" value={3} icon={<IconMaximize />} />
      </Tabs>
      <TabContextProvider value={{ value }}>
        <TabPanel value={1}>Tab panel 1</TabPanel>
        <TabPanel value={2}>Tab panel 2</TabPanel>
        <TabPanel value={3}>Tab panel 3</TabPanel>
      </TabContextProvider>
    </Stack>
  );
}`;

function Demo() {
  const [value, setValue] = useState(1);
  return (
    <Stack spacing={10}>
      <Tabs value={value} onChange={(value) => setValue(value as number)}>
        <Tab label="ITEM ONE" value={1} icon={<IconHeart />} />
        <Tab label="ITEM TWO" value={2} icon={<IconPhone />} />
        <Tab label="ITEM THREE" value={3} icon={<IconMaximize />} />
      </Tabs>
      <TabContextProvider value={{ value }}>
        <TabPanel value={1}>Tab panel 1</TabPanel>
        <TabPanel value={2}>Tab panel 2</TabPanel>
        <TabPanel value={3}>Tab panel 3</TabPanel>
      </TabContextProvider>
    </Stack>
  );
}

export const TabsDemoBasic: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
