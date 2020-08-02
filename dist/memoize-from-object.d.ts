import Function from "./function";
import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
export declare type Container<FunctionT extends Function> = {
    container: ReturnMemoize<ReturnCallback<FunctionT>>;
};
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<FunctionT extends Function>(data: Argument<Parameters<FunctionT>> & Callback<FunctionT>): Function<[], ReturnType<FunctionT>> & Container<FunctionT>;
