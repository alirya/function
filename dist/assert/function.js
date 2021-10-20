import GuardType from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import Callback from "./callback";
/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */
export default function Function(value, error = ThrowableType) {
    Callback(value, { validation: GuardType, error });
}
//# sourceMappingURL=function.js.map