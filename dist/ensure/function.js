import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import Guard from "./callback";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export function FunctionParameter(value, error = ThrowableType) {
    Guard.Parameter(value, TypeGuard, error);
    return value;
}
/**
 * object destructure version
 *
 * @param value
 * @param error
 */
export function FunctionObject({ value, error }) {
    return FunctionParameter(value, error);
}
var Function;
(function (Function) {
    Function.Parameter = FunctionParameter;
    Function.Object = FunctionObject;
})(Function || (Function = {}));
export default Function;
//# sourceMappingURL=function.js.map