/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        foreground: "#FFFFFF",
        purple: { DEFAULT: "#7C3AED", 400: "#A78BFA", 900: "#4C1D95", glow: "#8B5CF6" },
        emerald: { DEFAULT: "#10B981" },
        gold: { DEFAULT: "#FFD700" },
        card: "#1A1A1A"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
}
