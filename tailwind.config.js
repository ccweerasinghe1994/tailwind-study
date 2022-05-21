const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        comf: ['Comfortaa', 'cursive'],
        lora: ['Lora', 'serif'],
        nun: ['Nunito', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        monte: ['Montserrat', 'serif'],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
