import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
import Callable from "./callable";
export declare type Container<FunctionT extends Callable> = {
    container: ReturnMemoize<ReturnCallback<FunctionT>>;
};
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<FunctionT extends Callable>(data: Argument<Parameters<FunctionT>> & Callback<FunctionT>): (() => ReturnType<FunctionT>) & Container<FunctionT>;
