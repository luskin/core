export function capitalizeFirstLetter<T extends string | undefined>(
  str: T
): T extends string ? string : undefined {
  if (!str) {
    return undefined as T extends string ? string : undefined
  }

  return (str.charAt(0).toUpperCase() + str.slice(1)) as T extends string
    ? string
    : undefined
}
