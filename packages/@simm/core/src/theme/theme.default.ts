import { grey } from "../colors/grey";
import { UseThemeProps } from "./theme.type";
import { colors, shadows, typography } from "@simm/theme";

export const themeDefault: UseThemeProps = {
  typography: {
    color: typography.baseColor,
    fontFamily: typography.baseFontFamily,
    fontSize: typography.baseFontSize,
  },
  shape: {
    borderRadius: 8,
    borderColor: colors.gray[100],
  },
  shadows: shadows,
  pallete: {
    mode: "light",
    common: {
      black: colors.base.black,
      white: colors.base.white,
      disabled: colors.gray[200],
    },
    divider: colors.gray[100],
    text: {
      primary: typography.baseColor,
      disabled: colors.gray[200],
    },
    background: {
      primary: colors.base.white,
      disabled: colors.gray[200],
    },
    grey: grey,
    primary: {
      main: colors.blue[600],
      dark: colors.blue[700],
      light: colors.blue[500],
      constrastText: colors.base.white,
    },
    success: {
      main: colors.green[600],
      dark: colors.green[700],
      light: colors.green[500],
      constrastText: colors.base.white,
    },
    error: {
      main: colors.red[600],
      dark: colors.red[700],
      light: colors.red[500],
      constrastText: colors.base.white,
    },
    warning: {
      main: colors.yellow[600],
      dark: colors.yellow[700],
      light: colors.yellow[500],
      constrastText: colors.base.white,
    },
  },
  components: {
    Button: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          fontSize: typography.baseFontSize,
        },
      },
    },
    Switch: {
      styleOverrides: {},
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
