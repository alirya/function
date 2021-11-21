import CallbackParameters from "./callback-parameters";
export default function CallbackParameter({ argument, message, error = (string) => new Error(string) }) {
    return CallbackParameters(argument, (...argument) => message({ argument }), error);
}
//# sourceMappingURL=callback-parameter.js.map