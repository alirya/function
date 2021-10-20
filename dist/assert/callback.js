export default function Callback(value, { argument = [], error, validation }) {
    if (!validation(value, ...argument)) {
        throw error(value, ...argument);
    }
}
//# sourceMappingURL=callback.js.map