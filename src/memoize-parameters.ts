import Callable from './callable';
import CallbackParameter, {CallbackParametersType} from './return/callback-parameter';
import CallbackParameters from './return/callback-parameters';
import ReturnMemoize from './return/memoize';

export default function MemoizeParameters<Function extends Callable>(
    callback : Function,
    ... argument : Parameters<Function>
) : (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParametersType<Function>>} {

    const container = new ReturnMemoize(new CallbackParameters(callback, argument));

    const func = function () {

        return container.return;
    };

    func.container = container;

    return func as (() => ReturnType<Function>) & {container : ReturnMemoize<CallbackParametersType<Function>>};
}

