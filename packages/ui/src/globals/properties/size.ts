export type Size = "xsmall" | "small" | "base" | "large" | "xlarge"
export interface SizeProps<S extends Size = Size> {
  size?: S
}
