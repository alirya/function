import Guard from "../guard/guard";
import Function from "../function";
/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */
export default function Callback<T>(value: any, validation: Guard<any, T>, error: Function<[any], Error>): asserts value is T;
