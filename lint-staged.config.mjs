/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
    "biome format --write --no-errors-on-unmatched",
    "biome lint --write --no-errors-on-unmatched",
  ],
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
