module.exports = {
  async rewrites() {
    return [
      { source: '/ghost', destination: process.env.GHOST_API_URL + '/ghost/' },
    ];
  },
};
