import Argument from "../argument";
import Function from "../../function";
import Callback from "../../callback/callback";

/**
 * Use {@link Argument} as argument to call function form {@link Callback}
 */
export default function Call<
    Fn extends Function
>(
    object : Argument<Parameters<Fn>> & Callback<Fn>
) : ReturnType<Fn> {

    return <ReturnType<Fn>> object.callback(...object.argument);

}
