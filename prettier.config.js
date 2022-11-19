module.exports = {
  printWidth: 120,
  arrowParens: 'always',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './packages/tailwind-config/tailwind.config.js',
};
