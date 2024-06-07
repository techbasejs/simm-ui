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

    return (
      <Box as="li" py={4} key={prevKey}>
        {typeof itemRender === "function" ? (
          itemRender(item)
        ) : (
          <UnstyledButton
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

  return (
    <Box
      sx={{
        ul: {
          listStyle: "none",
          paddingInlineStart: 24,
        },
        "> ul": {
          paddingInlineStart: 0,
        },
      }}
    >
      <Box as="ul">{renderItems()}</Box>
    </Box>
  );
};
