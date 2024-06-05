/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#67264E",
        },
        secondary: {
          500: "#110B3B",
        }
      }
    },
  },
  plugins: [],
};
