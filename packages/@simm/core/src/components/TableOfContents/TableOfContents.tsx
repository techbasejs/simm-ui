import styled from "@emotion/styled";
import { Text } from "../Text";
import { UnstyledButton } from "../UnstyledButton";
import { Portal } from "../Portal";
import { Stack } from "../Stack";
import { UseThemeProps, useTheme } from "../../theme";

const TableOfContentsRootStyled = styled.div({
  position: "sticky",
  top: 20,
  right: 0,
  minWidth: 200,
});

const TableOfContentHeaderStyled = styled.div({
  marginBottom: 20,
  fontSize: 16,
});

const TableOfContentBodyStyled = styled.div<{ theme: UseThemeProps }>(
  ({ theme }) => ({
    borderLeft: "1px solid",
    borderColor: theme.shape?.borderColor,
    paddingLeft: 20,
  }),
);

export const TableOfContents = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ position: "fixed", right: 0, top: 0, height: "100%" }}>
      <TableOfContentsRootStyled>
        <TableOfContentHeaderStyled>
          Table of contents
        </TableOfContentHeaderStyled>
        <TableOfContentBodyStyled theme={theme}>
          <UnstyledButton as="a" href="#usage">
            Usage
          </UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>
            Columns span xxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </UnstyledButton>
          <UnstyledButton>Gutter</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
          <UnstyledButton>Usage</UnstyledButton>
        </TableOfContentBodyStyled>
      </TableOfContentsRootStyled>
    </Stack>
  );
};
