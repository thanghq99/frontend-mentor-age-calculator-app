/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'd-element': 'hsl(209, 23%, 22%)',
        'd-text': 'hsl(0, 0%, 100%)',
        'd-bg': 'hsl(207, 26%, 17%)',
        'd-input': 'hsl(209, 23%, 22%)',
        'l-element': 'hsl(0, 0%, 100%)',
        'l-text': 'hsl(200, 15%, 8%)',
        'l-bg': 'hsl(0, 0%, 98%)',
        'l-input': 'hsl(0, 0%, 52%)',
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: 0,
            scale: '70%',
            transform: 'rotate(180deg)',
          },
          '100%': {
            opacity: 100,
            scale: '100%',
            transform: 'rotate(0deg)',
          },
        },
      },
      animation: {
        fade: 'fade 350ms ease-out',
      },
    },
  },
  plugins: [],
};
