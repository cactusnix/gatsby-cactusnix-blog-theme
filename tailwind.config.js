module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        primary: {
          light: "#3490dc",
          DEFAULT: "#3490dc",
          dark: "#f5f5f7",
        },
        secondary: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#f5f5f7",
        },
        info: {
          light: "#1d1d1f",
          DEFAULT: "#1d1d1f",
          dark: "#a1a1a6",
        },
        text: {
          light: "#86868b",
          DEFAULT: "#86868b",
          dark: "#888888",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
