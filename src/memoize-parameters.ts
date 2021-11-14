import Callable from "./callable";
import CallbackParameter from "./return/callback";
import ReturnMemoize from "./return/memoize";

export default function MemoizeParameters<Function extends Callable>(
    callback : Function,
    ... argument : Parameters<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParameter.Type<Function>>} {

    const container = new ReturnMemoize(new CallbackParameter.Parameters(callback, argument))

    const func = function () {

        return container.return;
    }

    func.container = container;

    return func as (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParameter.Type<Function>>};
}

