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
      },
      fontFamily: {
        sani: "Serat Serif",
        neue: "Neue Haas Bold",
        neueL: "Neue Haas Light",
      },
      screens: {
        mod: "1076px",
      },
    },
  },
  plugins: [],
};
