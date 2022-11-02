/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentcolor',
        white: '#ffffff',
        brandColor: '#00aeef',
       
  
      },
      fontFamily: {
        primaryHeader: "'Raleway', sans-serif",
        secondaryHeader: "'Roboto Slab', serif",
        bodyText: "'Merriweather', serif",
     
      }
    },
  },
  plugins: [],
}
