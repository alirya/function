import GuardType from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import CallbackParameters from "./callback-parameters";
import Callable from "../callable";

/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */

export default function Function<
    Assumption extends Callable
>(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : asserts value is Assumption {

    CallbackParameters(value, GuardType, error);
}
