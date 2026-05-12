/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Brand primaries from logo ── */
        brand:   '#1a47d6',   /* royal blue — main brand */
        'brand-dark': '#0f2fa8', /* deeper blue for hover */
        'brand-light': '#2d5ef0', /* lighter blue */
        sky:     '#7ec8e3',   /* light blue — "go!" accent */
        'sky-dark': '#5ab5d4',
        'sky-light': '#aaddf0',

        /* ── Neutral palette ── */
        ink:        '#0d1117',   /* near-black background */
        'ink-light': '#161d27',
        'ink-muted': '#222d3a',
        chalk:      '#f0f4ff',   /* off-white with blue tint */
        'chalk-dark': '#dde5f7',

        /* ── Semantic ── */
        success: '#22c55e',
        coral:   '#ff4444',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
