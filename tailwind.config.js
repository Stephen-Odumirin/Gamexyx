
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#7e22ce',
          600: '#7e22ce',
          700: '#6b21a8'
        },
        accent: {
          DEFAULT: '#f59e0b'
        }
      },
      backgroundImage: {
        topo: "url('https://i.imgur.com/8Km9tLL.png')" /* placeholder topographic pattern */
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
};
