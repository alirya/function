import Callable from "./callable";
import ArgumentContainer from "./argument/argument";
import Callback from "./callback/callback";
import {CallbackParameter} from "./return/callback";
import ReturnMemoize from "./return/memoize";

namespace Memoize {

    export const Parameter = MemoizeParameter;
    export const Object = MemoizeObject;
}

export default Memoize;


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

export function MemoizeParameter<Function extends Callable>(
    callback : Function,
    ... argument : Parameters<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParameter<Function>>} {

    const container = new ReturnMemoize(new CallbackParameter(callback, argument))

    const func = function () {

        return container.return;
    }

    func.container = container;

    return func as (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParameter<Function>>};
}

/**
 * object destructure version
 *
 * @param callback
 * @param argument
 */
export function MemoizeObject <Function extends Callable>(
    {callback, argument} : Argument<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParameter<Function>>} {

    return MemoizeParameter(callback, ...argument);
}

