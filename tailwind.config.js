/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom theme extensions here (colors, fonts, etc.)
      // Example:
       colors: {
         'brand-primary': '0072b2',//'#3498db',
      //   'brand-accent': '#e74c3c',
       },
    },
  },
  plugins: [
     require('@tailwindcss/typography'), // If you want to use prose classes
     require('@tailwindcss/aspect-ratio'), // For responsive video embeds
  ],
}
