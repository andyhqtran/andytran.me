const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  webpackFinal: (config) => {
    config.resolve.alias.components = path.resolve(__dirname, '../components')
    config.resolve.alias.themes = path.resolve(__dirname, '../themes')

    return config
  }
}
