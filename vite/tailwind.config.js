/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slimeGreen: {
          50: "#f2fef6",
          100: "#e5fcec",
          200: "#bff7d0",
          300: "#99f2b4",
          400: "#4de87c",
          500: "#00dd44", // 기본 슬라임 색상
          600: "#00c43e",
          700: "#00a036",
          800: "#007d2e",
          900: "#006627",
        },
      },
      fontFamily: {
        sans: ['"Godo", sans-serif'],
      },
    },
  },
  plugins: [],
};
