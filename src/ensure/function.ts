import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import GuardFunction from "./callback";
import Callable from "../callable";
import Value from "@dikac/t-value/value";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Function<
    Assumption extends Callable
>(
    {value, error = ThrowableType} : Value<unknown> & {error ?: (value:unknown)=>Error}
) : Assumption {

    GuardFunction(value, {validation:TypeGuard, error})

    return <Assumption>value;
}
