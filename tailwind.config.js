module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // for navigator block & article block bg use
        block: {
          // for header navigator
          100: {
            light: "#f3f3f3",
            DEFAULT: "#f3f3f3",
            dark: "#1d1d1f",
          },
          // for card bg
          200: {
            light: "#fafafa",
            DEFAULT: "#fafafa",
            dark: "#141414",
          },
          // for article bg
          300: {
            light: "#ffffff",
            DEFAULT: "#ffffff",
            dark: "#000000",
          },
        },
        // for blog content text
        content: {
          // for footer text
          100: {
            light: "#86868b",
            DEFAULT: "#86868b",
            dark: "#6e6e73",
          },
          // for article text
          200: {
            light: "#1d1d1f",
            DEFAULT: "#1d1d1f",
            dark: "#f5f5f7",
          },
          // for navigator text
          300: {
            light: "#000000",
            DEFAULT: "#000000",
            dark: "#f5f5f7",
          },
        },
        // for link
        link: {
          light: "#0066cc",
          DEFAULT: "#0066cc",
          dark: "#2998ff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
