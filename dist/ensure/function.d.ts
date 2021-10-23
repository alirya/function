import Callable from "../callable";
import Value from "@dikac/t-value/value";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
declare function Function<Assumption extends Callable>(value: unknown, error?: (value: unknown) => Error): Assumption;
declare namespace Function {
    var object: ({ value, error }: Value<unknown> & {
        error?: ((value: unknown) => Error) | undefined;
    }) => Callable;
}
export default Function;
