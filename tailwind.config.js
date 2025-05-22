// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        navy: '#1A1A2E',
        gold: '#FFD700',
        lightgray: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
