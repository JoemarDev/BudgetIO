/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-1': '#050A1D',
        'theme-2': '#0E1A46',
        'theme-3': '#41528B',
        'theme-4': '#77D6D0',
        'theme-5': '#71EEC4',
      },
    },
  },
  plugins: [],
}
