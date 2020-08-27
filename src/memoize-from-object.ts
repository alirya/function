import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
import Callable from "./callable";

export type Container<FunctionT extends Callable> = {container:ReturnMemoize<ReturnCallback<FunctionT>>};
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<
    FunctionT extends Callable,
>(
    data : Argument<Parameters<FunctionT>> & Callback<FunctionT>,
) : (()=>ReturnType<FunctionT>) & Container<FunctionT> {

    let merged : (()=>ReturnType<FunctionT>) & Container<FunctionT>;

    let callback = new ReturnCallback(data);
    let memoize = new ReturnMemoize(callback);

    let fn = function () : ReturnType<FunctionT> {

        return memoize.return;
    }

    merged = <(()=>ReturnType<FunctionT>) & Container<FunctionT>> fn;
    merged.container = memoize;

    return merged;

}


