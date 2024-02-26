import { joinDefinedBySpace } from "../join-defined-by-space.util"

describe("joinDefinedBySpace", () => {
  it("should join strings with spaces", () => {
    const result = joinDefinedBySpace("class1", "class2", "class3")
    expect(result).toBe("class1 class2 class3")
  })

  it("should filter out falsy values", () => {
    const result = joinDefinedBySpace(
      "class1",
      null,
      "class2",
      undefined,
      "class3",
      ""
    )
    expect(result).toBe("class1 class2 class3")
  })

  it("should return an empty string if no arguments are provided", () => {
    const result = joinDefinedBySpace()
    expect(result).toBe("")
  })
})
