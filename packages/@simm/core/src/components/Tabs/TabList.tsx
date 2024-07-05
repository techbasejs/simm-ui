import styled, { CSSObject } from "@emotion/styled";
import { Box, createPolymorphicComponent } from "../Box";
import { Stack } from "../Stack";
import { UseThemeProps, useTheme } from "../../theme";
import React, { useMemo, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { UnstyledButton } from "../UnstyledButton";
import { ColorType } from "../../types/types";
import { TabDirection } from "./Tab";
import { useModalContext } from "../Modal/Modal.context";
import { useTabContext } from "./Tabs.context";

export type TabsProps = {
  direction?: TabDirection;
  color?: ColorType;
  value?: any;
  scrollable?: boolean;
  scrollButtons?: "auto" | "hideOnDisable" | "hidden";
  scrollButtonStyles?: CSSObject;
  onChange?: (value: string | number) => void;
  indicatorStyleProps?: CSSObject;
};

const TabsRoot = styled(Stack)<
  TabsProps & {
    theme: UseThemeProps;
  }
>(({ theme, direction = "row", ...rest }) => ({
  boxSizing: "border-box",
  alignItems: "center",
  ...(direction === "column" && {
    borderRight: `1px solid ${theme.pallete?.divider}`,
  }),
  ...rest.sx,
}));

const TabsIndicator = styled.span<{
  direction: TabDirection;
  indicatorStyleProps?: CSSObject;
  theme: UseThemeProps;
}>(({ direction, indicatorStyleProps, theme }) => ({
  position: "absolute",
  backgroundColor: theme.pallete?.divider,
  transition: "1s ease",
  ...(direction === "row" && {
    height: 1,
    width: "100%",
    bottom: 0,
    left: 0,
  }),
  ...indicatorStyleProps,
}));

const TabsScroller = styled(Box)<{
  direction: TabDirection;
  indicatorStyleProps?: CSSObject;
  theme?: UseThemeProps;
}>(({ indicatorStyleProps, direction }) => ({
  position: "relative",
  whiteSpace: "nowrap",
  ...(direction === "row"
    ? {
        overflowX: "auto",
        overflowY: "hidden",
      }
    : {
        overflowX: "hidden",
        overflowY: "auto",
      }),
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Safari + Chrome
  },
  ...indicatorStyleProps,
}));

const FlexContainer = styled(Stack)<{
  direction: TabDirection;
}>(({ direction }) => ({
  ...(direction === "row"
    ? {
        overflowX: "auto",
        overflowY: "hidden",
      }
    : {
        overflowX: "hidden",
        overflowY: "auto",
        height: "100%",
      }),
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Safari + Chrome
  },
}));

const TabScrollButton = styled(UnstyledButton)<{
  disabled?: boolean;
  direction: TabDirection;
  scrollButtonStyles?: CSSObject;
}>(({ disabled, direction, scrollButtonStyles }) => ({
  ...(disabled && {
    pointerEvents: "none",
    opacity: 0.5,
    ...(direction === "column" && {
      width: "100%",
      justifyContent: "center",
    }),
  }),
  "& svg": {
    minWidth: "24px",
    minHeight: "24px",
    ...(direction === "column" && {
      transform: "rotate(90deg)",
    }),
  },
  ...scrollButtonStyles,
}));

