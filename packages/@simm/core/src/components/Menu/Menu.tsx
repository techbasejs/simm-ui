import { MouseEvent } from "react";
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";
import { Box } from "../Box";
import { UnstyledButton } from "../UnstyledButton";
export type MenuItemType = {
  label: string;
  href?: string;
  target?: string;
  children?: MenuItemType[];
};

export type MenuProps = {
  items: MenuItemType[];
  itemRender?: (item: MenuItemType) => React.ReactNode;
};

export const Menu = ({ items, itemRender }: MenuProps) => {
  const renderItems = () =>
    items?.map((item, index) => renderItem(item, index.toString()));
  const renderItem = (item: MenuItemType, prevKey: string) => {
    const output = [];
    if (item.children) {
      for (const [index, child] of item.children.entries()) {
        const key = prevKey + index;
        output.push(renderItem(child, key));
      }
    }

    const handleClick = (e: MouseEvent) => {
      const elm = e.currentTarget.nextElementSibling as HTMLElement;
      elm.style.height = elm.scrollHeight + "px";
      setTimeout(() => {
        elm.style.height = "auto";
      }, 100);
      // console.log(e.currentTarget.nextElementSibling);
    };

    return (
      <Box as="li" py={4} key={prevKey}>
        {typeof itemRender === "function" ? (
          itemRender(item)
        ) : (
          <UnstyledButton
            onClick={handleClick}
            as={"a"}
            href={item.href as string}
            {...(item.target && { target: item.target })}
            // prefixIcon={<IconPointFilled size={12} />}
          >
            {item.label}
          </UnstyledButton>
        )}

        {output.length > 0 && <Box as="ul">{output}</Box>}
      </Box>
    );
  };

  const utilityClasses = generateUtilityClasses("Menu", []);

  return (
    <Box
      className={utilityClasses}
      sx={{
        ul: {
          listStyle: "none",
          paddingInlineStart: 24,
          transition: "all 0.25s",
        },
        "> ul": {
          paddingInlineStart: 0,
        },
        "> ul ul": {
          height: 0,
          overflow: "hidden",
        },
      }}
    >
      <Box as="ul">{renderItems()}</Box>
    </Box>
  );
};
