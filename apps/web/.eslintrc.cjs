/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@configs/eslint/vite.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
}
