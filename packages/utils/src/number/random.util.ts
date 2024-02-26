interface Options {
  min: number
  max: number
  decimalPlaces?: number
}

export function random(options: Options): number {
  const rand = Math.random() * (options.max - options.min) + options.min
  const power = Math.pow(10, options.decimalPlaces || 0)
  return Math.round(rand * power) / power
}
