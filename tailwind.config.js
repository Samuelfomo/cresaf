/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './public/**/*.html',
    './public/**/*.vue',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c3461',
        'primary-accent': '#FFED66',
        'primary-accent-rgb': '255, 237, 102',

        secondary: '#45ab34',
        'secondary-accent': '#FFED66',

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'patrick-hand': ['Patrick Hand', 'cursive'],
        accent: ['Merriweather', 'sans-serif'],
        primary: [
        'Montserrat', '-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif',
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ],
        openSans: ['Open Sans','sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        playfair:['Playfair Display', 'serif'],
        inter:['Inter', 'sans-serif'],
      },
      animation: {
        blink: "blink 3s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      backgroundImage: {
        'login': "url('@/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
}
