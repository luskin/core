/**
 * Error thrown when unsuccessfully trying to assert that a value is a member of an enum.
 */
export class InvalidEnumValueError extends Error {
  public readonly value: string | number

  public readonly expectedValues: Array<string | number>

  public constructor(
    value: string | number,
    expectedValues: Array<string | number>
  ) {
    super(
      `invalid enum value: ${value} is not a member of ${expectedValues.join(
        ", "
      )}`
    )
    this.value = value
    this.expectedValues = expectedValues
  }
}

/**
 * Type constrains a string to an enum value if valid; otherwise, throws an error.
 */
export const validateOrThrow = <T extends Record<string, string | number>>(
  type: T,
  str: string
): T[keyof T] => {
  if (!Object.values(type).includes(str)) {
    throw new InvalidEnumValueError(str, Object.values(type))
  }
  return str as unknown as T[keyof T]
}
