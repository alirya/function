export function CallbackParameter(value, validation, error, ...argument) {
    if (!validation(value, ...argument)) {
        throw error(value, ...argument);
    }
}
export function CallbackObject(value, { argument = [], error, validation }) {
    return CallbackParameter(value, validation, error, ...argument);
}
var Callback;
(function (Callback) {
    Callback.Parameter = CallbackParameter;
    Callback.Object = CallbackObject;
})(Callback || (Callback = {}));
export default Callback;
//# sourceMappingURL=callback.js.map