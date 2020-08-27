import Callable from "../callable";
/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */
export default function Function<Assumption extends Callable>(value: unknown, error?: (value: unknown) => Error): asserts value is Assumption;
