/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@configs/eslint/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
}
