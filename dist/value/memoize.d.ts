import Value from "@dikac/t-value/value";
import Argument from "../argument/argument";
import Functions from "../function";
export default class Memoize<Fn extends Functions> implements Readonly<Value<ReturnType<Fn>>>, Argument<Parameters<Fn>> {
    functions: Fn;
    argument: Parameters<Fn>;
    protected memoized: Value<ReturnType<Fn>> | undefined;
    constructor(functions: Fn, argument: Parameters<Fn>);
    clear(): void;
    get valid(): boolean;
    get value(): ReturnType<Fn>;
}
