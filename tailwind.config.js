/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bodyLight: '#FFFFFF',
        bodyDark: '#0E1527',
        primaryDark: '#38BDF8',
        primaryLight: '#4DBF7B',
        textLightGray: '#E2E8F0',
        textDarkGray: '#94A3B8',
        textDarkBlue: '#0F172A',
        textLightBlue: '#334155',
        hoverColor: '#0284C7',
      },
    },
  },
  plugins: [require("daisyui")],
}
