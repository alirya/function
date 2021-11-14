import CallbackParameters from "./callback-parameters";
export default function CallbackParameter(value, { argument = [], error, validation }) {
    return CallbackParameters(value, validation, error, ...argument);
}
//# sourceMappingURL=callback-parameter.js.map