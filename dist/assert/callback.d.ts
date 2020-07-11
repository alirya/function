import Function from "../function";
/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */
export default function Callback<Asserted extends Argument, Argument>(value: Argument, validation: Function<[Argument], boolean>, error: Function<[Argument], Error>): asserts value is Asserted;
