import { Box, createPolymorphicComponent } from "../Box";

export type LinkProps = {
  to?: string;
};

export const Link = createPolymorphicComponent<HTMLDivElement, LinkProps>(
  ({ as, children, to, ...rest }, ref) => {
    const navigateTo = () => {
      console.log("OK");
    };
    return (
      <Box as={as || "a"} onClick={navigateTo}>
        {children}
      </Box>
    );
  },
);
