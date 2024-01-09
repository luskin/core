import type { Config } from "tailwindcss"
import { default as UIConfig } from "@core/ui/tailwind.config"

export default {
  ...UIConfig,
  content: ["./src/**/*.{html,ts,tsx}", "../../packages/ui/**/*.{html,ts,tsx}"],
} satisfies Config
