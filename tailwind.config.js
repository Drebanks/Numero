module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
    colors:{
      "primary": "#04004D",
      "greyish": "#666473",
      "lightblue": "#BEABE3",
      "lightpurple": "#2E216E",
      "lightgrey": "#17151E",
      "purple": "#5F31B4",
      "lilac": "#F0EDF2",
      "fade": "#f7f7f8",
      "middle": "#f5f4f8",
      "bottom": "#ece8f6",
      "white": "#FFFFFF",
      "gray": "#FBF7FD",
      "background": "rgba(65, 66, 88, 0.62)";
      
    },
    fontFamily: {
      body: ["TT Commons"],
    },
    extend: {},
  },
  plugins: [],
}