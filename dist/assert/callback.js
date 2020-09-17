/**
 * Assert if {@param value} and {@param extras} valid according to
 *
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */
export default function Callback(value, validation, error, ...extras) {
    if (!validation(value, ...extras)) {
        throw error(value, ...extras);
    }
}
//# sourceMappingURL=callback.js.map