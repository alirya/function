import Equal from "@dikac/t-array/boolean/equal";
import DynamicMemoizeContainer from "./object/dynamic-memoize-container";
import Callable from "./callable";
import Callback from "./callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";
import IsFunction from "./boolean/function";

export type Argument<FunctionType extends Callable> =
    Callback<FunctionType> &
    Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>>;

export default function DynamicMemoize<
    FunctionType extends Callable,
>(
    callback : FunctionType,
    validation : Argument<FunctionType>['validation'] = Equal,
) : FunctionType & { container : DynamicMemoizeContainer<FunctionType> } {

    const memoizeContainer = new DynamicMemoizeContainer<FunctionType>(callback, validation);

    const callable : FunctionType & { container ?: DynamicMemoizeContainer<FunctionType> } = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {

        return memoizeContainer.memoize(argument).return;
    };

    callable.container = memoizeContainer;

    return callable as FunctionType & { container : DynamicMemoizeContainer<FunctionType> };
}


DynamicMemoize.object = function <FunctionType extends Callable>({
        callback,
        validation,
    } : Argument<FunctionType>
) : FunctionType & { container : DynamicMemoizeContainer<FunctionType> } {

    return DynamicMemoize(callback, validation);
}
