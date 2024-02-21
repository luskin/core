import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "@nestjs/common",
    "@nestjs/core",
    "@mothership/nest",
    "@core/utils",
  ],
})
