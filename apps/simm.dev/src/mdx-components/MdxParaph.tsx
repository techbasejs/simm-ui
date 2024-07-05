import { Box } from "@simm/core";
import { HTMLAttributes } from "react";

export const MdxParaph = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <Box
      as="p"
      sx={{
        marginTop: 0,
      }}
    >
      {children}
    </Box>
  );
};
