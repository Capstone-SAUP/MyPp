/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        blue: "#2CBC39",
        red: "#DC4492",
        darkerred: "#800000",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-red": "#0e0000",
        "dark-grey": "#5A5A5A",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45a4 45.05%, #FFBA00 78.07%",
          "gradient-rainbow-2":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FBD0C 117.73%",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(deep-red)/,
    },
  ],
}

