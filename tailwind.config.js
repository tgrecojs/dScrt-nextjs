module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './source/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Cabin",sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
