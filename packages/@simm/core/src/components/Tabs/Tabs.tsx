import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
import { TabContext, TabContextProvider } from "./Tabs.context";
import { TabList } from "./TabList";

export const _Tabs = (props: TabContext) => {
  console.log("props", props);
  return (
    <TabContextProvider value={{ ...props }}>
      {props.children}
    </TabContextProvider>
  );
};

type TabsGroupWithType = typeof _Tabs & {
  Tab: typeof Tab;
  Panel: typeof TabPanel;
  List: typeof TabList;
};

export const Tabs = _Tabs as TabsGroupWithType;

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.List = TabList;
