require('dotenv').config()
const path = require('path')

module.exports = {
  env: {
    GHOST_API_URL: process.env.GHOST_API_URL,
    GHOST_ADMIN_API_KEY: process.env.GHOST_ADMIN_API_KEY,
    GHOST_CONTENT_API_KEY: process.env.GHOST_CONTENT_API_KEY,
    SOCIAL_CODEPEN_URL: process.env.SOCIAL_CODEPEN_URL,
    SOCIAL_GITHUB_URL: process.env.SOCIAL_GITHUB_URL,
    SOCIAL_LINKEDIN_URL: process.env.SOCIAL_LINKEDIN_URL,
    SOCIAL_TWITTER_URL: process.env.SOCIAL_TWITTER_URL
  },
  webpack (config, options) {
    config.resolve.alias.api = path.join(__dirname, 'api')
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias['design-system'] = path.join(__dirname, 'design-system')
    config.resolve.alias.pages = path.join(__dirname, 'pages')
    config.resolve.alias.themes = path.join(__dirname, 'themes')
    config.resolve.alias.utils = path.join(__dirname, 'utils')

    return config
  }
}
