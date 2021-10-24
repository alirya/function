import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import Guard from "./callback";
import Callable from "../callable";
import Value from "@dikac/t-value/value";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export function FunctionParameter<
    Assumption extends Callable
>(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : Assumption {

    Guard.Parameter(value, TypeGuard, error)
    return <Assumption>value;
}

/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export function FunctionObject ({value, error} : Value<unknown> & {error ?: (value:unknown)=>Error}) {
    return FunctionParameter(value, error)
}

namespace Function {

    export const Parameter = FunctionParameter;
    export const Object = FunctionObject;
}

export default Function;
