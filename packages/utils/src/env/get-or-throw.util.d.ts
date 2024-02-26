/**
 * Retrieves the value of a specific environment variable. Throws an error if the environment variable is not set.
 *
 * @param {string} key - The name of the environment variable to retrieve.
 * @returns {string} The value of the environment variable.
 * @throws {Error} If the environment variable is not set.
 */
export declare function getOrThrow(key: string): string;
/**
 * Checks if a specific environment variable is set and throws an error if it is.
 * If `eqValues` is provided, the function will throw an error only if the environment variable is set to one of the `eqValues`.
 *
 * @param {string} key - The name of the environment variable to check.
 * @param {string | Array<string>} [eqValues] - The values to check against. If not provided, the function will throw an error if the environment variable is set to any value.
 * @throws {Error} If the environment variable is set (to one of the `eqValues` if provided).
 */
export declare function throwIfSet(key: string, eqValues?: string | Array<string>): void;
//# sourceMappingURL=get-or-throw.util.d.ts.map