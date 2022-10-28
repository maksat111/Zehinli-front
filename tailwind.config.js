/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu'",
        poppins: "'Poppins'",
        lato: "'Lato'"
      },
      boxShadow: {
        'new': '2px 2px 37px rgba(73, 131, 194, 0.12)',
        'new2': '2px 2px 37px rgba(73, 131, 194, 0.12)',
        'icons': '3px 3px 36px rgba(85, 138, 196, 0.07)'
      },
      colors: {
        'new-color': '#200E32',
        'customGrey': '#80899A'
      },
      spacing: {
        '1vh': '1vh',
        '35vw': '35vw',
        '44vw': '44vw',
        '55vw': '55vw',
        '90vh': '85vh'

      }
    },
  },
  plugins: [],
}
