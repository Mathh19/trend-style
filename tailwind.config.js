/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      keyframes: {
        dropdown: {
          '0%': { opacity: 0, transform: 'translateY(-0.5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0.5rem)' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-1px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(1px)' }
        },
        'fade-in-slowly': {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' }
        }
      },
      animation: {
        dropdown: 'dropdown 400ms ease-in-out',
        shake: 'shake 0.4s',
        'fade-in-slowly': 'fade-in-slowly 0.3s ease-in-out'
      }
    }
  },
  plugins: []
};
