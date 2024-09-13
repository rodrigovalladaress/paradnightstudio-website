/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Steelfish rg'", "Arial", "Helvetica", "sans-serif"],
      },
      spacing: {
        edge: "30px",
        edge2x: "60px",
      },
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#using-css-variables
        tuna: "rgb(var(--color-tuna))",
        woodsmoke: "rgb(var(--color-woodsmoke))",
      },
    },
  },
  plugins: [],
};
