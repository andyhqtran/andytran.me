/* eslint-disable @typescript-eslint/no-var-requires */
const {
  blue,
  blueDark,
  green,
  greenDark,
  orange,
  orangeDark,
  red,
  redDark,
  slate,
  slateDark,
  yellow,
  yellowDark,
} = require('@radix-ui/colors');

const colors = {
  blue,
  blueDark,
  green,
  greenDark,
  orange,
  orangeDark,
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
    return arr.filter(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase() == -1);
    });
  }

  keys = filterItems(keys, 'Dark');

  return keys;
};

const generateColorClasses = () => {
  const keys = colorKeys();
  let mappedColors = {};

  keys.map((color) => {
    mappedColors[color] = {};
  });

  keys.map((color) => {
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

  radixColors.map((color, i) => {
    const key = Object.keys(colors)[i];

    if (key.includes('Dark')) {
      darkColors = { ...darkColors, ...color };
    } else {
      rootColors = { ...rootColors, ...color };
    }
  });

  return {
    root: { ...rootColors },
    dark: { ...darkColors },
  };
};

const variables = generateColorVariables();
const classes = generateColorClasses();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    variables: {
      DEFAULT: {
        colors: { ...variables.root },
      },
      '[data-theme="dark"]': {
        colors: { ...variables.dark },
      },
    },

    extend: {
      animation: {
        enter: 'enter 200ms ease-out',
        'slide-in': 'slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)',
        leave: 'leave 150ms ease-in forwards',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      colors: {
        ...classes,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@mertasan/tailwindcss-variables'), require('tailwindcss-radix')()],
};
