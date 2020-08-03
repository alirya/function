import Argument from "../argument";
import Function from "../../function";
import Callback from "../../callback/callback";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function Call<
    FunctionT extends Function
>(
    object : Argument<Parameters<FunctionT>> & Callback<FunctionT>
) : ReturnType<FunctionT> {

    return <ReturnType<FunctionT>> object.callback(...object.argument);

}
