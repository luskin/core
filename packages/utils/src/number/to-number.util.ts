import { toNumber as _toNumber, round } from "lodash"

export const toNumber = (
  value: string | number | undefined | null,
  opts?: {
    precision?: number
  }
): number => {
  if (value === undefined || value === null) {
    throw new Error("Cannot convert undefined or null to number")
  }

  return opts?.precision
    ? round(_toNumber(value), opts.precision)
    : _toNumber(value)
}
