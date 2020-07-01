import Functions from "../functions";
/**
 * Throw exception from {@param errorFactory} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */
export default function Assertion<T>(value: any, validation: Functions<[any], T>, errorFactory: Functions<[any], Error>): asserts value is T;
