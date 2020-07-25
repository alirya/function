import Argument from "../argument/argument";
import Return from "../return/return";
import Function from "../function";
export default class DynamicMemoizeContainer<Fn extends Function> {
    functions: Fn;
    compare: Function<[Parameters<Fn>, Parameters<Fn>], boolean>;
    readonly memoized: (Argument<Parameters<Fn>> & Return<ReturnType<Fn>>)[];
    constructor(functions: Fn, compare: Function<[Parameters<Fn>, Parameters<Fn>], boolean>);
    call(argument: Parameters<Fn>): Argument<Parameters<Fn>> & Return<ReturnType<Fn>>;
    get(argument: Parameters<Fn>): (Argument<Parameters<Fn>> & Return<ReturnType<Fn>>) | null;
}
