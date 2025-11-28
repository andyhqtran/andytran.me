/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
    "biome format --write --no-errors-on-unmatched",
    "biome lint --write --no-errors-on-unmatched",
  ],
  "**/*.ts?(x)": (files) => {
    const packageDirs = new Set(
      files
        .map((file) => {
          const [first, second] = file.split("/");
          if (!first || !second) {
            return null;
          }

          return `${first}/${second}`;
        })
        .filter((dir) => dir !== null),
    );

    return Array.from(packageDirs).map(
      (dir) => `pnpm -C ${dir} exec tsc -p tsconfig.json --noEmit`,
    );
  },
};
