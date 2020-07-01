import Argument from "../argument/argument";
import Functions from "../functions";
import Value from "@dikac/t-value/value";

/**
 * Use {@link Argument} as argument to call function form {@link Value}
 */
export default function Call<
    Return = any,
    Arg extends any[] = any[]
>(
    object : Argument<Arg> & Value<Functions<Arg, Return>>
) : Return {

    return  object.value(...object.argument);

}
