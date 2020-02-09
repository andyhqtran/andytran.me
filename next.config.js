require('dotenv').config()
const path = require('path')

module.exports = {
  env: {
    GHOST_API_KEY: process.env.GHOST_API_KEY,
    GHOST_API_URL: process.env.GHOST_API_URL
  },
  webpack (config, options) {
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.pages = path.join(__dirname, 'pages')
    config.resolve.alias.utils = path.join(__dirname, 'utils')

    return config
  }
}
