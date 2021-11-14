/**
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 * @param argument
 */
export default function CallbackParameters(value, validation, error, ...argument) {
    if (!validation(value, ...argument)) {
        throw error(value, ...argument);
    }
}
//# sourceMappingURL=callback-parameters.js.map