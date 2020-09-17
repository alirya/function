/**
 * wrap given {@param callback} to new function and cache its return
 *
 * this more performant than {@link ./memoize.ts} but does not offer
 *
 * @param argument
 * used if cached return is not exits
 *
 * @callback
    * callback to be wrapped
 */
export default function MemoizeStatic(callback, ...argument) {
    const fn = function () {
        if (fn.callback) {
            fn.return = fn.callback(...fn.argument);
            delete fn.callback;
            delete fn.argument;
        }
        return fn.return;
    };
    fn.callback = callback;
    fn.return = undefined;
    fn.argument = argument;
    return fn;
}
//# sourceMappingURL=memoize-static.js.map