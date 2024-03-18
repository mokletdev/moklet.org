import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        xl: "1332px",
        lg: "820px",
        sm: "420px",
      },
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

        "warning-50": "#FFFDFA",
        "warning-100": "#FFF9EE",
        "warning-200": "#FFF7E1",
        "warning-300": "#FFEAB3",
        "warning-400": "#FFDD82",
        "warning-500": "#FFC62B",
        "warning-600": "#FFAD0D",
        "warning-700": "#FE9B0E",

        "success-50": "#FBFEFC",
        "success-100": "#F2FAF6",
        "success-200": "#E5F5EC",
        "success-300": "#C0E5D1",
        "success-400": "#97D4B4",
        "success-500": "#6BC497",
        "success-600": "#47B881",
        "success-700": "#0C9D61",

        "info-50": "#F8FCFF",
        "info-100": "#F1F8FF",
        "info-200": "#E4F2FF",
        "info-300": "#BDDDFF",
        "info-400": "#93C8FF",
        "info-500": "#4BA1FF",
        "info-600": "#3B82F6",
        "info-700": "#3A70E2",
      },
    },
  },
  plugins: [],
};
export default config;
