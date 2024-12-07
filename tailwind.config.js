/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'sans-serif'],
      },
      fontSize: {
        'lg': '24px',
      },
    },
  },
  plugins: [],
};
