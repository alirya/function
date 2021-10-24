import Callable from "./callable";
import ArgumentContainer from "./argument/argument";
import Callback from "./callback/callback";
import { CallbackParameter } from "./return/callback";
import ReturnMemoize from "./return/memoize";
declare namespace Memoize {
    const Parameter: typeof MemoizeParameter;
    const Object: typeof MemoizeObject;
}
export default Memoize;
export declare type Argument<Function extends Callable> = Callback<Function> & ArgumentContainer<Parameters<Function>>;
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
export declare function MemoizeParameter<Function extends Callable>(callback: Function, ...argument: Parameters<Function>): (() => ReturnType<Function>) & {
    container: ReturnMemoize<CallbackParameter<Function>>;
};
/**
 * object destructure version
 *
 * @param callback
 * @param argument
 */
export declare function MemoizeObject<Function extends Callable>({ callback, argument }: Argument<Function>): (() => ReturnType<Function>) & {
    container: ReturnMemoize<CallbackParameter<Function>>;
};
