/**
 * @deprecated use instead from iterable
 *
 * Find match {@param argument} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function Find(list, argument, validation, defaults) {
    for (const object of list) {
        if (validation(argument, object.argument)) {
            return object;
        }
    }
    return defaults;
}
//# sourceMappingURL=find.js.map