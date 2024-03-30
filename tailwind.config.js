/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B4EFC",
        light: "#F5F6FC",
      }
    },
  },
  plugins: [],
}

