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
        sans: ["'Open Sans'", "Arial", "Helvetica", "sans-serif"],
        "sans-condensed": ["'Encode Sans Condensed'", "Arial", "Helvetica", "sans-serif"],
      },
      spacing: {
        headingbottomxs: "0.438rem",
        headingbottom: "0.875rem",
        edge: "30px",
        edge2x: "60px",
        edge3x: "90px",
      },
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#using-css-variables
        tuna: "rgb(var(--color-tuna))",
        woodsmoke: "rgb(var(--color-woodsmoke))",
        violetpink: "rgb(var(--color-violetpink))",
        purple: "rgb(var(--color-purple))",
        barneypurple: "rgb(var(--color-barneypurple))",
        buff: "rgb(var(--color-buff))",
        springsun: "rgb(var(--color-springsun))",
      },
      fontSize: {
        h2: "2.5rem",
        "h2-desktop": "3.25rem",
        h3: "2.75rem",
        h4: "2.25rem",
        btn: "1.125rem",
      },
    },
  },
  plugins: [],
};
