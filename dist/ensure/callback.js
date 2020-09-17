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
 * @param extras
 * extra argument for both {@param extras} & @param error
 */
export default function Callback(value, validation, error, ...extras) {
    AssertCallback(value, validation, error, ...extras);
    return value;
}
//# sourceMappingURL=callback.js.map