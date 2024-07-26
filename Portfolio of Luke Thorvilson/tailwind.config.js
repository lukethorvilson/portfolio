/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      links: "Exo 2, Roboto Mono",
      logo: "Josefin Sans, Roboto Mono",
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
