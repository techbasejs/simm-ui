export default {
  stories: ["../packages/**/*.stories.@(ts|tsx)", "../packages/**/*.@(mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],

  framework: "@storybook/nextjs",

  docs: false,

  core: {
    disableTelemetry: true,
  },

  typescript: {
    reactDocgen: false,
  },
};
