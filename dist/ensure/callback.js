import AssertCallback from "../assert/callback";
export default function Callback(value, { validation, error, argument = [] }) {
    AssertCallback(value, { validation, error, argument });
    return value;
}
//# sourceMappingURL=callback.js.map