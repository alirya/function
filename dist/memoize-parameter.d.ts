import Callable from "./callable";
import ArgumentContainer from "./argument/argument";
import Callback from "./callback/callback";
import CallbackParameter from "./return/callback";
import ReturnMemoize from "./return/memoize";
export declare type MemoizeParameterArgument<Function extends Callable> = Callback<Function> & ArgumentContainer<Parameters<Function>>;
/**
 * wrap given {@param callback} to new function and cache its return
 *
 * this more performant than {@link ./memoize.ts} but does not offer
 *
 * @param argument
 * used if cached return is not exits
 *
 * @callback
    * callback to be wrapped
 */
/**
 * object destructure version
 *
 * @param callback
 * @param argument
 */
export default function MemoizeParameter<Function extends Callable>({ callback, argument }: MemoizeParameterArgument<Function>): (() => ReturnType<Function>) & {
    container: ReturnMemoize<CallbackParameter.Type<Function>>;
};
