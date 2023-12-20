import stylex from "@stylexjs/stylex"
import { ButtonProps } from "./button.props"

export default function Button(props: ButtonProps) {
  return <button {...stylex.props(style.main)}>{props.children}</button>
}

const style = stylex.create({
  main: {
    color: "red",
  },
})
