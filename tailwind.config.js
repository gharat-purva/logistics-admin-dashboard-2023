/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'turbo-blue': '#0140ef',
      'orange':'#f27741',
      'yellow':'#f0b400',
      'white':'#fff',
      'gray': '#c4c4c4',
      'dark-gray': '#babbbf',
      'black': '#000',
      'light-gray':'#fafafa'

    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        sans: ['Ubuntu','sans'],
      },
      spacing: {
        'full': '100%', 
        '140': '44rem'
      },
    },
  },
  plugins: [],
}
