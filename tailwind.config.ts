import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-primary": "#FFD700",
        "gold-bright": "#FFED4E",
        "gold-dark": "#B8860B",
        "purple-royal": "#8B5CF6",
        "purple-deep": "#6D28D9",
        "purple-light": "#A78BFA",
        "black-pure": "#000000",
        "black-rich": "#0A0A0A",
        "black-velvet": "#1A0A2E",
      },
    },
  },
  plugins: [],
};
export default config;
