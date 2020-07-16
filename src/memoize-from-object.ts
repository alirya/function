import Functions from "./function";
import Merge from "@dikac/t-object/merge";
import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";

/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<
    Fn extends Functions,
>(
    data : Argument<Parameters<Fn>> & Callback<Fn>,
) : Functions<[], ReturnType<Fn>> & ReturnMemoize<ReturnCallback<Fn>> {

    let merged : Functions<[], ReturnType<Fn>> & ReturnMemoize<ReturnCallback<Fn>>;

    let callback = new ReturnCallback(data);
    let memoize = new ReturnMemoize(callback);

    let fn = function () : ReturnType<Fn> {

        return merged.return;
    }

    merged = Merge(fn, memoize);

    return merged;

}


