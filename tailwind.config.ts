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
        black: "#121212",
        white: "#fff",

        "neutral-50": "#FAFAFA",
        "neutral-100": "#F5F5F5",
        "neutral-200": "#EEEEEE",
        "neutral-300": "#E1E1E1",
        "neutral-400": "#CACACA",
        "neutral-500": "#8E8E8E",
        "neutral-600": "#4B4B4B",
        "neutral-700": "#1F1F1F",

        "primary-50": "#FFF0F0",
        "primary-100": "#FFC2C2",
        "primary-200": "#FF9494",
        "primary-300": "#FF6767",
        "primary-400": "#E04E4E",
        "primary-500": "#B73636",
        "primary-600": "#8E2222",
        "primary-700": "#661212",
      },
    },
  },
  plugins: [],
};
export default config;
