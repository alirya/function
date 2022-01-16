import Container from './object/dynamic-memoize-container-parameters';
import Callable from './callable';
import Callback from './callback/callback';
import Validation from '@alirya/boolean/validation/validation';
import DynamicMemoizeParameters from './dynamic-memoize-parameters';

export type DynamicMemoizeParameterArgument<FunctionType extends Callable> =
    Callback<FunctionType> &
    Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>>;

export default function DynamicMemoizeParameter <FunctionType extends Callable>({
        callback,
        validation,
    } : DynamicMemoizeParameterArgument<FunctionType>
) : FunctionType & { container : Container<FunctionType> } {

    return DynamicMemoizeParameters(callback, validation);
}
