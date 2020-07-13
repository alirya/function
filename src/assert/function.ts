import GuardType from "../guard/function";
import ThrowableType from "../assert/throwable/function";
import Callback from "./callback";
import FunctionType from "../function";

/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */

export default function Function<
    Assumption extends FunctionType
>(
    value : any,
    error : FunctionType<[any], Error> = ThrowableType
) : asserts value is Assumption {

    Callback(value, GuardType, error);

}
