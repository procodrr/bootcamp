/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media440': '440px',
        'media560': '560px',
        'media1200': '1200px'
      },
      backgroundImage: {
        'testimonial-section': "url('/images/testimonial-section-background.png')",
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    }),
    plugin(function({ addVariant }) {
      addVariant("active", ".active&");
    }),
  ],
}
