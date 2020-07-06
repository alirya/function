import Argument from "../argument/argument";
import Returns from "./returns";
import Functions from "../functions";
import Value from "@dikac/t-value/value";
import FunctionCall from "../any/call";

/**
 * Use {@link Argument} as argument to call function form {@link Value}
 * and set return value to {@link Returns}
 */
export default function Call<
    Return = any,
    Arg extends any[] = any[]
>(
    object : Argument<Arg> & Value<Functions<Arg, Return>> & Partial<Returns<Return>>
) : Argument<Arg> & Value<Functions<Arg, Return>> & Returns<Return> {

    object.return = FunctionCall(object);

    return <Argument<Arg> & Value<Functions<Arg, Return>> & Returns<Return>> object;

}
