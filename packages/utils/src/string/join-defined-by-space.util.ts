/**
 * Joins an array of strings into a single string, separated by spaces.
 * It filters out any falsy values before joining.
 *
 * @param {Array<string>} classes - The array of strings to be joined.
 * @returns {string} The joined string.
 */
export function joinDefinedBySpace(
  ...classes: Array<string | null | undefined>
): string {
  return classes.filter(Boolean).join(" ")
}
