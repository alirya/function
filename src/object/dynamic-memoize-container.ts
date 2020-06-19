import Argument from "../argument/argument";
import Returns from "../return/returns";
import Functions from "../functions";
import Find from "../argument/find";


export class DynamicMemoizeContainer<
    Fn extends Functions,
> {

    readonly memoized : (Argument<Parameters<Fn>> & Returns<ReturnType<Fn>>)[] = [];

    constructor(
        public functions : Fn,
        public compare : Functions<[Parameters<Fn>, Parameters<Fn>], boolean>,
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

