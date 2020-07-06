import Functions from "../functions";
import TypeGuard from "../guard/type";
import ThrowableType from "../throwable/type";
import GuardFunction from "./callback";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Type<
    Assumption extends Functions
>(
    value : any,
    error : Functions<[any], Error> = ThrowableType
) : Assumption {

    GuardFunction(value, TypeGuard, error)

    return value;
}
