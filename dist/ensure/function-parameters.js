import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import Guard from "./callback";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function FunctionParameters(value, error = ThrowableType) {
    Guard.Parameters(value, TypeGuard, error);
    return value;
}
//# sourceMappingURL=function-parameters.js.map