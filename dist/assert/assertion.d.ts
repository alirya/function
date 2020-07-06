import Functions from "../functions";
/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */
export default function Assertion<T>(value: any, validation: Functions<[any], T>, error: Functions<[any], Error>): asserts value is T;
