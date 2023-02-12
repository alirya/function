import Callable from './callable.js';
import {CallbackType, CallbackParameters} from './return/callback.js';
import ReturnMemoize from './return/memoize.js';
import ArgumentContainer from './argument/argument.js';
import Callback from './callback/callback.js';

export function MemoizeParameters<Function extends Callable>(
    callback : Function,
    ... argument : Parameters<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackType<Function>>} {

    const container = new ReturnMemoize(new CallbackParameters(callback, argument));

    const func = function () {

        return container.return;
    };

    func.container = container;

    return func as (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackType<Function>>};
}



export type MemoizeArgument<Function extends Callable> = Callback<Function> & ArgumentContainer<Parameters<Function>>;
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
export function MemoizeParameter <Function extends Callable>(
    {callback, argument} : MemoizeArgument<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackType<Function>>} {

    return MemoizeParameters(callback, ...argument);
}



namespace Memoize {
    export const Parameters = MemoizeParameters;
    export const Parameter = MemoizeParameter;
    export type Argument<Function extends Callable> = MemoizeArgument<Function>;
}
export default Memoize;
