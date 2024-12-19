module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // Rich Blue
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald
          dark: "#059669",
        },
        background: {
          DEFAULT: "#0f172a", // Dark Blue
          light: "#1e293b",
        },
        text: {
          DEFAULT: "#f1f5f9", // Light Gray
          dark: "#94a3b8",
        },
        accent: "#8b5cf6", // Purple
      },
    },
  },
  plugins: [],
};
