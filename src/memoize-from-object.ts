import Functions from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";

export type Container<Fn extends Functions> = {container:ReturnMemoize<ReturnCallback<Fn>>};
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<
    Fn extends Functions,
>(
    data : Argument<Parameters<Fn>> & Callback<Fn>,
) : Functions<[], ReturnType<Fn>> & Container<Fn> {

    let merged : Functions<[], ReturnType<Fn>> & Container<Fn>;

    let callback = new ReturnCallback(data);
    let memoize = new ReturnMemoize(callback);

    let fn = function () : ReturnType<Fn> {

        return memoize.return;
    }

    merged = <Functions<[], ReturnType<Fn>> & Container<Fn>> fn;
    merged.container = memoize;

    return merged;

}


