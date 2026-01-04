import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        text: '#1A1A1A',
        accent: '#D43F33',
      },
      fontFamily: {
        header: ['Syne', 'sans-serif'],
        body: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        '128': '8rem',    // 128px for large hero spacing
      },
      gap: {
        'gutter': '2rem', // Generous gutters
      },
    },
  },
  plugins: [],
} satisfies Config

