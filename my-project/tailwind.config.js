/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brightBackground: "#dedcd7",
        lightPurple: "#9cadce",
        lightText: "#bfbdbd",
      },
    },
  },
  plugins: [],
}

