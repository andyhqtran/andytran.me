module.exports = {
  extends: ['next', 'turbo', 'prettier'],

  plugins: ['simple-import-sort'],

  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',

    /**
     * @see https://github.com/lydell/eslint-plugin-simple-import-sort/
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
