import type { Config } from "tailwindcss"
import { default as UIConfig } from "@repo/ui/tailwind.config"

console.log("The UIConfig is", UIConfig)

export default {
  ...UIConfig,
  content: ["./src/**/*.{html,ts,tsx}", "../../packages/ui/**/*.{html,ts,tsx}"],
} satisfies Config
