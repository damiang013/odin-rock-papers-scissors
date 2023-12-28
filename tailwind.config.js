/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('img/background.jpg')"
      },
      fontFamily: {
        'coda': ['Coda'],
        'open-sans': ['Open Sans'] 
      }
    },
  },
  plugins: [],
}

