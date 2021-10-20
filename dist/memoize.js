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
export default function Memoize({ callback, argument }) {
    const called = false;
    let data;
    return function () {
        if (!called) {
            data = callback(...argument);
        }
        return data;
    };
    // const fn = function () {
    //
    //     if(fn.callback) {
    //
    //         fn.return = fn.callback(... <Parameters<Function>>fn.argument) as ReturnType<Function>;
    //         delete fn.callback;
    //         delete fn.argument;
    //     }
    //
    //     return fn.return;
    //
    // } as (()=> ReturnType<Function>) & Partial<Callback<Function>> & Return<undefined|ReturnType<Function>> & Argument<undefined|Parameters<Function>>;
    //
    // fn.callback = callback;
    // fn.return = undefined;
    // fn.argument = argument;
    //
    // return fn;
}
//# sourceMappingURL=memoize.js.map