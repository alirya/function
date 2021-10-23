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
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : Assumption {

    GuardFunction(value, TypeGuard, error)
    return <Assumption>value;
}

/**
 * object destructure version
 *
 * @param value
 * @param error
 */
Function.object = function ({value, error} : Value<unknown> & {error ?: (value:unknown)=>Error}) {
    return Function(value, error)
}
