module.exports = {
  extends: ['next', 'turbo', 'prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'simple-import-sort'],

  rules: {
    '@next/next/no-html-link-for-pages': 'off',

    /**
     * @see https://github.com/lydell/eslint-plugin-simple-import-sort/
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
