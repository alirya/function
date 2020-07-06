import FunctionType from "../guard/type";
import ThrowableType from "../throwable/type";
import Callback from "./callback";
import Functions from "../functions";

/**
 * Throw exception from {@param errorFactory} if given {@param value} is no callable type
 */

export default function Type<
    Assumption extends Functions
>(
    value : any,
    errorFactory : Functions<[any], Error> = ThrowableType
) : asserts value is Assumption {

    Callback(value, FunctionType, errorFactory);

}
