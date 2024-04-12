/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors'); if you need tailwind color pallette

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: { // Use 'colors' here to apply custom colors
        discordPurple: '#7289da',  // Discord brand similar colors
        discordDark: '#23272A',    
        discordLight: '#99aab5'    
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
