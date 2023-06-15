/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: '#fd592a',
        baseLight: '#fd8e6f'
      },
      fontFamily: {
        'orbit': ['Orbit', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

