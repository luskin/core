import * as EnumUtils from "../as-enum-or-fail.util"

describe("Enum utils", () => {
  enum TestEnum {
    GoodKey = "goodValue",
  }

  describe(EnumUtils.validateOrThrow.name, () => {
    describe("when input is a member of the enum", () => {
      const goodValue = "goodValue"

      it("does not throw an error", () => {
        const execute = (): void => {
          EnumUtils.validateOrThrow(TestEnum, goodValue)
        }

        expect(execute).not.toThrow()
      })

      it("returns the value as an enum member", () => {
        const enumMember = EnumUtils.validateOrThrow(TestEnum, goodValue)
        expect(enumMember).toStrictEqual(TestEnum.GoodKey)
      })
    })

    describe("when input is not a member of the enum", () => {
      const badValue = "badValue"

      it("throws expected error", () => {
        const execute = (): void => {
          EnumUtils.validateOrThrow(TestEnum, badValue)
        }
        const expectedError = new EnumUtils.InvalidEnumValueError(
          badValue,
          Object.values(TestEnum)
        )

        expect(execute).toThrow(expectedError)
      })
    })
  })
})
