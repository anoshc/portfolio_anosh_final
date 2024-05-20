/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffdf5",
        text: "#311d40",
        textLight: "#fcfbf2",
        purple: {
          darker: "#371c4f",
          default: "#6b5182",
          lighter: "#dec4f5",
        },
        grey: {
          darker: "#37383b",
          default: "#585a5c",
          lighter: "#9c9c9c",
        },
      },
      fontFamily: {
        dancingscript: ["var(--font-dancingscript)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
