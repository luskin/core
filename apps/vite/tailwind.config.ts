import type { Config } from "tailwindcss"
import { default as UIConfig } from "@configs/tailwind/tailwind.config"

export default {
  ...UIConfig,
  content: ["./src/**/*.{html,ts,tsx}", "../../packages/ui/**/*.{html,ts,tsx}"],
} satisfies Config
