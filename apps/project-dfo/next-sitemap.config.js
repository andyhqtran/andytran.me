/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dfo.gg',
  generateRobotsTxt: true,
  exclude: ['/sandbox', '/sandbox/*'],
};
