/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%': { opacity: 0, transform: 'translateY(-0.5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0.5rem)' }
        }
      },
      animation: {
        dropdown: 'dropdown 400ms ease-in-out'
      }
    }
  },
  plugins: []
};
