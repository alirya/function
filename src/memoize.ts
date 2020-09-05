import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import MemoizeFromObject from "./memoize-from-object";
import Callable from "./callable";

/**
 * wrap given {@param callback} to new function and cache its return, with
 * memoization control option but less performant than {@link ./memoize-static.ts}
 *
 * @param argument
 * used if cached return is not exits
 *
 * @callback
 * callback to be wrapped
 */
export default function Memoize<
    FunctionT extends Callable,
>(
    callback : FunctionT,
    ...argument : Parameters<FunctionT>
) : (()=>ReturnType<FunctionT>) & {container:ReturnMemoize<Callback<FunctionT>>} {

    return MemoizeFromObject({
        callback : callback,
        argument : argument,
    });

}


