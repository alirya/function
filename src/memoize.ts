import Callable from "./callable";
import IsFunction from "./boolean/function";
import Return from "./return/return";
import ArgumentContainer from "./argument/argument";
import Callback from "./callback/callback";
import ReturnCallback from "./return/callback";
import ReturnMemoize from "./return/memoize";
import MemoizedReturnCallback from "@dikac/t-iterable/memoized-return-callback";

export type Argument<Function extends Callable> = Callback<Function> & ArgumentContainer<Parameters<Function>>;
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

export default function Memoize<Function extends Callable>(
    callback : Function,
    ... argument : Parameters<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<ReturnCallback<Function>>} {

    const container = new ReturnMemoize(new ReturnCallback(callback, argument))

    const func = function () {

        return container.return;
    }

    func.container = container;

    return func as (() => ReturnType<Function>) & {container : ReturnMemoize<ReturnCallback<Function>>};
}

/**
 * object destructure version
 *
 * @param callback
 * @param argument
 */
Memoize.object = function <Function extends Callable>(
    {callback, argument} : Argument<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<ReturnCallback<Function>>} {

    return Memoize(callback, ...argument);
}
