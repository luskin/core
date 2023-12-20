export type Size = "xsmall" | "small" | "base" | "large" | "xlarge"
export type SizeProp = Size | Size[]
export interface SizeProps<S extends Size = Size> {
  size?: S
}
