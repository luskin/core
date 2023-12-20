import { ButtonProps } from "./button.props"

export default function Button(props: ButtonProps) {
  return <button>{props.children}</button>
}
