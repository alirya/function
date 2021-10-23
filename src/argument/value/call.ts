import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function Call<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>,
) : ReturnType<FunctionType> {

    return <ReturnType<FunctionType>> callback(...argument);
}

Call.object = function<FunctionType extends Callable> (
    {callback, argument} : Argument<Parameters<FunctionType>> & Callback<FunctionType>
) {
    return Call(callback, argument);
}
