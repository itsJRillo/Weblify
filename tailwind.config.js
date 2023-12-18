/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "dark-800": "#08080a",
      "dark-500": "#212125",
      "secondary": "#cfd8d5",
      "red": "#FF0000"
    },
    extend: {
    },
  },
  plugins: [],
}
