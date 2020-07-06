import Functions from "../functions";
import Guard from "../guard/guard";

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function Callback<T>(
    value : any,
    validation : Guard<any, T>,
    error : Functions<[any], Error>,
) : asserts value is T
{
    if(!validation(value)) {

        throw error(value);
    }
}
