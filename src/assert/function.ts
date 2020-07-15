import GuardType from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import Parameter from "./parameter";
import FunctionType from "../function";

/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */

export default function Function<
    Assumption extends FunctionType
>(
    value : unknown,
    error : FunctionType<[unknown], Error> = ThrowableType
) : asserts value is Assumption {

    Parameter(value, GuardType, error);

}
