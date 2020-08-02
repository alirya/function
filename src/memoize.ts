import Function from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import MemoizeFromObject from "./memoize-from-object";

/**
 * wrap given {@param callback} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<
    FunctionT extends Function,
>(
    callback : FunctionT,
    ...argument : Parameters<FunctionT>
) : Function<[], ReturnType<FunctionT>> & {container:ReturnMemoize<Callback<FunctionT>>} {

    return MemoizeFromObject({
        callback : callback,
        argument : argument,
    });

}


