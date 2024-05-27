/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      height: {
        0.125: "0.5px",
        0.25: "1px",
        0.5: "2px",
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#1A1A1A",
          200: "#333",
          300: "#4D4D4D",
          400: "#666",
          500: "#1E232C",
          600: "#161B22",
          700: "#0D0F11",
          800: "#08090A",
          900: "#040505",
        },
        gray: {
          DEFAULT: "#8F9BB3",
          100: "#F4F6F9",
          200: "#E8ECF4",
          300: "#F7F8F9",
          400: "#B8C4D6",
          500: "#6A707C",
          600: "#8391A1",
          700: "#4B5F85",
          800: "#2A3F6E",
          900: "#0D1F57",
        },
        red: {
          DEFAULT: "#F54135",
          50: "#ffe6e6",
          100: "#ffbdbd",
          200: "#ff8f8f",
          300: "#ff6060",
          400: "#ff3232",
          500: "#F54135",
          600: "#cc1f1f",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },
      },
    },
  },
  plugins: [],
};
