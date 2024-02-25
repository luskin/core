import { ensure } from "../ensure.util"

describe(ensure.name, () => {
  it("should return an array when given an array", () => {
    expect(ensure(["test"])).toEqual(["test"])
  })

  it("should return an array when given a non-array", () => {
    expect(ensure(1)).toEqual([1])
  })
})
