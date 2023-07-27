/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};
