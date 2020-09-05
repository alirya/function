import Callable from "./callable";
import Return from "./return/return";
import Argument from "./argument/argument";
import Callback from "./callback/callback";

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
export default function MemoizeStatic<Function extends Callable>(
    callback : Function,
    ... argument : Parameters<Function>
) : () => ReturnType<Function> {

    const fn = function () {

        if(fn.callback) {

            fn.return = fn.callback(... <Parameters<Function>>fn.argument) as ReturnType<Function>;
            delete fn.callback;
            delete fn.argument;
        }

        return fn.return;

    } as (()=> ReturnType<Function>) & Partial<Callback<Function>> & Return<undefined|ReturnType<Function>> & Argument<undefined|Parameters<Function>>;

    fn.callback = callback;
    fn.return = undefined;
    fn.argument = argument;

    return fn;
}
