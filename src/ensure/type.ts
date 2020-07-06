import TypeGuard from "../guard/type";
import ThrowableType from "../throwable/type";
import GuardFunction from "./callback";
import Function from "../function";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Type<
    Assumption extends Function
>(
    value : any,
    error : Function<[any], Error> = ThrowableType
) : Assumption {

    GuardFunction(value, TypeGuard, error)

    return value;
}
