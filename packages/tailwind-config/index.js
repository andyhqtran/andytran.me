/* eslint-disable @typescript-eslint/no-var-requires */
const {
  blue,
  blueDark,
  bronze,
  bronzeDark,
  gold,
  goldDark,
  gray,
  grayDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  slate,
  slateDark,
  yellow,
  yellowDark,
} = require("@radix-ui/colors");

const colors = {
  blue,
  blueDark,
  bronze,
  bronzeDark,
  gold,
  goldDark,
  gray,
  grayDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  slate,
  slateDark,
  yellow,
  yellowDark,
};

const colorKeys = () => {
  let keys = Object.keys(colors);

  function filterItems(arr, query) {
    return arr.filter((el) =>
      el.toLowerCase().indexOf(query.toLowerCase() === -1),
    );
  }

  keys = filterItems(keys, "Dark");

  return keys;
};

const generateColorClasses = () => {
  const keys = colorKeys();
  const mappedColors = {};

  keys.forEach((color) => {
    mappedColors[color] = {};
  });

  keys.forEach((color) => {
    for (let index = 0; index < 12; index++) {
      const step = index + 1;
      mappedColors[color][step] = `var(--colors-${color.toLowerCase()}${step})`;
    }
  });

  return mappedColors;
};

const generateColorVariables = () => {
  let rootColors = {};
  let darkColors = {};

  const radixColors = Object.values(colors);

  radixColors.forEach((color, i) => {
    const key = Object.keys(colors)[i];

    if (key.includes("Dark")) {
      darkColors = { ...darkColors, ...color };
    } else {
      rootColors = { ...rootColors, ...color };
    }
  });

  return {
    dark: { ...darkColors },
    root: { ...rootColors },
  };
};

const variables = generateColorVariables();
const classes = generateColorClasses();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/src/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@mertasan/tailwindcss-variables"),
    require("tailwindcss-radix")(),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      animation: {
        "collapsible-slide-down": "collapsible-slide-down 300ms ease-out",
        "collapsible-slide-up": "collapsible-slide-up 300ms ease-out",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        "spinner-dash": "spinner-dash 1.4s ease-in-out infinite",
        "spinner-rotate": "spinner-rotate 1.4s linear infinite",
      },
      colors: {
        ...classes,
      },
      keyframes: {
        "collapsible-slide-down": {
          "0%": { height: 0 },
          "100%": { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-slide-up": {
          "0%": { height: "var(--radix-collapsible-content-height)" },
          "100%": { height: 0 },
        },
        enter: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        leave: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(0.9)" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "spinner-dash": {
          "0%": {
            strokeDashoffset: "187px",
          },
          "50%": {
            strokeDashoffset: "46.75px",
            transform: "rotate(135deg)",
          },
          "100%": {
            strokeDashoffset: "187px",
            transform: "rotate(450deg)",
          },
        },
        "spinner-rotate": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(270deg)",
          },
        },
      },
    },

    variables: {
      '[data-theme="dark"]': {
        colors: { ...variables.dark },
      },
      // biome-ignore lint/style/useNamingConvention: Tailwind default value requires 'DEFAULT'
      DEFAULT: {
        colors: { ...variables.root },
      },
    },
  },
};
