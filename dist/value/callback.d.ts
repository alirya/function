import Value from "@dikac/t-value/value";
import Argument from "../argument/argument";
import Functions from "../function";
export default class Callback<Fn extends Functions> implements Readonly<Value<ReturnType<Fn>>>, Argument<Parameters<Fn>> {
    functions: Fn;
    argument: Parameters<Fn>;
    constructor(functions: Fn, argument: Parameters<Fn>);
    get value(): ReturnType<Fn>;
}
