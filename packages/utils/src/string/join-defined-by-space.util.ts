export function joinDefinedBySpace(...classes: Array<string>): string {
  return classes.filter(Boolean).join(" ")
}
