/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function Call(callback, argument) {
    return callback(...argument);
}
Call.object = function ({ callback, argument }) {
    return Call(callback, argument);
};
//# sourceMappingURL=call.js.map