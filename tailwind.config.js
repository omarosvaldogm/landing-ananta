/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#344570',
        'secondary': '#73963C',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

