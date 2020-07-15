import Argument from "../argument/argument";
import Return from "./return";
import Value from "@dikac/t-value/value";
import Function from "../function";
export default class Callback<Fn extends Function> implements Readonly<Argument<Parameters<Fn>>>, Readonly<Return<ReturnType<Fn>>> {
    subject: Argument<Parameters<Fn>> & Value<Fn>;
    constructor(subject: Argument<Parameters<Fn>> & Value<Fn>);
    get return(): ReturnType<Fn>;
    get argument(): Parameters<Fn>;
    get value(): Fn;
}
