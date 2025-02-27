module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#111313",
        offBlue: "#01030c",
        offWhite: "#F2F2F2",
        lightYellow: "#FCF894",
        comp: "#B9B9B9",
        yell: "#FCDB8F",
        dcomp: "#606362",
        mainBg: "var(--mainBg)",
        mainText: "var(--mainText)",
        maroon: "#C92D1F",
        strand: "#EAE1D3",
        amarillo: "#2f25a7",
        azul: "#f6ec7b",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        sani: "Serat Serif",
        neue: "Neue Haas Bold",
        neueL: "Neue Haas Light",
        york: "New York",
      },
      screens: {
        mod: "1076px",
        eight: "800px",
      },
      keyframes: {
        sideToSide: {
          "0%, 100%": { transform: "translateX(-3px)" },
          "50%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        sideBounce: "sideToSide 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
