/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#fef2f2' /* TODO: Should be changed later on */,
        secondary: '#fbf9f1' /* TODO: Should be changed later on */,
      },
      borderRadius: { '1/2': '50%' },
    },
  },
  plugins: [],
};

export default config;
