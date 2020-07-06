import Argument from "../argument/argument";
import Returns from "../return/returns";
import Function from "../function";
export declare class DynamicMemoizeContainer<Fn extends Function> {
    functions: Fn;
    compare: Function<[Parameters<Fn>, Parameters<Fn>], boolean>;
    readonly memoized: (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)[];
    constructor(functions: Fn, compare: Function<[Parameters<Fn>, Parameters<Fn>], boolean>);
    call(argument: Parameters<Fn>): Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>;
    get(argument: Parameters<Fn>): (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>) | null;
}
