module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: false,
        ssr: true
      }
    ]
  ]
}
