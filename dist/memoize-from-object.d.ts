import ReturnMemoize from "./return/memoize-from-object";
import ReturnCallback from "./return/callback";
import Argument from "./argument/argument";
import Callback from "./callback/callback";
import Callable from "./callable";
export declare type Container<FunctionType extends Callable> = {
    container: ReturnMemoize<ReturnCallback<FunctionType>>;
};
/**
 * wrap given {@param data} {@link Callback} to new function and cache its return
 *
 * {@param data} {@link Argument} is used if cached return is not exits
 */
export default function MemoizeFromObject<FunctionType extends Callable>(data: Argument<Parameters<FunctionType>> & Callback<FunctionType>): (() => ReturnType<FunctionType>) & Container<FunctionType>;
