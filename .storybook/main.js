const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register'
  ],
  webpackFinal: (config) => {
    config.resolve.alias.components = path.resolve(__dirname, '../components')
    config.resolve.alias.themes = path.resolve(__dirname, '../themes')
    config.resolve.alias.utils = path.resolve(__dirname, '../utils')

    return config
  }
}
