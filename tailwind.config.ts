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
        gold: {
          primary: '#FFD700',
          bright: '#FFED4E',
          dark: '#B8860B',
        },
        purple: {
          royal: '#8B5CF6',
          deep: '#6D28D9',
          light: '#A78BFA',
        },
        black: {
          pure: '#000000',
          rich: '#0A0A0A',
          velvet: '#1A0A2E',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(139, 92, 246)' },
          '100%': { boxShadow: '0 0 20px rgb(139, 92, 246), 0 0 30px rgb(139, 92, 246)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
