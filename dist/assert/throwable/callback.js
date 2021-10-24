export function CallbackParameter(argument, message, error = (string) => new Error(string)) {
    return error(message(false, ...argument));
}
export function CallbackObject({ argument, message, error = (string) => new Error(string) }) {
    return error(message({ valid: false, argument }));
}
var Callback;
(function (Callback) {
    Callback.Parameter = CallbackParameter;
    Callback.Object = CallbackObject;
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map