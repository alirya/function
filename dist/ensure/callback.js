import AssertCallback from "../assert/callback";
/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 * extra argument for both {@param argument} & {@param error}
 */
export default function Callback(value, validation, error, ...argument) {
    AssertCallback(value, validation, error, ...argument);
    return value;
}
/**
 * object destructure version
 *
 * @param value
 * @param validation
 * @param error
 * @param argument
 */
Callback.object = function ({ value, validation, error, argument }) {
    return Callback(value, validation, error, ...argument);
};
//# sourceMappingURL=callback.js.map