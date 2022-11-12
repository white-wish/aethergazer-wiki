const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      recursive: ["Recursive", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'main': "url('/images/background.png')"
      },
      borderWidth: {
        '1': "1px"
      },
      fontWeight: {
        'extrablack': 1000
      }
    }
  },
  plugins: [],
};
