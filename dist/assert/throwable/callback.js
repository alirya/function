export default function Callback({ argument, message, error = (string) => new Error(string) }) {
    return error(message({ valid: false, argument }));
}
//# sourceMappingURL=callback.js.map