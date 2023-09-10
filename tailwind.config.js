/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        'brown': '#854d27',
        'red' : '#DE1732',
        'lightred':'#CE3247'
      },
    },
  },
  plugins: [],
};
