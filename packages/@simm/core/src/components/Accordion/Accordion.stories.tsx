import { render } from "@testing-library/react";
import { Accordion, AccordionItem, AccordionProps } from "./Accordion";

export default {
  component: Accordion,
  title: "Button/Accordion",
  tags: ["core"],
};

const Basic = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem value="item1" trigger="Item 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionItem>
    <AccordionItem value="item2" trigger="Item 2">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </AccordionItem>
    <AccordionItem value="item3" trigger="Item 3">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </AccordionItem>
  </Accordion>
);

const BasicWithSubtitle = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem value="item1" trigger="Item 1" subtitle="This is a subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionItem>
    <AccordionItem
      value="item2"
      trigger="Item 2"
      subtitle="This is another subtitle"
    >
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </AccordionItem>
    <AccordionItem
      value="item3"
      trigger="Item 3"
      subtitle="This is the last subtitle"
    >
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </AccordionItem>
  </Accordion>
);

export const Default = {
  render: Basic,
  args: {},
};

export const DefaultExpanded = {
  render: Basic,
  args: {
    value: "item2",
  },
};

export const Multiple = {
  render: Basic,
  args: {
    selectionMode: "multiple",
  },
};

export const DisbaleKeys = {
  render: Basic,
  args: {
    disabledKeys: ["item1", "item2"],
  },
};

export const WithSubtitle = {
  render: BasicWithSubtitle,
  args: {},
};
