import Argument from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
export default class DynamicMemoizeContainer<Callback extends Callable> {
    functions: Callback;
    compare: (argument: Parameters<Callback>, list: Parameters<Callback>) => boolean;
    readonly memoized: (Argument<Parameters<Callback>> & Return<ReturnType<Callback>>)[];
    constructor(functions: Callback, compare: (argument: Parameters<Callback>, list: Parameters<Callback>) => boolean);
    call(argument: Parameters<Callback>): Argument<Parameters<Callback>> & Return<ReturnType<Callback>>;
    get(argument: Parameters<Callback>): (Argument<Parameters<Callback>> & Return<ReturnType<Callback>>) | null;
}
