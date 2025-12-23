/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#FBFBFB",
        third: "#F2F7FF",
      },
      animation: {
        blink: "blink 1s infinite",
        gradient: "gradient 5s ease infinite",
      },
    },
  },
  plugins: [],
};
