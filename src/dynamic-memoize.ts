import Equal from '@alirya/array/boolean/equal';
import Container from './object/dynamic-memoize-container';
import Callable from './callable';
import Callback from './callback/callback';
import Validation from '@alirya/boolean/validation/validation';

export function DynamicMemoizeParameters<
    FunctionType extends Callable,
>(
    callback : FunctionType,
    validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal.Parameters,
) : FunctionType & { container : Container.Argument<FunctionType> } {

    const memoizeContainer = new Container.Parameters<FunctionType>(callback, validation);

    const callable : FunctionType & { container ?: Container.Argument<FunctionType> } = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {

        return memoizeContainer.memoize(argument).return;
    };

    callable.container = memoizeContainer;

    return callable as FunctionType & { container : Container.Argument<FunctionType> };
}

export type DynamicMemoizeArgument<FunctionType extends Callable> =
    Callback<FunctionType> &
    Partial<Validation<[Equal.Argument<Parameters<FunctionType>>]>>;

export function DynamicMemoizeParameter <FunctionType extends Callable>({
        callback,
        validation = Equal.Parameter,
    } : DynamicMemoizeArgument<FunctionType>
) : FunctionType & { container : Container.Argument<FunctionType> } {

    return DynamicMemoizeParameters(callback, (value, compare) => validation({value, compare}));
}


namespace DynamicMemoize {
    export const Parameters = DynamicMemoizeParameters;
    export const Parameter = DynamicMemoizeParameter;
}
export default DynamicMemoize;
