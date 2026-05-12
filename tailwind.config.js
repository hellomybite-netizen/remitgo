/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        'ink-light': '#1a1a1a',
        'ink-muted': '#2a2a2a',
        chalk: '#f5f0e8',
        'chalk-dark': '#e8e0d0',
        lemon: '#ffe234',
        coral: '#ff3b30',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
