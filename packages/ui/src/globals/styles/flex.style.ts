import { stylex } from "@stylexjs/stylex"

export const FLEX = stylex.create({
  base: {
    display: "flex",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
})
