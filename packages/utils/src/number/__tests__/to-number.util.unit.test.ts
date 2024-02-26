import { toNumber } from "../to-number.util"

describe(toNumber.name, () => {
  it("should convert string to number", () => {
    const result = toNumber("123")
    expect(result).toBe(123)
  })

  it("should convert number to number", () => {
    const result = toNumber(123)
    expect(result).toBe(123)
  })

  it("should round to the specified precision", () => {
    const result = toNumber("123.456", { precision: 2 })
    expect(result).toBe(123.46)
  })

  it("should throw an error if value is undefined", () => {
    expect(() => toNumber(undefined)).toThrow(
      "Cannot convert undefined or null to number"
    )
  })

  it("should throw an error if value is null", () => {
    expect(() => toNumber(null)).toThrow(
      "Cannot convert undefined or null to number"
    )
  })
})
