/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'plant-bg': '#FCF7F2',
        'plant-surface': '#ECF5EC',
        'plant-forest': '#346E3C',
        'plant-bright': '#39BB4B',
        'plant-dark': '#1F1F1F',
        'plant-footer': '#363D37',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        tomorrow: ['Tomorrow', 'system-ui', 'sans-serif'],
        ubuntu: ['Ubuntu', 'system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}