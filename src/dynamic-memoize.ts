import Equal from '@alirya/array/boolean/equal-parameters';
import Container from './object/dynamic-memoize-container';
import Callable from './callable';

export function DynamicMemoizeParameters<
    FunctionType extends Callable,
>(
    callback : FunctionType,
    validation : Callable<[Parameters<FunctionType>, Parameters<FunctionType>], boolean> = Equal,
) : FunctionType & { container : Container.Argument<FunctionType> } {

    const memoizeContainer = new Container.Parameters<FunctionType>(callback, validation);

    const callable : FunctionType & { container ?: Container.Argument<FunctionType> } = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {

        return memoizeContainer.memoize(argument).return;
    };

    callable.container = memoizeContainer;

    return callable as FunctionType & { container : Container.Argument<FunctionType> };
}


import Callback from './callback/callback';
import Validation from '@alirya/boolean/validation/validation';

export type DynamicMemoizeArgument<FunctionType extends Callable> =
    Callback<FunctionType> &
    Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>>;

export function DynamicMemoizeParameter <FunctionType extends Callable>({
        callback,
        validation,
    } : DynamicMemoizeArgument<FunctionType>
) : FunctionType & { container : Container.Argument<FunctionType> } {

    return DynamicMemoizeParameters(callback, validation);
}


namespace DynamicMemoize {
    export const Parameters = DynamicMemoizeParameters;
    export const Parameter = DynamicMemoizeParameter;
}
export default DynamicMemoize;
