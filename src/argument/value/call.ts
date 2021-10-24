import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export function CallParameter<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>,
) : ReturnType<FunctionType> {

    return <ReturnType<FunctionType>> callback(...argument);
}

export function CallObject <FunctionType extends Callable> (
    {callback, argument} : Argument<Parameters<FunctionType>> & Callback<FunctionType>
) {
    return CallParameter(callback, argument);
}

namespace Call {

    export const Parameter = CallParameter;
    export const Object = CallObject;
}

export default Call;
