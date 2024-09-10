/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
        typewriter: 'typing 3s steps(30, end), blink .75s step-end infinite',
        wiggle: 'wiggle .5s ease-in-out 5',
      },
    },
    fontFamily: {
      'body': ['Lato', 'serif']
    }
  },
  plugins: [],
}

