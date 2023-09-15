/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        slidein: {
          '0%': { marginLeft: '2.5%', width: '150%', opacity: 0},
          '100%': { marginLeft: '0%', width: '100%', opacity: 1},
        },
      },
      animation: {
        slideinExtraSlow: 'slidein 1.75s', 
        slideinSlow: 'slidein 1.5s', 
        slideinRegular: 'slidein 1.25s',
        slideinFast : 'slidein 1s',
      },
    },
    colors: {
      'gray-dark': '#0b0c10',
      'gray': '#1f2833',
      'gray-light': '#c5c6c7',
      'blue': '#66fcf1',
      'green': '#45a29e',
      'white': '#FFFFFF'
    },
  },
  plugins: [],
}

