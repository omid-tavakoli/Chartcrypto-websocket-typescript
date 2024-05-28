/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        changeBackground: 'changeBackground 2s ease-in-out ',
      },
      keyframes: {
        changeBackground: {
          '0%' : {  background : '#fff'},
          '100%': { background : '#ffd2df' },
        }
      }
    },
  },
  plugins: [],
}

