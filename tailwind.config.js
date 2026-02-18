/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'siri-rotate': 'siri-rotate 3s linear infinite',
        'siri-rotate-reverse': 'siri-rotate 4s linear infinite reverse',
        'spin-slow': 'spin 5s linear infinite',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        source: ['Source Sans Pro', 'sans-serif'],
        ubuntu: ['Ubuntu Mono', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        'siri-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
