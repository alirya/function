import Callable from "./callable";
import ArgumentContainer from "./argument/argument";
import Callback from "./callback/callback";
import ReturnCallback from "./return/callback";
import ReturnMemoize from "./return/memoize";
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
declare function Memoize<Function extends Callable>(callback: Function, ...argument: Parameters<Function>): (() => ReturnType<Function>) & {
    container: ReturnMemoize<ReturnCallback<Function>>;
};
declare namespace Memoize {
    var object: <Function_1 extends Callable>({ callback, argument }: Argument<Function_1>) => (() => ReturnType<Function_1>) & {
        container: ReturnMemoize<ReturnCallback<Function_1>>;
    };
}
export default Memoize;
