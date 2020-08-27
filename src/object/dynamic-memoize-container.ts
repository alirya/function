import Argument from "../argument/argument";
import Return from "../return/return";
import Find from "../argument/find";
import Callable from "../callable";

export default class DynamicMemoizeContainer<
    Callback extends Callable,
> {

    readonly memoized : (Argument<Parameters<Callback>> & Return<ReturnType<Callback>>)[] = [];

    constructor(
        public functions : Callback,
        public compare : (argument : Parameters<Callback>, list : Parameters<Callback>) => boolean
    ) {
    }

    call(argument : Parameters<Callback>) : Argument<Parameters<Callback>> & Return<ReturnType<Callback>> {

        return {
            argument : argument,
            return : <ReturnType<Callback>>this.functions(...argument)
        };
    }

    get(argument : Parameters<Callback>) : (Argument<Parameters<Callback>> & Return<ReturnType<Callback>>)|null {

        return Find(this.memoized, argument, this.compare, null);
    }
}
