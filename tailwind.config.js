/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#293264",
          200: "#4D5B9E",
    },
    secondary:{
      100: "#F5F7FB",
      200: '#D6DBF5',
    },
    success:{
      100: "#94D7A2",
    },
    danger:{
      100: "#F8BCBC"
    }
  },
    },
  },
  plugins: [],
}
