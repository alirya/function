import Argument from "../argument/argument";
import Return from "../return/return";
import Callable from "../callable";
import Find from "@dikac/t-iterable/value/find";

type Memoized<Callback extends Callable> = Argument<Parameters<Callback>> & Return<ReturnType<Callback>>;

export default class DynamicMemoizeContainer<
    Callback extends Callable,
> {

    readonly memoized : Memoized<Callback>[] = [];

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

    memoize(argument : Parameters<Callback>) : Argument<Parameters<Callback>> & Return<ReturnType<Callback>> {

        let memoized = this.get(argument);

        if(!memoized) {

            memoized = this.call(argument);
            this.memoized.push(memoized);
        }

        return memoized;
    }

    get(argument : Parameters<Callback>) : Memoized<Callback>|null {

        return Find(
            this.memoized,
            (memoized)=> this.compare(argument, memoized.argument), null
        );
    }
}
