/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Enable JIT mode explicitly
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: '320px',
      md: '480px',
      lg: '768px',
      xl: '1080px',
     }
  },
  plugins: [],
};
