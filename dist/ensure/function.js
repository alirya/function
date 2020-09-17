import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import GuardFunction from "./callback";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Function(value, error = ThrowableType) {
    GuardFunction(value, TypeGuard, error);
    return value;
}
//# sourceMappingURL=function.js.map