/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      links: "Exo 2, Roboto Mono",
      logo: "Josefin Sans, Roboto Mono",
    },
    colors: {
      "bg-darkmode": "#676767",
      "bg-brightmode": "#ffffff",
      "text-darkmode": "#F5F5F5",
      "text-brightmode": "#1f1f1f",
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
