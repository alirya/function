import Argument from "../argument/argument";
import Returns from "./returns";
import Value from "@dikac/t-value/value";
import FunctionCall from "../any/call";
import Function from "../function";

/**
 * Use {@link Argument} as argument to call function form {@link Value}
 * and set return value to {@link Returns}
 */
export default function Call<
    Return = any,
    Arg extends any[] = any[]
>(
    object : Argument<Arg> & Value<Function<Arg, Return>> & Partial<Returns<Return>>
) : Argument<Arg> & Value<Function<Arg, Return>> & Returns<Return> {

    object.return = FunctionCall(object);

    return <Argument<Arg> & Value<Function<Arg, Return>> & Returns<Return>> object;

}
