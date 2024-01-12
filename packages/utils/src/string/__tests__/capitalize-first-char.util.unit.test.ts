import { capitalizeFirstLetter } from "../capitalize-first-char.util"

describe(capitalizeFirstLetter.name, () => {
  it("should capitalize the first character of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello")
    expect(capitalizeFirstLetter("world")).toBe("World")
  })

  it("should leave strings that start with a capital letter unchanged", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello")
    expect(capitalizeFirstLetter("World")).toBe("World")
  })

  it("should handle single-character strings", () => {
    expect(capitalizeFirstLetter("h")).toBe("H")
    expect(capitalizeFirstLetter("W")).toBe("W")
  })

  it("should return undefined for undefined input", () => {
    expect(capitalizeFirstLetter(undefined)).toBeUndefined()
  })

  it("should return string or undefined based on conditional input", () => {
    const result = capitalizeFirstLetter(
      Date.now() > 100000 ? "test" : undefined
    )
    expect(typeof result === "string" || result === undefined).toBeTruthy()
  })
})
