/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: [
    // '../../../apps/**/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    "../../../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
};
// biome-ignore lint/style/noDefaultExport: Storybook config requires a default export
export default config;
