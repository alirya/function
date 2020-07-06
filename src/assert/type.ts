import GuardType from "../guard/type";
import ThrowableType from "../throwable/type";
import Callback from "./callback";
import Function from "../function";

/**
 * Throw exception from {@param errorFactory} if given {@param value} is no callable type
 */

export default function Type<
    Assumption extends Function
>(
    value : any,
    errorFactory : Function<[any], Error> = ThrowableType
) : asserts value is Assumption {

    Callback(value, GuardType, errorFactory);

}
