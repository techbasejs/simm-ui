import { Box, useTheme } from "@simm/core";
import { TdHTMLAttributes } from "react";

export const MdxTh = ({ children }: TdHTMLAttributes<HTMLElement>) => {
  const theme = useTheme();

  return (
    <Box
      as="th"
      py={8}
      px={10}
      sx={{
        borderBottom: "1px solid",
        borderColor: theme.shape?.borderColor,
      }}
    >
      {children}
    </Box>
  );
};
