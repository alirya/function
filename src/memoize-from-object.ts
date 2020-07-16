import Functions from "./function";
import Merge from "@dikac/t-object/merge";
import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import Argument from "./argument/argument";
import Value from "@dikac/t-value/value";

/**
 * wrap given {@param data} {@link Value} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<
    Fn extends Functions,
>(
    data : Argument<Parameters<Fn>> & Value<Fn>,
) : Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>> {

    let merged : Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>>;

    let callback = new Callback(data);
    let memoize = new ReturnMemoize(callback);

    let fn = function () : ReturnType<Fn> {

        return merged.return;
    }

    merged = Merge(fn, memoize);

    return merged;

}


