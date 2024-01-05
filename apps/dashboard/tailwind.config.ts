import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{html,ts,tsx}", "../../packages/ui/**/*.{html,ts,tsx}"],
  darkMode: "class",
  theme: {},
  plugins: [],
} satisfies Config
