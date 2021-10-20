import Callable from "../callable";
import Value from "@dikac/t-value/value";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Function<Assumption extends Callable>({ value, error }: Value<unknown> & {
    error?: (value: unknown) => Error;
}): Assumption;
