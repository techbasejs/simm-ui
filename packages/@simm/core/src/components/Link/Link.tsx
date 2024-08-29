import { Box, createPolymorphicComponent } from "../Box";

export type LinkProps = {
  to?: string;
};

export const Link = createPolymorphicComponent<HTMLDivElement, LinkProps>(
  ({ as, children, to, ...rest }, ref) => {
    const navigateTo = () => {};
    return (
      <Box as={as || "a"} onClick={navigateTo} ref={ref} {...rest}>
        {children}
      </Box>
    );
  },
);
