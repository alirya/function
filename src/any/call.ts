import Argument from "../argument/argument";
import InferArgument from "../argument/infer/argument";
import Returns from "../returns/returns";
import Functions from "../function";
import Value from "@dikac/t-value/value";

export default function Call<
    Return = any,
    Arg extends any[] = any[]
>(
    object : Argument<Arg> & Value<Functions<Arg, Return>>
) : Return {

    return  object.value(...object.argument);

}
