import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        'color-primary': 'rgb(var(--color-primary) / <alpha-value>)'
      },
      backgroundColor: {
        'color-primary': 'rgb(var(--color-primary) / <alpha-value>)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'default': '3px 3px 10px 0px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
export default config
