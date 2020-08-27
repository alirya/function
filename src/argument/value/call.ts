import Argument from "../argument";
import Callback from "../../callback/callback";
import Callable from "../../callable";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function Call<
    FunctionT extends Callable
>(
    object : Argument<Parameters<FunctionT>> & Callback<FunctionT>
) : ReturnType<FunctionT> {

    return <ReturnType<FunctionT>> object.callback(...object.argument);

}
