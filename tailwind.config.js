/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tüm dosyalar taranıyor.
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        textColor: 'var(--text-color)',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      backgroundImage: {
        aboutImage: "url('./src/assets/images/svg/Bg.svg')",
      },
    },
  },
  plugins: [],
}

