/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagramBlue: '#3897f0',
        instagramGray: '#fafafa',
      },
    },
  },
  plugins: [],
};
