/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@configs/eslint/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
  plugins: ["@stylexjs"],
  rules: {
    "@stylexjs/valid-styles": ["error", { ...options }],
  },
}
