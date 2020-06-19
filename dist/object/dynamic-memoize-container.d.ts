import Argument from "../argument/argument";
import Returns from "../returns/returns";
import Functions from "../functions";
export declare class DynamicMemoizeContainer<Fn extends Functions> {
    functions: Fn;
    compare: Functions<[Parameters<Fn>, Parameters<Fn>], boolean>;
    readonly memoized: (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)[];
    constructor(functions: Fn, compare: Functions<[Parameters<Fn>, Parameters<Fn>], boolean>);
    call(argument: Parameters<Fn>): Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>;
    get(argument: Parameters<Fn>): (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>) | null;
}
