import FunctionType from "../function";
/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */
export default function Function<Assumption extends FunctionType>(value: any, error?: FunctionType<[any], Error>): asserts value is Assumption;