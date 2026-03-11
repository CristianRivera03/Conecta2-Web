/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        main: 'var(--bg-main)',
        card: 'var(--bg-card)',
        input: 'var(--bg-input)',
        brand: 'var(--brand)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        'border-main': 'var(--border-main)',
      }
    },
  },
  plugins: [],
}