export default function CallbackParameter({ argument, message, error = (string) => new Error(string) }) {
    return error(message({ valid: false, argument }));
}
//# sourceMappingURL=callback-parameter.js.map