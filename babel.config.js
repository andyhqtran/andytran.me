module.exports = {
  presets: ['next/babel', '@emotion/babel-preset-css-prop'],
  plugins: [
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
