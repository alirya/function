export default function Callback(argument, message, error = (string) => new Error(string)) {
    return error(message(false, ...argument));
}
function CallbackObject({ argument, message, error = (string) => new Error(string) }) {
    return error(message({ valid: false, argument }));
}
Callback.object = CallbackObject;
//# sourceMappingURL=callback.js.map