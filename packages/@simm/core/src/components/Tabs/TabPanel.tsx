import styled from "@emotion/styled";
import { createPolymorphicComponent } from "../Box";
import { Stack, StackProps } from "../Stack";
import { useTabContext } from "./Tabs.context";
import React, { ReactNode } from "react";

export type TabPanelProps = {
  value: string | number;
  keepMounted?: boolean;
  hidden?: boolean;
  emptyText?: string | ReactNode;
} & StackProps;

const TabPanelRoot = styled(Stack)<Partial<TabPanelProps>>(({ hidden }) => ({
  display: hidden ? "none" : "block",
  width: "100%",
  padding: 10,
}));

export const TabPanel = createPolymorphicComponent<
  HTMLDivElement,
  TabPanelProps
>((props, ref) => {
  const { children, value, keepMounted = false, emptyText, ...rest } = props;
  const context = useTabContext();

  return (
    <TabPanelRoot
      hidden={!keepMounted && value !== context.value}
      p={10}
      ref={ref}
      {...rest}
    >
      {(keepMounted || value === context.value) && children}
      {(keepMounted || value === context.value) &&
        !React.isValidElement(children) &&
        emptyText}
    </TabPanelRoot>
  );
});