export const TabList = createPolymorphicComponent<HTMLDivElement, TabsProps>(
  (props, ref) => {
    const { children: childrenProp, ...rest } = props;

    const {
      direction = "row",
      value,
      onChange,
      color,
      indicatorStyleProps,
      scrollButtons = "auto",
      scrollButtonStyles,
      scrollable,
    } = useTabContext();

    const theme = useTheme();
    const tabListRef = useRef<HTMLDivElement | null>(null);
    const tabsRef = useRef<HTMLDivElement | null>(null);

    const [disablePrevButton, setDisablePrevButton] = useState(true);
    const [disableNextButton, setDisableNextButton] = useState(false);

    const isHorizontal = useMemo(() => direction === "row", [direction]);
    const clientSize = useMemo(
      () => (!isHorizontal ? "clientHeight" : "clientWidth"),
      [isHorizontal],
    );
    const scrollOrientation = useMemo(
      () => (!isHorizontal ? "scrollTop" : "scrollLeft"),
      [isHorizontal],
    );
    const scrollDimension = useMemo(
      () => (!isHorizontal ? "scrollHeight" : "scrollWidth"),
      [isHorizontal],
    );

    const handleScroll = (
      element: HTMLDivElement,
      distance: number,
      step: number,
      speed: number = 5,
    ) => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element[scrollOrientation] += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
        setDisablePrevButton(element[scrollDimension] === 0);
        setDisableNextButton(
          element[scrollDimension] + element[clientSize] >=
            element[scrollDimension],
        );
      }, speed);
    };

    const getScrollSize = () => {
      if (!tabsRef.current || !tabListRef.current) return 0;
      const containerSize = tabsRef.current[clientSize];
      let totalSize = 0;
      const children = Array.from(tabListRef.current.children);

      for (let i = 0; i < children.length; i += 1) {
        const tab = children[i];
        if (totalSize + tab[clientSize] > containerSize) {
          if (i === 0) {
            totalSize = containerSize;
          }
          break;
        }
        totalSize += tab[clientSize];
      }

      return totalSize;
    };

    const handleStartScrollClick = () => {
      handleScroll(
        tabListRef.current as HTMLDivElement,
        getScrollSize(),
        -10,
        isHorizontal ? 5 : 10,
      );
    };

    const handleEndScrollClick = () => {
      handleScroll(
        tabListRef.current as HTMLDivElement,
        getScrollSize(),
        10,
        isHorizontal ? 5 : 10,
      );
    };

    const getConditionalElements = () => {
      if (!scrollable || scrollButtons === "hidden") return {};
      const conditionalElements: any = {};

      const showScrollButtons =
        scrollable &&
        (scrollButtons === "auto" || scrollButtons === "hideOnDisable");

      conditionalElements.scrollButtonStart = showScrollButtons ? (
        <TabScrollButton
          disabled={disablePrevButton}
          direction={direction}
          scrollButtonStyles={scrollButtonStyles}
        >
          {((!disablePrevButton && scrollButtons === "hideOnDisable") ||
            scrollButtons === "auto") && (
            <IconChevronLeft onClick={handleStartScrollClick} />
          )}
        </TabScrollButton>
      ) : null;

      conditionalElements.scrollButtonEnd = showScrollButtons ? (
        <TabScrollButton
          disabled={disableNextButton}
          direction={direction}
          scrollButtonStyles={scrollButtonStyles}
        >
          {((!disableNextButton && scrollButtons === "hideOnDisable") ||
            scrollButtons === "auto") && (
            <IconChevronRight onClick={handleEndScrollClick} />
          )}
        </TabScrollButton>
      ) : null;

      return conditionalElements;
    };

    const conditionalElements = getConditionalElements();

    const valueToIndex = new Map();
    let childIndex = 0;
    const children: any = React.Children.map(childrenProp, (child, index) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      const childValue =
        child.props.value === undefined ? childIndex : child.props.value;
      valueToIndex.set(childValue, childIndex);
      const selected = childValue === value;

      childIndex += 1;
      return React.cloneElement(child, {
        // @ts-ignore
        selected,
        orientation: direction,
        color,
        onChange: () => {
          if (onChange) {
            onChange(childValue);
            if (tabListRef.current) {
              tabListRef.current.children?.[index]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
              setDisablePrevButton(index === 0);
              setDisableNextButton(index === children.length - 1);
            }
          }
        },
        value: childValue,
      });
    });

    return (
      <TabsRoot direction={direction} ref={ref} theme={theme} {...rest}>
        {conditionalElements.scrollButtonStart}
        <TabsScroller ref={tabsRef} direction={direction}>
          <FlexContainer direction={direction} ref={tabListRef}>
            {children}
          </FlexContainer>
          <TabsIndicator
            theme={theme}
            direction={direction}
            indicatorStyleProps={indicatorStyleProps}
          />
        </TabsScroller>
        {conditionalElements.scrollButtonEnd}
      </TabsRoot>
    );
  },
);
