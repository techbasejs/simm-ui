export default {
  stories: ['../packages/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {
    autodocs: false,
  },

  core: {
    disableTelemetry: true,
  },


  typescript: {
    reactDocgen: false,
  }
};