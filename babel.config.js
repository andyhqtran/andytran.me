module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@emotion',
    '@babel/plugin-proposal-export-default-from',
    [
      'emotion',
      {
        autoLabel: process.env.NODE_ENV !== 'production',
        cssPropOptimization: true,
        labelFormat: '[local]',
        sourceMap: true,
      },
    ],
  ],
};
