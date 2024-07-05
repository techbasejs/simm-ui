"use client";

import { useState } from "react";
import { Stack } from "../Stack";
import { Tab } from "./Tab";
import { Text } from "../Text";
import { Tabs } from "./Tabs";
import {
  IconHeart,
  IconPhone,
  Icon360View,
  IconMaximize,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
  IconSailboat,
} from "@tabler/icons-react";

export default {
  component: Tabs,
  title: "LAYOUTS/Tabs",
  tags: ["core"],
};

const style = { minWidth: "24px", minHeight: "24px" };

export function Default() {
  const [value0, setValue0] = useState(1);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);

  return (
    <Stack>
      <Stack>
        <Text>Basic usage</Text>
        <Tabs value={value0} onChange={(value) => setValue0(value as number)}>
          <Tabs.List>
            <Tabs.Tab
              label="ITEM ONE"
              value={1}
              icon={<IconHeart style={style} />}
            />
            <Tabs.Tab
              label="ITEM TWO"
              value={2}
              icon={<IconPhone style={style} />}
            />
            <Tabs.Tab
              label="ITEM THREE"
              value={3}
              icon={<IconMaximize style={style} />}
            />
          </Tabs.List>
          <Tabs.Panel value={1}>Tab panel 1</Tabs.Panel>
          <Tabs.Panel value={2}>Tab panel 2</Tabs.Panel>
          <Tabs.Panel value={3}>Tab panel 3</Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack mt={30}>
        <Text>Colored tabs + Wrapped label + Empty text panel</Text>
        <Tabs
          value={value1}
          onChange={(value) => setValue1(value as number)}
          color="error"
        >
          <Tabs.List>
            <Tabs.Tab
              label="ITEM ONE"
              value={1}
              icon={<IconHeart style={style} />}
            />
            <Tabs.Tab
              label="ITEM TWO: Long labels will automatically wrap on Tabs.Tabs. If the label is too long for the tab, it will overflow, and the text will not be visible."
              value={2}
              icon={<IconPhone style={style} />}
              wrapped
            />
            <Tabs.Tab
              label="ITEM THREE"
              value={3}
              icon={<IconMaximize style={style} />}
            />
          </Tabs.List>
          <Tabs.Panel value={1}>Tab panel 1</Tabs.Panel>
          <Tabs.Panel value={2}>Tab panel 2</Tabs.Panel>
          <Tabs.Panel value={3} emptyText="No data found!!!" />
        </Tabs>
      </Stack>

      <Stack mt={30}>
        <Text>Scrollable</Text>
        <Tabs
          value={value2}
          scrollable
          scrollButtons="hideOnDisable"
          onChange={(value) => setValue2(value as number)}
        >
          <Tabs.List>
            <Tabs.Tab
              label="ITEM ONE"
              value={1}
              icon={<IconHeart style={style} />}
            />
            <Tabs.Tab
              label="ITEM TWO"
              value={2}
              icon={<IconPhone style={style} />}
            />
            <Tabs.Tab
              label="ITEM THREE"
              value={3}
              icon={<IconMaximize style={style} />}
            />
            <Tabs.Tab
              label="ITEM FOUR"
              value={4}
              icon={<IconHeart style={style} />}
            />
            <Tabs.Tab
              label="ITEM FIVE"
              value={5}
              wrapped
              icon={<Icon360View style={style} />}
            />
            <Tabs.Tab
              label="ITEM SIX HAS VERY LONG TEXT THAT WILL BE SCROLLED"
              value={6}
              icon={<IconSailboat style={style} />}
            />
          </Tabs.List>
          <Tabs.Panel value={1}>Tab panel 1</Tabs.Panel>
          <Tabs.Panel value={2}>Tab panel 2</Tabs.Panel>
          <Tabs.Panel value={3}>Tab panel 3</Tabs.Panel>
          <Tabs.Panel value={4}>Tab panel 4</Tabs.Panel>
          <Tabs.Panel value={5}>Tab panel 5</Tabs.Panel>
          <Tabs.Panel value={6}>Tab panel 6</Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack mt={30}>
        <Text>Scrollable vertical</Text>
        <Stack direction="row" sx={{ height: 200 }}>
          <Tabs
            value={value3}
            onChange={(value) => setValue3(value as number)}
            direction="column"
            scrollable
            scrollButtons="hideOnDisable"
          >
            <Tabs.List>
              <Tabs.Tab
                label="ITEM ONE"
                value={1}
                icon={<IconNumber1 style={style} />}
              />
              <Tabs.Tab
                label="ITEM TWO"
                value={2}
                icon={<IconNumber2 style={style} />}
              />
              <Tabs.Tab
                label="ITEM THREE"
                value={3}
                icon={<IconNumber3 style={style} />}
              />
              <Tabs.Tab
                label="ITEM FOUR"
                value={4}
                icon={<IconNumber4 style={style} />}
              />
              <Tabs.Tab
                label="ITEM FIVE"
                value={5}
                icon={<IconNumber5 style={style} />}
              />
              <Tabs.Tab
                label="ITEM SIX"
                value={6}
                icon={<IconNumber6 style={style} />}
              />
            </Tabs.List>
            <Tabs.Panel value={1}>Tab panel 1</Tabs.Panel>
            <Tabs.Panel
              value={2}
              emptyText="this is default text when children is null"
            />
            <Tabs.Panel value={3}>Tab panel 3</Tabs.Panel>
            <Tabs.Panel value={4}>Tab panel 4</Tabs.Panel>
            <Tabs.Panel value={5}>Tab panel 5</Tabs.Panel>
            <Tabs.Panel value={6}>Tab panel 6</Tabs.Panel>
          </Tabs>
        </Stack>
      </Stack>
    </Stack>
  );
}
