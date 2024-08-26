/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '16/7': '16 / 7',
        '16/5': '16 / 5'
      },
    },
  },
  plugins: [],
}

