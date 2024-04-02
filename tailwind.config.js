/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    colors: {

      // Tema claro
      transparent: 'transparent',
      current: 'currentColor',
      'custom-light-background': '#fcf4a8',
      'custom-light-text': '#346860',
      'custom-light-button': '#f3930b',
      'custom-light-header': '#5e9958',
      'custom-light-highlight': '#938605',

      // Tema oscuro
      'custom-dark-background': '#5e9958',
      'custom-dark-text': '#fcf4a8',
      'custom-dark-button': '#931f05',
      'custom-dark-header': '#f3930b',
      'custom-dark-highlight': '#938605',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
