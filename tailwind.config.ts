/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fade: {
          '0%, 20%': { opacity: '0' }, // Start invisible
          '30%, 50%': { opacity: '1' }, // Fade in and stay visible
          '60%, 100%': { opacity: '0.5' }, // Fade out gradually
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        fade: 'fade 6s ease-in-out forwards', // Full cycle is 12s
      },
    },
  },
  plugins: [],
};
