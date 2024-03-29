import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        navy: "#252C59",
        snow: "#F5F5F5",
        green: "#9BC52C",
        darkGreen: "#6E9508",
        white: "#FFFFFF",
        olive: "#577507",
        opGreen: "#d8e1ce",
        iconGreen: "#37761d"
      },
      fontFamily: {
        // Add Montserrat to the sans-serif font stack
        sans: ["Montserrat", "sans-serif"], 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
