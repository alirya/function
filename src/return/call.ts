import ArgumentInterface from "../argument/argument";
import ReturnInterface from "./return";
import FunctionCall from "../argument/any/call";
import Function from "../function";
import Callback from "../callback/callback";

/**
 * Use {@link ArgumentInterface} as argument to call function form {@link Callback}
 * and set return value to {@link Return}
 */
export default function Call<
    Fn extends Function
>(
    object : ArgumentInterface<Parameters<Fn>> & Callback<Fn> & ReturnInterface<ReturnType<Fn>>
) : ArgumentInterface<Parameters<Fn>> & Callback<Fn> & ReturnInterface<ReturnType<Fn>> {

    object.return = FunctionCall(object);

    return <ArgumentInterface<Parameters<Fn>> & Callback<Fn> & ReturnInterface<ReturnType<Fn>>> object;

}
