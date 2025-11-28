module.exports = {
  extends: [
    "next",
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],

  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "simple-import-sort"],

  rules: {
    "@next/next/no-html-link-for-pages": "off",

    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "simple-import-sort/exports": "error",

    /**
     * @see https://github.com/lydell/eslint-plugin-simple-import-sort/
     */
    "simple-import-sort/imports": "error",
  },
};
