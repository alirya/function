import Functions from "./functions";
import Merge from "@dikac/t-object/merge";
import ReturnMemoize from "./return/memoize";
import Callback from "./return/callback";

/**
 * wrap given {@param callable} to new function and cache its return
 *
 * {@param argument} is used if cached return is not exits
 */
export default function Memoize<
    Fn extends Functions,
>(
    callable : Fn,
    ...argument : Parameters<Fn>
) : Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>> {

    let merged : Functions<[], ReturnType<Fn>> & ReturnMemoize<Callback<Fn>>;

    let callback = new Callback(callable, argument)
    let memoize = new ReturnMemoize(callback)

    let fn = function () : ReturnType<Fn> {

        return merged.return;
    }

    merged = Merge(fn, memoize);

    return merged;

}


