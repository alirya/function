import IsFunction from "is-function"
import FunctionType from "../function";

/**
 * check if {@param value} type is function
 */
export default function Function<
    Assumption extends FunctionType
>(
    value : any
) : value is Assumption {

    return IsFunction(value);
}
