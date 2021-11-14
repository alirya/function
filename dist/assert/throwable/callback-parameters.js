export default function CallbackParameters(argument, message, error = (string) => new Error(string)) {
    return error(message(false, ...argument));
}
//# sourceMappingURL=callback-parameters.js.map