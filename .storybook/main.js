const path = require('path')

module.exports = {
  stories: [
    '../src/design-system/**/*.stories.(ts|tsx|js|jsx)',
    '../src/components/**/*.stories.[tj][sx]'
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        include: [path.resolve(__dirname, '../src')],
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register'
  ],
  webpackFinal: (config) => {
    config.resolve.alias.api = path.join(__dirname, '../src/api')
    config.resolve.alias.components = path.resolve(__dirname, '../src/components')
    config.resolve.alias['design-system'] = path.resolve(__dirname, '../src/design-system')
    config.resolve.alias.themes = path.resolve(__dirname, '../src/themes')
    config.resolve.alias.utils = path.resolve(__dirname, '../src/utils')

    return config
  }
}
