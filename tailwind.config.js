module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // make sure your files are being scanned
  theme: {
    extend: {
      keyframes: {
        hint: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        hint: 'hint 1.5s infinite',
      },
      screens: {
        // Height-based custom breakpoints
        'h-sm': { 'raw': '(min-height: 640px)' },   // small height
        'h-md': { 'raw': '(min-height: 768px)' },   // medium height
        'h-lg': { 'raw': '(min-height: 1024px)' },  // large height
        'h-xl': { 'raw': '(min-height: 1280px)' },  // extra large height
        'h-2xl': { 'raw': '(min-height: 1536px)' }, // 2xl height
      },
    },
  },
  plugins: [],
}