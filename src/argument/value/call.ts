import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function Call<
    FunctionType extends Callable
>(
    object : Argument<Parameters<FunctionType>> & Callback<FunctionType>
) : ReturnType<FunctionType> {

    return <ReturnType<FunctionType>> object.callback(...object.argument);

}
