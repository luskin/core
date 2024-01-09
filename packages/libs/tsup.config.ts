import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/auth/index.ts", "src/database/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
})
