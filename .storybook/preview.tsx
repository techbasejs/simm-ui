import { ThemeProvider } from "../packages/@simm/core/src/theme/theme.provider";
import React from "react";
import { createTheme } from "../packages/@simm/core/src/theme";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
};

const theme = createTheme({
  pallete: {
    mode: "light",
  },
});

export const decorators = [
  (renderStory: any) => (
    <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>
  ),
];

export default preview;
