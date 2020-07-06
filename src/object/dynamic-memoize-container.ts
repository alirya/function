import Argument from "../argument/argument";
import Returns from "../return/returns";
import Find from "../argument/find";
import Function from "../function";


export class DynamicMemoizeContainer<
    Fn extends Function,
> {

    readonly memoized : (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)[] = [];

    constructor(
        public functions : Fn,
        public compare : Function<[Parameters<Fn>, Parameters<Fn>], boolean>,
    ) {

    }

    call(argument : Parameters<Fn>) : Argument<Parameters<Fn>> & Returns<ReturnType<Fn>> {

        return {
            argument : argument,
            return : this.functions(...argument)
        };
    }

    get(argument : Parameters<Fn>) : (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)|null {

        return Find(this.memoized, argument, this.compare, null);
    }
}

