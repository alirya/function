import Assert from "../assert/callback";
/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 * extra argument for both {@param argument} & {@param error}
 */
export function CallbackParameter(value, validation, error, ...argument) {
    Assert.Parameter(value, validation, error, ...argument);
    return value;
}
/**
 * object destructure version
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 */
export function CallbackObject({ value, validation, error, argument }) {
    return CallbackParameter(value, validation, error, ...argument);
}
var Callback;
(function (Callback) {
    Callback.Parameter = CallbackParameter;
    Callback.Object = CallbackObject;
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map