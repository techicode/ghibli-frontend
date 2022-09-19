/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eggsheld: '#F4FFD7',
        'very-light-pink': '#FFEBE0',
        ice: '#DBF7E4',
      },
    },
  },
  plugins: [],
};
