export default function Callback(value, validation, error, ...argument) {
    if (!validation(value, ...argument)) {
        throw error(value, ...argument);
    }
}
function CallbackObject(value, { argument = [], error, validation }) {
    return Callback(value, validation, error, ...argument);
}
Callback.object = CallbackObject;
//# sourceMappingURL=callback.js.map