import Functions from "./function";
import Merge from "@dikac/t-object/merge";
import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import Argument from "./argument/argument";
import Value from "@dikac/t-value/value";
import MemoizeFromObject from "./memoize-from-object";

/**
 * wrap given {@param callback} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<
    Fn extends Functions,
>(
    callback : Fn,
    ...argument : Parameters<Fn>
) : Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>> {

    return MemoizeFromObject({
        value : callback,
        argument : argument
    });

}


