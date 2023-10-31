/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      '3xl': '1440px',
    },
    extend: {
      colors: {
        'very-dark-blue': '#090B1A',
        'dark-desaturated-blue': '#1B1938',
        'soft-violet': '#AA5CDB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
