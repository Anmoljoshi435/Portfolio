export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        panel: '#111417',
        panelStrong: '#171c20',
        accent: '#80e9ff',
        ink: '#f3f4f6',
        muted: '#a7adb8',
        line: 'rgba(255,255,255,0.09)',
      },
      boxShadow: {
        subtle: '0 10px 40px rgba(16, 24, 32, 0.38)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
