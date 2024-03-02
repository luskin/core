/**
 * Error thrown when unsuccessfully trying to assert that a value is a member of an enum.
 */
export declare class InvalidEnumValueError extends Error {
    readonly value: string | number;
    readonly expectedValues: Array<string | number>;
    constructor(value: string | number, expectedValues: Array<string | number>);
}
/**
 * Type constrains a string to an enum value if valid; otherwise, throws an error.
 */
export declare const validateOrThrow: <T extends Record<string, string | number>>(type: T, str: string) => T[keyof T];
//# sourceMappingURL=as-enum-or-fail.util.d.ts.map