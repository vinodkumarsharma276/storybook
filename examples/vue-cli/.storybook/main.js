module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|mdx)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/preset-scss',
  ],
  core: {
    builder: 'webpack4',
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/vue',
};
