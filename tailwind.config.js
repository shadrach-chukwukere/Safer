export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(-10px)" },
          "75%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      translate: {
        100: "25rem",
        120: "30rem",
        128: "32rem",
      },
      fontFamily: {
        Righteous: ["Righteous", "ui-sans-serif", "system-ui"],
        Inter: ["Inter", "system-ui"],
      },
    },
  },
  plugins: [],
};
