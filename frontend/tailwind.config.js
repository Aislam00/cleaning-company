// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
          body: ['Open Sans', 'sans-serif'],
        },
        colors: {
          navy: '#1A1A2E',
          brandWhite: '#FFFFFF',
          lightgray: '#F7F7F7',
        },
      },
    },
    plugins: [],
  };
  