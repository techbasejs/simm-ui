import { Box, useTheme } from "@simm/core";
import { TableHTMLAttributes } from "react";

export const MdxTable = ({ children }: TableHTMLAttributes<HTMLTableElement>) => {
  const theme = useTheme();
  return (
    <Box
      as="table"
      sx={{
        borderSpacing: 0,
        border: "1px solid",
        borderColor: theme.shape?.borderColor,
        borderRadius: theme.shape?.borderRadius,
      }}
    >
      {children}
    </Box>
  );
};