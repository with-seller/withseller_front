/** @type {import('tailwindcss').Config} */
import { screens as _screens } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  darkMode: 'media',
  theme: {
    screens: {
      xs: '375px',
      ..._screens,
    },
    extend: {},
  },
  plugins: [],
}

