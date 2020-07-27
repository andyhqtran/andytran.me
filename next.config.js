require('dotenv').config();
const path = require('path');

module.exports = {
  env: {
    GHOST_API_URL: process.env.GHOST_API_URL,
    GHOST_ADMIN_API_KEY: process.env.GHOST_ADMIN_API_KEY,
    GHOST_CONTENT_API_KEY: process.env.GHOST_CONTENT_API_KEY,
  },
  webpack(config, options) {
    config.resolve.alias.api = path.join(__dirname, './src/api');
    config.resolve.alias.components = path.join(__dirname, './src/components');
    config.resolve.alias['design-system'] = path.join(__dirname, './src/design-system');
    config.resolve.alias.pages = path.join(__dirname, './src/pages');
    config.resolve.alias.themes = path.join(__dirname, './src/themes');
    config.resolve.alias.utils = path.join(__dirname, './src/utils');

    return config;
  },
};
