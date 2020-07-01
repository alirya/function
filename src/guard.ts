import Functions from "./functions";
import Type from "./assert/type";
import ThrowableType from "./throwable/type";
import GuardFunction from "./any/guard";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Guard<
    Assumption extends Functions
>(
    value : any,
    error : Functions<[any], Error> = ThrowableType
) : Assumption {

    GuardFunction(value, Type, error)

    return value;
}
