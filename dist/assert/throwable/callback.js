export default function Callback(argument, message, error = (string) => new Error(string)) {
    return error(message(false, ...argument));
}
//# sourceMappingURL=callback.js.map