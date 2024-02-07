import { isString } from "../is-string.util"

describe(isString.name, () => {
  it("should return true for string", () => {
    expect(isString("")).toBe(true)
    expect(isString("string")).toBe(true)
  })

  it("should return false for non-string", () => {
    expect(isString(0)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })
})
