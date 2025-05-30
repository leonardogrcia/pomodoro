/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- garante que o Tailwind veja seus arquivos React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
