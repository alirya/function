import Callable from "./callable";
import DynamicMemoizeParameters from "./dynamic-memoize-parameters";
import DynamicMemoizeParameter, {DynamicMemoizeParameterArgument} from "./dynamic-memoize-parameter";
//
// export type Argument<FunctionType extends Callable> =
//     Callback<FunctionType> &
//     Partial<Validation<[Parameters<FunctionType>, Parameters<FunctionType>]>>;
//
// export function DynamicMemoizeParameter<
//     FunctionType extends Callable,
// >(
//     callback : FunctionType,
//     validation : Argument<FunctionType>['validation'] = Equal,
// ) : FunctionType & { container : Container<FunctionType> } {
//
//     const memoizeContainer = new Container<FunctionType>(callback, validation);
//
//     const callable : FunctionType & { container ?: Container<FunctionType> } = <FunctionType> function (... argument : Parameters<FunctionType>) : ReturnType<FunctionType> {
//
//         return memoizeContainer.memoize(argument).return;
//     };
//
//     callable.container = memoizeContainer;
//
//     return callable as FunctionType & { container : Container<FunctionType> };
// }
//
//
// export function DynamicMemoizeObject <FunctionType extends Callable>({
//         callback,
//         validation,
//     } : Argument<FunctionType>
// ) : FunctionType & { container : Container<FunctionType> } {
//
//     return DynamicMemoizeParameter(callback, validation);
// }


namespace DynamicMemoize {

    export const Parameters = DynamicMemoizeParameters;
    export const Parameter = DynamicMemoizeParameter;
    export type Argument<FunctionType extends Callable> = DynamicMemoizeParameterArgument<FunctionType>;
}

export default DynamicMemoize;
