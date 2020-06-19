import Argument from "../argument/argument";
import Returns from "../returns/returns";
import Functions from "../functions";
import Value from "@dikac/t-value/value";
import Call from "./call";

export default function CallReturn<
    Return = any,
    Arg extends any[] = any[]
>(
    object : Argument<Arg> & Value<Functions<Arg, Return>> & Partial<Returns<Return>>
) : Return {

    object.return = Call(object);

    return object.return;

}
