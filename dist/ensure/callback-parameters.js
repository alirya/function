import Assert from "../assert/callback";
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
export default function CallbackParameters(value, validation, error, ...argument) {
    Assert.Parameters(value, validation, error, ...argument);
    return value;
}
//# sourceMappingURL=callback-parameters.js.map