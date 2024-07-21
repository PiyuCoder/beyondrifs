/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-purple-1': '#420565',
        'custom-purple-2': '#6A0B90',
        'custom-purple-3': '#811CBB',
        'custom-purple-bg': '#070109',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, #000000 0%, #420565 50%, #000000 100%)',
        'custom-gradient-bpb-v':
          'linear-gradient(180deg, #000000 0%, #420565 50%, #000000 100%)',
        'custom-gradient-tb':
          'linear-gradient(180deg, #000000 50%, #420565 100%, #000000 0%)',
        'custom-gradient-bpb-h':
          'linear-gradient(0deg, #000000 0%, #420565 100%, #000000 0%)',
        'custom-gradient-opa-1':
          'linear-gradient(90deg, #420565 0%, #6A0B90 30%, #811CBB 80%)',
      },
    },
  },
  plugins: [],
};
