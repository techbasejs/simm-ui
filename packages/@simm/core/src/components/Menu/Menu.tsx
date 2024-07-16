import { HTMLAttributes, MouseEvent, useEffect, useRef, useState } from "react";
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";
import { Box } from "../Box";
import { UnstyledButton } from "../UnstyledButton";
import styled from "@emotion/styled";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
export type MenuItemType = {
  expanded?: boolean;
  label: string;
  href?: string;
  target?: string;
  children?: MenuItemType[];
};

export type MenuProps = {
  items: MenuItemType[];
  itemRender?: (item: MenuItemType) => React.ReactNode;
};

const MenuListRoot = styled.ul(() => ({
  overflow: "hidden",
}));

export const Menu = ({ items, itemRender }: MenuProps) => {
  const utilityClasses = generateUtilityClasses("Menu", []);

  const duration = 250;

  const renderItems = () =>
    items?.map((item, index) => renderItem(item, index.toString()));

  const renderItem = (item: MenuItemType, prevKey: string) => {
    const [expanded, setExpanded] = useState(false);
    const childrenItems = [];
    if (item.children) {
      for (const [index, child] of item.children.entries()) {
        const key = prevKey + index;
        childrenItems.push(renderItem(child, key));
      }
    }

    const handleClick = (e: MouseEvent) => {
      const expandedElm = e.currentTarget
        .nextElementSibling as HTMLUListElement;
      if (expandedElm) {
        if (expandedElm.clientHeight === 0) {
          expandedElm.style.height = expandedElm.scrollHeight + "px";
          setTimeout(() => {
            expandedElm.style.removeProperty("height");
          }, duration);
        } else {
          expandedElm.style.height = expandedElm.scrollHeight + "px";
          setTimeout(() => {
            expandedElm.style.height = "0";
          });
        }
      }
      setExpanded((expanded) => !expanded);
    };

    return (
      <Box as="li" py={4} key={prevKey}>
        <UnstyledButton
          onClick={handleClick}
          as={"a"}
          href={item.href as string}
          prefixIcon={
            childrenItems.length ? (
              expanded ? (
                <IconChevronDown size={16} />
              ) : (
                <IconChevronRight size={16} />
              )
            ) : null
          }
          {...(item.target && { target: item.target })}
        >
          {item.label}
        </UnstyledButton>
        {childrenItems.length > 0 && (
          <MenuListRoot style={{ height: 0 }}>{childrenItems}</MenuListRoot>
        )}
      </Box>
    );
  };

  return (
    <Box
      className={utilityClasses}
      sx={{
        ul: {
          listStyle: "none",
          paddingInlineStart: 24,
        },
        "> ul": {
          paddingInlineStart: 0,
        },
        "> ul ul": {
          transitionProperty: "all",
          transitionDuration: duration / 1000 + "s",
        },
      }}
    >
      <Box as="ul">{renderItems()}</Box>
    </Box>
  );
};
