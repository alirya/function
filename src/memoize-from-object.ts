import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
import Callable from "./callable";

export type Container<FunctionType extends Callable> = {container:ReturnMemoize<ReturnCallback<FunctionType>>};
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<
    FunctionType extends Callable,
>(
    data : Argument<Parameters<FunctionType>> & Callback<FunctionType>,
) : (()=>ReturnType<FunctionType>) & Container<FunctionType> {

    let merged : (()=>ReturnType<FunctionType>) & Container<FunctionType>;

    let callback = new ReturnCallback(data);
    let memoize = new ReturnMemoize(callback);

    let fn = function () : ReturnType<FunctionType> {

        return memoize.return;
    }

    merged = <(()=>ReturnType<FunctionType>) & Container<FunctionType>> fn;
    merged.container = memoize;

    return merged;

}


