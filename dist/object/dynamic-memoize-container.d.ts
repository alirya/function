import Argument from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
declare type Memoized<Callback extends Callable> = Argument<Parameters<Callback>> & Return<ReturnType<Callback>>;
export default class DynamicMemoizeContainer<Callback extends Callable> {
    functions: Callback;
    compare: (argument: Parameters<Callback>, list: Parameters<Callback>) => boolean;
    readonly memoized: Memoized<Callback>[];
    constructor(functions: Callback, compare: (argument: Parameters<Callback>, list: Parameters<Callback>) => boolean);
    call(argument: Parameters<Callback>): Argument<Parameters<Callback>> & Return<ReturnType<Callback>>;
    memoize(argument: Parameters<Callback>): Argument<Parameters<Callback>> & Return<ReturnType<Callback>>;
    get(argument: Parameters<Callback>): Memoized<Callback> | null;
}
export {};
