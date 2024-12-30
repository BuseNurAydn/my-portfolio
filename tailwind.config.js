/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tüm dosyalar taranıyor.
  ],
  theme: {
    extend: {
      colors: {
          'brand-color':'#0d9488',
          'black-color':'#0c0a09',
          'second-color':'#134e4a',
          'gray-color':'#4b5563',
          'blue-color':'#1e3a8a',
          'cyan-color':'#155e75',
          'graytwo-color':'#d1d5db',
          'darkCyan-color': '#083344',
          'zinc200-color': '#e4e4e7',
          'zinc-color': '#f4f4f5',
          'sky-color': '#075985',
          'slate-color': '#e2e8f0',     
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

