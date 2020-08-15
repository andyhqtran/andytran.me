const path = require('path');

module.exports = {
  stories: ['../**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias.components = path.resolve(
      __dirname,
      '../src/components',
    );

    config.resolve.alias.primitives = path.resolve(
      __dirname,
      '../src/components/primitives',
    );

    return config;
  },
};
